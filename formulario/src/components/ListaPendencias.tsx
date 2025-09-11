"use client";
import React from "react";
import { Box, CircularProgress, Grid, Alert } from "@mui/material";
import { Pedido } from "../types/pedido";
import PedidoCard from "./PedidoCard";

interface ListaPendenciasProps {
  pedidos: Pedido[];
  loading?: boolean;
  onAssinar: (id: string) => void;
}

const ListaPendencias: React.FC<ListaPendenciasProps> = ({ pedidos, loading = false, onAssinar }) => {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!pedidos || pedidos.length === 0) {
    return <Alert severity="info">Nenhuma pendência encontrada para este e-mail.</Alert>;
  }

  return (
    <Grid container spacing={2}>
      {pedidos.map((p) => (
        <Grid key={p.id} item xs={12} sm={6} md={4}>
          <PedidoCard pedido={p} onAssinar={onAssinar} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListaPendencias;

