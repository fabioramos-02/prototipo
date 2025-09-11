// src/types/index.ts
export interface DadosColaborador {
    nomeCompleto: string;
    nomeSocial?: string;
    cpf: string;
    telefone?: string;
    email?: string;
    cidade?: string;
    ugSetor?: string;
    cargo?: string;
    tipoUsuario?: string;
}

export interface DadosGestor {
    nome: string;
    matricula: string;
    secretariaOrgao: string;
    unidadeGestora: string;
    telefone?: string;
    emailInstitucional?: string;
    emailContato?: string;
}

export interface ServicoEscolhido {
    id: string;
    descricao: string;
    selecionado: boolean;
}

export interface FormularioData {
    servicos: ServicoEscolhido[];
    dadosColaborador: DadosColaborador;
    dadosGestor: DadosGestor;
}