export interface EscolhaServico {
  email: boolean;
  tipoEmail: '' | 'setor' | 'usuario';
  loginRede: boolean;
  pastaCompartilhamento: boolean;
}

export interface DadosColaborador {
  nome: string;
  nomeSocial?: string;
  cpf: string;
  telefone?: string;
  emailColaborador: string;
  cidade?: string;
  setor?: string;
  cargo?: string;
  tipoUsuario?: string;
}

export interface DadosGestor {
  nomeGestor: string;
  matriculaGestor?: string;
  secretaria?: string;
  unidadeGestora?: string;
  telefoneGestor?: string;
  emailGestor?: string;
  emailContatoGestor?: string;
}

export type FormularioCompleto = EscolhaServico & DadosColaborador & DadosGestor;
