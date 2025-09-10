export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: 32, fontFamily: 'sans-serif' }}>
      <h1>SETDIG - Solicitação de Acesso</h1>
      <p>Solicite acesso aos Sistemas Institucionais mantidos pela SETDIG.</p>
      <hr style={{ margin: '24px 0' }} />
      <h2>Quem Necessita de Acesso?</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input placeholder="Nome Completo do Colaborador *" style={{ flex: 1 }} />
          <input placeholder="Nome Social do Colaborador" style={{ flex: 1 }} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input placeholder="CPF do Colaborador/Servidor *" style={{ flex: 1 }} />
          <input placeholder="Telefone do Colaborador/Servidor *" style={{ flex: 1 }} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input placeholder="E-mail do Colaborador/Servidor *" style={{ flex: 1 }} />
          <input placeholder="Confirmar e-mail" style={{ flex: 1 }} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <select style={{ flex: 1 }} defaultValue="">
            <option value="" disabled>Selecione a Cidade *</option>
            <option value="Campo Grande">Campo Grande</option>
            <option value="Dourados">Dourados</option>
            <option value="Três Lagoas">Três Lagoas</option>
            {/* ...outras cidades... */}
          </select>
          <input placeholder="UG/Setor do Colaborador/Servidor *" style={{ flex: 1 }} />
        </div>
        <input placeholder="Cargo do Colaborador/Servidor *" />
        <select defaultValue="">
          <option value="" disabled>Selecione o tipo de usuário *</option>
          <option value="Servidor">Servidor</option>
          <option value="Terceirizado">Terceirizado</option>
          <option value="Estagiário">Estagiário</option>
        </select>
        <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
          <button type="button">Retornar</button>
          <button type="submit" style={{ background: '#1976d2', color: '#fff', border: 'none', padding: '8px 24px', borderRadius: 4 }}>Avançar</button>
        </div>
      </form>
    </main>
  );
}
