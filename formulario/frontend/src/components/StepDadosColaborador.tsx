import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography, Snackbar, Alert, FormControlLabel, Checkbox } from '@mui/material';
import { DadosColaborador } from '../types';
import { api } from '../api';

type Props = {
  values: DadosColaborador;
  onChange: (name: keyof DadosColaborador, value: any) => void;
}

const StepDadosColaborador: React.FC<Props> = ({ values, onChange }) => {
  const [snack, setSnack] = useState<{open: boolean; msg: string; severity: 'success' | 'error' | 'info'}>({open: false, msg: '', severity: 'info'});

  useEffect(() => {
    if (!values.cpf || values.cpf.length < 11) return;
    const cpf = values.cpf.replace(/\D/g, '');
    // verificar email existente
    api.verificarEmail(cpf)
      .then((r) => {
        if (r.existe) {
          onChange('possuiEmail', true);
          setSnack({ open: true, msg: `Usuário já possui e-mail: ${r.email}`, severity: 'info' });
        } else {
          onChange('possuiEmail', false);
        }
      })
      .catch(() => setSnack({ open: true, msg: 'Falha ao verificar e-mail', severity: 'error' }));

    // buscar dados existentes
    api.buscarDados(cpf)
      .then((r) => {
        if (r.encontrado && r.usuario) {
          onChange('nome', r.usuario.nome || '');
          onChange('telefone', r.usuario.telefone || '');
          onChange('emailColaborador', r.usuario.emailContato || '');
          onChange('cargo', r.usuario.cargo || '');
          onChange('setor', r.usuario.setor || '');
          onChange('termoAssinado', !!r.usuario.termoAssinado);
        }
      })
      .catch(() => setSnack({ open: true, msg: 'Falha ao buscar dados do interessado', severity: 'error' }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.cpf]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Dados do Colaborador</Typography>
      <Stack spacing={2}>
        <TextField label="CPF" value={values.cpf} onChange={(e) => onChange('cpf', e.target.value)} required />
        <TextField label="Nome completo" value={values.nome} onChange={(e) => onChange('nome', e.target.value)} required />
        <TextField label="Nome social" value={values.nomeSocial || ''} onChange={(e) => onChange('nomeSocial', e.target.value)} />
        <TextField label="Telefone" value={values.telefone || ''} onChange={(e) => onChange('telefone', e.target.value)} />
        <TextField label="E-mail" value={values.emailColaborador || ''} onChange={(e) => onChange('emailColaborador', e.target.value)} />
        <TextField label="Cidade" value={values.cidade || ''} onChange={(e) => onChange('cidade', e.target.value)} />
        <TextField label="UG/Setor" value={values.setor || ''} onChange={(e) => onChange('setor', e.target.value)} />
        <TextField label="Cargo" value={values.cargo || ''} onChange={(e) => onChange('cargo', e.target.value)} />
        <TextField label="Tipo de usuário" value={values.tipoUsuario || ''} onChange={(e) => onChange('tipoUsuario', e.target.value)} />
        <FormControlLabel control={<Checkbox checked={values.termoAssinado} onChange={(e) => onChange('termoAssinado', e.target.checked)} />} label="Declaro que o Termo de Responsabilidade foi assinado" />
      </Stack>
      <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack(s => ({...s, open:false}))}>
        <Alert severity={snack.severity} onClose={() => setSnack(s => ({...s, open:false}))}>{snack.msg}</Alert>
      </Snackbar>
    </Box>
  );
};

export default StepDadosColaborador;

