const API_URL = import.meta.env.VITE_API_URL || 'http://backend:5000';

async function http<T>(path: string, opts?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  verificarEmail: (cpf: string) => http<{ existe: boolean; email?: string }>(`/verificar-email/${cpf}`),
  buscarDados: (cpf: string) => http<{ encontrado: boolean; usuario?: any; gestor?: any }>(`/buscar-dados/${cpf}`),
  salvarSolicitacao: (cpf: string, dados: any) => http<{ id: number; status: string }>(`/salvar-solicitacao`, {
    method: 'POST',
    body: JSON.stringify({ cpf, dados }),
  }),
  notificarGestor: () => http<{ sucesso: boolean }>(`/notificar-gestor`, { method: 'POST' }),
  enviarSdp: () => http<{ incidente: string }>(`/enviar-sdp`, { method: 'POST' }),
};

export default api;

