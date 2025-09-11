import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DadosGestor } from '../types/formulario';

interface Props {
    values: DadosGestor;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const fields = [
    { label: 'Nome do Gestor', name: 'nomeGestor', required: true },
    { label: 'Matrícula', name: 'matriculaGestor' },
    { label: 'Secretaria/Órgão', name: 'secretaria' },
    { label: 'Unidade Gestora', name: 'unidadeGestora' },
    { label: 'Telefone', name: 'telefoneGestor' },
    { label: 'E-mail institucional', name: 'emailGestor' },
    { label: 'E-mail para contato', name: 'emailContatoGestor' },
];

const StepDadosGestor: React.FC<Props> = ({ values, onChange }) => (
    <Box>
        <Typography variant="h6" gutterBottom>
            Dados do Gestor
        </Typography>
        <Grid container spacing={2}>
            {fields.map(({ label, name, required }) => (
                <Grid item xs={12} sm={6} key={name}>
                    <TextField
                        label={label}
                        name={name}
                        value={values[name as keyof DadosGestor] || ''}
                        onChange={onChange}
                        required={required}
                        fullWidth
                    />
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default StepDadosGestor;
