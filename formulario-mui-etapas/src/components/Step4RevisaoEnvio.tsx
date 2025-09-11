import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface Step4RevisaoEnvioProps {
  formData: {
    servicos: string[];
    colaborador: {
      nomeCompleto: string;
      nomeSocial?: string;
      cpf: string;
      telefone?: string;
      email?: string;
      cidade?: string;
      ugSetor?: string;
      cargo?: string;
      tipoUsuario?: string;
    };
    gestor: {
      nome: string;
      matricula: string;
      secretaria: string;
      unidadeGestora: string;
      telefone?: string;
      emailInstitucional?: string;
      emailContato?: string;
    };
  };
  onSubmit: () => void;
}

const Step4RevisaoEnvio: React.FC<Step4RevisaoEnvioProps> = ({ formData, onSubmit }) => {
  return (
    <Box>
      <Typography variant="h6">Revisão e Envio</Typography>
      <Box mt={2}>
        <Typography variant="subtitle1">Serviços Selecionados:</Typography>
        <Typography>{formData.servicos.join(', ')}</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">Dados do Colaborador:</Typography>
        <Typography>Nome Completo: {formData.colaborador.nomeCompleto}</Typography>
        <Typography>Nome Social: {formData.colaborador.nomeSocial}</Typography>
        <Typography>CPF: {formData.colaborador.cpf}</Typography>
        <Typography>Telefone: {formData.colaborador.telefone}</Typography>
        <Typography>E-mail: {formData.colaborador.email}</Typography>
        <Typography>Cidade: {formData.colaborador.cidade}</Typography>
        <Typography>UG/Setor: {formData.colaborador.ugSetor}</Typography>
        <Typography>Cargo: {formData.colaborador.cargo}</Typography>
        <Typography>Tipo de Usuário: {formData.colaborador.tipoUsuario}</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">Dados do Gestor:</Typography>
        <Typography>Nome: {formData.gestor.nome}</Typography>
        <Typography>Matrícula: {formData.gestor.matricula}</Typography>
        <Typography>Secretaria/Órgão: {formData.gestor.secretaria}</Typography>
        <Typography>Unidade Gestora: {formData.gestor.unidadeGestora}</Typography>
        <Typography>Telefone: {formData.gestor.telefone}</Typography>
        <Typography>E-mail Institucional: {formData.gestor.emailInstitucional}</Typography>
        <Typography>E-mail para Contato: {formData.gestor.emailContato}</Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={onSubmit} sx={{ mt: 3 }}>
        Enviar Solicitação
      </Button>
    </Box>
  );
};

export default Step4RevisaoEnvio;