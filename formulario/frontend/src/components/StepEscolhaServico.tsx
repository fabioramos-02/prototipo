import React from 'react';
import { Box, Typography, Checkbox, FormControlLabel, Collapse, Radio, RadioGroup, Stack } from '@mui/material';
import { EscolhaServico } from '../types';

type Props = {
  values: EscolhaServico;
  onChange: (name: keyof EscolhaServico, value: any) => void;
}

const StepEscolhaServico: React.FC<Props> = ({ values, onChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Escolha do Serviço</Typography>
      <Stack spacing={1}>
        <FormControlLabel control={<Checkbox checked={values.email} onChange={(e) => onChange('email', e.target.checked)} />} label="E-mail" />
        <Collapse in={values.email}>
          <RadioGroup row value={values.tipoEmail} onChange={(e) => onChange('tipoEmail', (e.target as HTMLInputElement).value)}>
            <FormControlLabel value="setor" control={<Radio />} label="Setor/Corporativo" />
            <FormControlLabel value="usuario" control={<Radio />} label="Usuário" />
          </RadioGroup>
        </Collapse>
        <FormControlLabel control={<Checkbox checked={values.loginRede} onChange={(e) => onChange('loginRede', e.target.checked)} />} label="Login de rede" />
        <FormControlLabel control={<Checkbox checked={values.pastaCompartilhamento} onChange={(e) => onChange('pastaCompartilhamento', e.target.checked)} />} label="Pasta de compartilhamento" />
      </Stack>
    </Box>
  );
};

export default StepEscolhaServico;

