"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Box, Paper, Snackbar, Alert, Typography, Divider, Stack } from "@mui/material";
import AssinaturaForm from "../../components/AssinaturaForm";
import ListaPendencias from "../../components/ListaPendencias";
import { pedidosMock } from "../../data/pedidosMock";
import { Pedido } from "../../types/pedido";

export default function GerenciadorAssinaturasPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultados, setResultados] = useState<Pedido[]>([]);
  const [query, setQuery] = useState<string>("");
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" }>(
    { open: false, message: "", severity: "success" }
  );

  const buscar = (emailBusca: string) => {
    setQuery(emailBusca);
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const handle = window.setTimeout(() => {
      const emailLower = query.toLowerCase();
      // Busca apenas pendências (não assinados)
      const encontrados = pedidosMock.filter(
        (p) => p.email.toLowerCase() === emailLower && p.status !== "Assinado"
      );
      setResultados(encontrados);
      setLoading(false);
    }, 800);
    return () => window.clearTimeout(handle);
  }, [query]);

  const handleAssinar = (id: string) => {
    setResultados((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Assinado" } : p))
    );
    setSnackbar({ open: true, message: "Documento assinado com sucesso!", severity: "success" });
  };

  const pendenciasOrdenadas = useMemo(() => {
    // Ordena por status (pendentes primeiro) e por data desc
    const prioridade = { Pendente: 0, "Aguardando Gestor": 1, Assinado: 2 } as const;
    return [...resultados].sort((a, b) => {
      const pa = prioridade[a.status];
      const pb = prioridade[b.status];
      if (pa !== pb) return pa - pb;
      return new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime();
    });
  }, [resultados]);

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 6, px: 2 }}>
      <Paper sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="h5" sx={{ mb: 1 }}>Gerenciador de Assinaturas</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Insira seu e-mail para visualizar e assinar solicitações pendentes.
        </Typography>
        <AssinaturaForm
          email={email}
          onEmailChange={setEmail}
          onBuscar={buscar}
          loading={loading}
        />

        <Divider sx={{ my: 3 }} />

        <Stack spacing={2}>
          <Typography variant="subtitle1">Resultados</Typography>
          <ListaPendencias pedidos={pendenciasOrdenadas} loading={loading} onAssinar={handleAssinar} />
        </Stack>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbar((s) => ({ ...s, open: false }))} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
