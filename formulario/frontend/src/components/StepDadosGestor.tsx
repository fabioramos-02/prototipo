import React, { useEffect } from 'react';
import { Box, TextField, Typography, Stack, FormControlLabel, Checkbox } from '@mui/material';
import { DadosGestor } from '../types';
import { api } from '../api';

type Props = {
  cpf: string;
  values: DadosGestor;
  onChange: (name: keyof DadosGestor, value: any) => void;
}

const StepDadosGestor: React.FC<Props> = ({ cpf, values, onChange }) => {
  useEffect(() => {
    if (!cpf || cpf.length < 11) return;
    const c = cpf.replace(/\D/g, '');
    api.buscarDados(c).then(r => {
      if (r.gestor) {
        onChange('nomeGestor', r.gestor.nome || '');
        onChange('matriculaGestor', r.gestor.matricula || '');
        onChange('secretaria', r.gestor.secretaria || '');
        onChange('unidadeGestora', r.gestor.unidadeGestora || '');
        onChange('telefoneGestor', r.gestor.telefone || '');
        onChange('emailGestor', r.gestor.emailGestor || '');
        onChange('emailContatoGestor', r.gestor.emailContatoGestor || '');
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cpf]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Dados do Gestor</Typography>
      <Stack spacing={2}>
        <TextField label="Nome do Gestor" value={values.nomeGestor} onChange={(e) => onChange('nomeGestor', e.target.value)} required />
        <TextField label="Matrícula" value={values.matriculaGestor || ''} onChange={(e) => onChange('matriculaGestor', e.target.value)} />
        <TextField label="Secretaria/Órgão" value={values.secretaria || ''} onChange={(e) => onChange('secretaria', e.target.value)} />
        <TextField label="Unidade Gestora" value={values.unidadeGestora || ''} onChange={(e) => onChange('unidadeGestora', e.target.value)} />
        <TextField label="Telefone" value={values.telefoneGestor || ''} onChange={(e) => onChange('telefoneGestor', e.target.value)} />
        <TextField label="E-mail institucional" value={values.emailGestor || ''} onChange={(e) => onChange('emailGestor', e.target.value)} />
        <TextField label="E-mail para contato" value={values.emailContatoGestor || ''} onChange={(e) => onChange('emailContatoGestor', e.target.value)} />
        <FormControlLabel control={<Checkbox checked={!!values.necessitaValidacao} onChange={(e) => onChange('necessitaValidacao', e.target.checked)} />} label="Dados do gestor necessitam validação" />
      </Stack>
    </Box>
  );
};

export default StepDadosGestor;

