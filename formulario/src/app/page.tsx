"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Box, Stepper, Step, StepLabel, Button, Paper } from "@mui/material";
import StepEscolhaServico from "../components/StepEscolhaServico";
import StepDadosColaborador from "../components/StepDadosColaborador";
import StepDadosGestor from "../components/StepDadosGestor";
import StepRevisaoEnvio from "../components/StepRevisaoEnvio";
import { EscolhaServico, DadosColaborador, DadosGestor } from "../types/formulario";

// Unifica os tipos para o formulário completo
export type FormularioCompleto = EscolhaServico & DadosColaborador & DadosGestor;

const steps = [
  "Escolha do Serviço",
  "Dados do Colaborador",
  "Dados do Gestor",
  "Revisão e Envio"
];

const initialValues: FormularioCompleto = {
  // Etapa 1
  email: false,
  tipoEmail: "",
  loginRede: false,
  pastaCompartilhamento: false,
  // Etapa 2
  nome: "",
  nomeSocial: "",
  cpf: "",
  telefone: "",
  emailColaborador: "",
  cidade: "",
  setor: "",
  cargo: "",
  tipoUsuario: "",
  // Etapa 3
  nomeGestor: "",
  matriculaGestor: "",
  secretaria: "",
  unidadeGestora: "",
  telefoneGestor: "",
  emailGestor: "",
  emailContatoGestor: ""
};

export default function FormularioMultiEtapas() {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState<FormularioCompleto>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para a API
    alert("Solicitação enviada! (simulação)");
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button component={Link} href="/assinaturas" variant="outlined" size="small">
            Gerenciador de Assinaturas
          </Button>
        </Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 4 }}>
          {activeStep === 0 && (
            <StepEscolhaServico values={values} onChange={handleChange} />
          )}
          {activeStep === 1 && (
            <StepDadosColaborador values={values} onChange={handleChange} />
          )}
          {activeStep === 2 && (
            <StepDadosGestor values={values} onChange={handleChange} />
          )}
          {activeStep === 3 && (
            <StepRevisaoEnvio values={values} onSubmit={handleSubmit} onBack={handleBack} />
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          {activeStep > 0 && activeStep < 3 && (
            <Button onClick={handleBack} variant="outlined">Voltar</Button>
          )}
          {activeStep < 3 && (
            <Button onClick={handleNext} variant="contained">Avançar</Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
