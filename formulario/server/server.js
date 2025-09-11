import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import sqlite3 from 'sqlite3';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// SQLite init
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
const dbPath = path.join(dataDir, 'app.db');
sqlite3.verbose();
const db = new sqlite3.Database(dbPath);

function initDb() {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
      cpf TEXT PRIMARY KEY,
      nome TEXT,
      telefone TEXT,
      emailContato TEXT,
      cargo TEXT,
      setor TEXT,
      termoAssinado INTEGER DEFAULT 0
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS gestores (
      matricula TEXT PRIMARY KEY,
      nome TEXT,
      secretaria TEXT,
      unidadeGestora TEXT,
      telefone TEXT,
      emailGestor TEXT,
      emailContatoGestor TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS solicitacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cpf TEXT,
      dados TEXT,
      status TEXT,
      incidente TEXT
    )`);

    // Seed simples para demonstração
    db.run(`INSERT OR IGNORE INTO usuarios (cpf, nome, telefone, emailContato, cargo, setor, termoAssinado)
            VALUES (?,?,?,?,?,?,?)`,
      ['12345678901', 'João da Silva', '(11) 98888-7777', 'joao.silva@exemplo.com', 'Analista', 'UG-002', 1]
    );
  });
}

initDb();

// Mocks externos
const mockEmails = new Map([
  ['11122233344', 'usuario@org.br'],
  ['12345678901', 'joao.silva@org.br'],
]);

const defaultGestor = {
  matricula: 'G12345',
  nome: 'Gestor Padrão',
  secretaria: 'Secretaria de TI',
  unidadeGestora: 'UG-001',
  telefone: '(11) 99999-0000',
  emailGestor: 'gestor.padrao@org.br',
  emailContatoGestor: 'gestor@org.br',
};

// Rotas
app.get('/verificar-email/:cpf', (req, res) => {
  const { cpf } = req.params;
  const email = mockEmails.get(String(cpf));
  if (email) return res.json({ existe: true, email });
  return res.json({ existe: false });
});

app.get('/buscar-dados/:cpf', (req, res) => {
  const { cpf } = req.params;
  db.get('SELECT * FROM usuarios WHERE cpf = ?', [cpf], (err, row) => {
    if (err) return res.status(500).json({ erro: 'DB_ERROR' });
    if (!row) return res.json({ encontrado: false, gestor: defaultGestor });
    return res.json({ encontrado: true, usuario: row, gestor: defaultGestor });
  });
});

app.post('/salvar-solicitacao', (req, res) => {
  const { cpf, dados } = req.body || {};
  if (!cpf || !dados) return res.status(400).json({ erro: 'DADOS_INVALIDOS' });
  const sql = 'INSERT INTO solicitacoes (cpf, dados, status, incidente) VALUES (?, ?, ?, ?)';
  db.run(sql, [cpf, JSON.stringify(dados), 'Criada', null], function (err) {
    if (err) return res.status(500).json({ erro: 'DB_ERROR' });
    return res.json({ id: this.lastID, status: 'Criada' });
  });
});

app.post('/notificar-gestor', (req, res) => {
  setTimeout(() => res.json({ sucesso: true }), 300);
});

app.post('/enviar-sdp', (req, res) => {
  const incidente = 'INC' + Math.floor(100000 + Math.random() * 900000);
  setTimeout(() => res.json({ incidente }), 300);
});

app.get('/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Backend ouvindo em http://localhost:${PORT}`);
});

