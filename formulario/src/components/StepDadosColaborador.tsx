import React from 'react';
import { Box, TextField, Typography, Grid } from '@mui/material';
import { DadosColaborador } from '../types/formulario';

interface Props {
    values: DadosColaborador;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const fields = [
    { label: 'Nome completo', name: 'nome', required: true },
    { label: 'Nome social', name: 'nomeSocial' },
    { label: 'CPF', name: 'cpf', required: true },
    { label: 'Telefone', name: 'telefone' },
    { label: 'E-mail', name: 'emailColaborador' },
    { label: 'Cidade', name: 'cidade' },
    { label: 'UG/Setor', name: 'setor' },
    { label: 'Cargo', name: 'cargo' },
    { label: 'Tipo de usuário', name: 'tipoUsuario' },
];

const StepDadosColaborador: React.FC<Props> = ({ values, onChange }) => (
    <Box>
        <Typography variant="h6" gutterBottom>
            Dados do Colaborador
        </Typography>
        <Grid container spacing={2}>
            {fields.map(({ label, name, required }) => (
                <Grid item xs={12} sm={6} key={name}>
                    <TextField
                        label={label}
                        name={name}
                        value={values[name as keyof DadosColaborador] || ''}
                        onChange={onChange}
                        required={required}
                        fullWidth
                    />
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default StepDadosColaborador;
