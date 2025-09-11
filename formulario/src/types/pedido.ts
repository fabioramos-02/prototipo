export type StatusPedido = "Pendente" | "Aguardando Gestor" | "Assinado";

export interface Pedido {
  id: string;
  numeroSolicitacao: string;
  nomeColaborador: string;
  email: string;
  dataCriacao: string; // ISO string
  status: StatusPedido;
}

