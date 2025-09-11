"use client";
import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Chip, Stack } from "@mui/material";
import { Pedido } from "../types/pedido";

interface PedidoCardProps {
  pedido: Pedido;
  onAssinar: (id: string) => void;
}

const statusColor = (status: Pedido["status"]) => {
  switch (status) {
    case "Pendente":
      return "warning" as const;
    case "Aguardando Gestor":
      return "info" as const;
    case "Assinado":
      return "success" as const;
    default:
      return "default" as const;
  }
};

const PedidoCard: React.FC<PedidoCardProps> = ({ pedido, onAssinar }) => {
  const data = new Date(pedido.dataCriacao);
  const dataFormatada = data.toLocaleDateString();

  const isAssinado = pedido.status === "Assinado";

  return (
    <Card variant="outlined" sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Nº {pedido.numeroSolicitacao}
          </Typography>
          <Chip label={pedido.status} color={statusColor(pedido.status)} size="small" />
        </Stack>
        <Typography variant="h6" sx={{ mb: 0.5 }}>{pedido.nomeColaborador}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>{pedido.email}</Typography>
        <Typography variant="body2">Criado em: {dataFormatada}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" disabled={isAssinado} onClick={() => onAssinar(pedido.id)}>
          {isAssinado ? "Assinado" : "Assinar"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PedidoCard;

