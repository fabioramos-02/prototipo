import React from 'react';
import { TextField, Grid, Typography } from '@mui/material';

const Step3DadosGestor: React.FC = () => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Dados do Gestor
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nome"
                        variant="outlined"
                        // Aqui você pode adicionar a lógica para busca automática no SGEO
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Matrícula"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Secretaria/Órgão"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Unidade Gestora"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Telefone"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="E-mail Institucional"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="E-mail para Contato"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Step3DadosGestor;