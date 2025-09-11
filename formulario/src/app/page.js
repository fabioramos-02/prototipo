export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8 font-sans">
      {/* Cabeçalho */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">SETDIG - Solicitação de Acesso</h1>
        <p className="text-gray-600">
          Solicite acesso aos Sistemas Institucionais mantidos pela SETDIG.
        </p>
        <hr className="my-6" />
      </header>

      {/* Formulário */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Quem Necessita de Acesso?</h2>
        <form className="flex flex-col gap-4">
          {/* Nome completo e social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Nome Completo do Colaborador *" required />
            <Input label="Nome Social do Colaborador" />
          </div>

          {/* CPF e Telefone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="CPF do Colaborador/Servidor *" required />
            <Input label="Telefone do Colaborador/Servidor *" required />
          </div>

          {/* Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="E-mail do Colaborador/Servidor *" required type="email" />
            <Input label="Confirmar e-mail" type="email" />
          </div>

          {/* Cidade e Setor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select label="Cidade do Colaborador/Servidor *" required options={["Campo Grande", "Dourados", "Três Lagoas"]} />
            <Input label="UG/Setor do Colaborador/Servidor *" required />
          </div>

          {/* Cargo */}
          <Input label="Cargo do Colaborador/Servidor *" required />

          {/* Tipo de usuário */}
          <Select
            label="Tipo de Usuário *"
            required
            options={["Servidor", "Terceirizado", "Estagiário"]}
          />

          {/* Botões */}
          <div className="flex gap-4 mt-6">
            <Button variant="secondary">Retornar</Button>
            <Button variant="primary" type="submit">Avançar</Button>
          </div>
        </form>
      </section>
    </main>
  );
}

/* Componentes auxiliares */
function Input({ label, required, ...props }) {
  return (
    <label className="flex flex-col text-sm font-medium">
      {label}
      <input
        className="border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
        {...props}
      />
    </label>
  );
}

function Select({ label, options = [], required }) {
  return (
    <label className="flex flex-col text-sm font-medium">
      {label}
      <select
        className="border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
        defaultValue=""
      >
        <option value="" disabled>Selecione...</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded-md font-medium";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-gray-400 text-gray-700 hover:bg-gray-100"
  };
  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
