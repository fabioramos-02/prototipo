import React from 'react';
import { Box, Typography, Checkbox, FormControlLabel, FormGroup, Collapse, Radio, RadioGroup } from '@mui/material';
import { EscolhaServico } from '../types/formulario';

interface Props {
  values: EscolhaServico;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepEscolhaServico: React.FC<Props> = ({ values, onChange }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Escolha da Solicitação</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={values.email} onChange={onChange} name="email" />} label="e-Mail" />
        <Collapse in={values.email}>
          <FormControlLabel control={<Radio checked={values.tipoEmail === 'setor'} onChange={onChange} name="tipoEmail" value="setor" />} label="Setor/Corporativo" />
          <FormControlLabel control={<Radio checked={values.tipoEmail === 'usuario'} onChange={onChange} name="tipoEmail" value="usuario" />} label="Usuário" />
        </Collapse>
        <FormControlLabel control={<Checkbox checked={values.loginRede} onChange={onChange} name="loginRede" />} label="Login de rede" />
        <FormControlLabel control={<Checkbox checked={values.pastaCompartilhamento} onChange={onChange} name="pastaCompartilhamento" />} label="Pasta de compartilhamento" />
      </FormGroup>
    </Box>
  );
};

export default StepEscolhaServico;
