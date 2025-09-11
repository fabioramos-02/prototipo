"use client";
import React from "react";
import { Box, Button, TextField } from "@mui/material";

interface AssinaturaFormProps {
  email: string;
  onEmailChange: (value: string) => void;
  onBuscar: (email: string) => void;
  loading?: boolean;
}

const AssinaturaForm: React.FC<AssinaturaFormProps> = ({
  email,
  onEmailChange,
  onBuscar,
  loading = false,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBuscar(email.trim());
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <TextField
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="seu.email@exemplo.com"
        required
        sx={{ flex: 1, minWidth: 260 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!email || loading}
      >
        {loading ? "Buscando..." : "Buscar"}
      </Button>
    </Box>
  );
};

export default AssinaturaForm;

