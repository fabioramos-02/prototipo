export type EscolhaServico = {
  email: boolean;
  tipoEmail: '' | 'setor' | 'usuario';
  loginRede: boolean;
  pastaCompartilhamento: boolean;
};

export type DadosColaborador = {
  nome: string;
  nomeSocial?: string;
  cpf: string;
  telefone?: string;
  emailColaborador?: string;
  cidade?: string;
  setor?: string;
  cargo?: string;
  tipoUsuario?: string;
  termoAssinado: boolean;
  possuiEmail?: boolean;
};

export type DadosGestor = {
  nomeGestor: string;
  matriculaGestor?: string;
  secretaria?: string;
  unidadeGestora?: string;
  telefoneGestor?: string;
  emailGestor?: string;
  emailContatoGestor?: string;
  necessitaValidacao?: boolean;
};

export type FormularioCompleto = EscolhaServico & DadosColaborador & DadosGestor;

