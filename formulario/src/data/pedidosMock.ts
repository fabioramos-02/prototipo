import { Pedido } from "../types/pedido";

export const pedidosMock: Pedido[] = [
  {
    id: "1",
    numeroSolicitacao: "SOL-2025-0001",
    nomeColaborador: "Ana Souza",
    email: "ana.souza@example.com",
    dataCriacao: "2025-09-01T10:15:00Z",
    status: "Pendente",
  },
  {
    id: "2",
    numeroSolicitacao: "SOL-2025-0002",
    nomeColaborador: "Bruno Lima",
    email: "bruno.lima@example.com",
    dataCriacao: "2025-09-03T09:20:00Z",
    status: "Aguardando Gestor",
  },
  {
    id: "3",
    numeroSolicitacao: "SOL-2025-0003",
    nomeColaborador: "Carla Mota",
    email: "carla.mota@example.com",
    dataCriacao: "2025-09-05T14:05:00Z",
    status: "Pendente",
  },
  {
    id: "4",
    numeroSolicitacao: "SOL-2025-0004",
    nomeColaborador: "Diego Queiroz",
    email: "diego.q@example.com",
    dataCriacao: "2025-09-07T11:45:00Z",
    status: "Assinado",
  },
  {
    id: "5",
    numeroSolicitacao: "SOL-2025-0005",
    nomeColaborador: "Ana Souza",
    email: "ana.souza@example.com",
    dataCriacao: "2025-09-08T08:30:00Z",
    status: "Aguardando Gestor",
  },
  {
    id: "6",
    numeroSolicitacao: "SOL-2025-0006",
    nomeColaborador: "Bruno Lima",
    email: "bruno.lima@example.com",
    dataCriacao: "2025-09-09T16:10:00Z",
    status: "Pendente",
  },
];

