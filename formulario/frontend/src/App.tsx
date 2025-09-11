import React, { useMemo, useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Paper, Snackbar, Alert, Typography } from '@mui/material';
import StepEscolhaServico from './components/StepEscolhaServico';
import StepDadosColaborador from './components/StepDadosColaborador';
import StepDadosGestor from './components/StepDadosGestor';
import StepRevisaoEnvio from './components/StepRevisaoEnvio';
import { EscolhaServico, DadosColaborador, DadosGestor, FormularioCompleto } from './types';
import { api } from './api';

const steps = [
  'Escolha do Serviço',
  'Dados do Colaborador',
  'Dados do Gestor',
  'Revisão e Envio',
];

const initialValues: FormularioCompleto = {
  // Etapa 1
  email: false,
  tipoEmail: '',
  loginRede: false,
  pastaCompartilhamento: false,
  // Etapa 2
  nome: '',
  nomeSocial: '',
  cpf: '',
  telefone: '',
  emailColaborador: '',
  cidade: '',
  setor: '',
  cargo: '',
  tipoUsuario: '',
  termoAssinado: false,
  possuiEmail: false,
  // Etapa 3
  nomeGestor: '',
  matriculaGestor: '',
  secretaria: '',
  unidadeGestora: '',
  telefoneGestor: '',
  emailGestor: '',
  emailContatoGestor: '',
  necessitaValidacao: false,
};

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState<FormularioCompleto>(initialValues);
  const [snack, setSnack] = useState<{ open: boolean; message: string; severity: 'success' | 'error' | 'info' }>({ open: false, message: '', severity: 'success' });

  const setField = (name: keyof FormularioCompleto, value: any) => setValues(prev => ({ ...prev, [name]: value }));

  const handleNext = () => setActiveStep((p) => p + 1);
  const handleBack = () => setActiveStep((p) => p - 1);

  const resumo = useMemo(() => values, [values]);

  const handleSubmit = async () => {
    try {
      const { cpf, ...dados } = values;
      const s1 = await api.salvarSolicitacao(cpf, dados);
      await api.notificarGestor();
      const sdp = await api.enviarSdp();
      setSnack({ open: true, message: `Solicitação ${s1.id} enviada. Incidente: ${sdp.incidente}`, severity: 'success' });
    } catch (e) {
      setSnack({ open: true, message: 'Falha ao enviar a solicitação', severity: 'error' });
    }
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 6, px: 2 }}>
      <Paper sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Solicitação de Acesso e Criação de E-mail</Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 4 }}>
          {activeStep === 0 && (
            <StepEscolhaServico
              values={values}
              onChange={(name, value) => setField(name as keyof EscolhaServico, value)}
            />
          )}
          {activeStep === 1 && (
            <StepDadosColaborador
              values={values}
              onChange={(name, value) => setField(name as keyof DadosColaborador, value)}
            />
          )}
          {activeStep === 2 && (
            <StepDadosGestor
              cpf={values.cpf}
              values={values}
              onChange={(name, value) => setField(name as keyof DadosGestor, value)}
            />
          )}
          {activeStep === 3 && (
            <StepRevisaoEnvio values={resumo} onSubmit={handleSubmit} onBack={handleBack} submitLabel="Enviar Solicitação" />
          )}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          {activeStep > 0 && activeStep < 3 && (
            <Button onClick={handleBack} variant="outlined">Voltar</Button>
          )}
          {activeStep < 3 && (
            <Button onClick={handleNext} variant="contained">Avançar</Button>
          )}
        </Box>
      </Paper>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnack((s) => ({ ...s, open: false }))} severity={snack.severity} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

