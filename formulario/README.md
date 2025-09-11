## MVP – Solicitação de Acesso e Criação de E-mail

Protótipo funcional full‑stack baseado nos documentos em `docs/`:

- `docs/cenario-ideal.md`
- `docs/requisitos.md`
- `docs/solicitacao_email_atendimento.md`

Arquitetura

- Backend: Node.js + Express + SQLite (mock das integrações externas)
- Frontend: React + Material UI (Stepper em 4 etapas)
- Ambiente: Docker Compose (dois serviços: `backend` e `frontend`), rede `app-network`

Como executar (Docker Compose)

1) Requisitos: Docker + Docker Compose
2) Suba os serviços:

```
docker-compose up --build
```

3) Acesse o frontend: http://localhost:3000

O frontend consome as APIs via `http://backend:5000` (DNS interno da rede do Compose).

Serviços

- backend (porta 5000): API Express + SQLite com volume persistente `dbdata`.
- frontend (porta 3000): SPA React (Vite + MUI).

APIs (Backend)

- `GET /verificar-email/:cpf` → mock da API de e‑mail. Retorna `{ existe: true, email }` ou `{ existe: false }`.
- `GET /buscar-dados/:cpf` → busca no SQLite. Se não existir, `{ encontrado: false }` e retorna dados mock do gestor (SGEO).
- `POST /salvar-solicitacao` → grava solicitação no SQLite. Body: `{ cpf, dados }`.
- `POST /notificar-gestor` → mock de notificação (retorna `{ sucesso: true }`).
- `POST /enviar-sdp` → mock de abertura de incidente no SDP `{ incidente: "INC123456" }`.

Banco (SQLite)

- `usuarios (cpf, nome, telefone, emailContato, cargo, setor, termoAssinado BOOLEAN)`
- `gestores (matricula, nome, secretaria, unidadeGestora, telefone, emailGestor, emailContatoGestor)`
- `solicitacoes (id, cpf, dados, status, incidente)`

Frontend (Fluxo)

Stepper com 4 etapas conforme `docs/requisitos.md`:

1) Escolha do Serviço: checkboxes (e‑mail, login de rede, pasta compartilhamento) e tipo de e‑mail quando marcado.
2) Dados do Colaborador: CPF dispara `verificar-email` e `buscar-dados` para autopreencher. Exibe alerta se já possuir e‑mail. Checkbox para confirmar Termo de Responsabilidade.
3) Dados do Gestor: busca mock (SGEO) para preencher; permite edição e marcação de “necessita validação”.
4) Revisão e Envio: resumo. Envio chama `salvar-solicitacao` → `notificar-gestor` → `enviar-sdp`; exibe nº do incidente.

Estrutura

- `server/` → Backend (Express + SQLite)
  - `server.js`, `package.json`, `Dockerfile`
- `frontend/` → Frontend (Vite + React + MUI)
  - `src/` (App.tsx, componentes de etapas, api.ts)
  - `Dockerfile`, `index.html`, `vite.config.ts`
- `docker-compose.yml` → Orquestração com rede `app-network`

Observações

- O backend inicializa o banco e inclui um usuário de exemplo (CPF `12345678901`).
- Variável `VITE_API_URL` é definida no serviço do frontend apontando para `http://backend:5000`.
- O objetivo é simular o fluxo de ponta a ponta descrito em `docs/cenario-ideal.md`.
