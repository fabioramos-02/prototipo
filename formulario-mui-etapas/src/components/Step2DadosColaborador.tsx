import React from 'react';
import { TextField, Grid, Button } from '@mui/material';

interface DadosColaboradorProps {
  onNext: () => void;
  onBack: () => void;
  formData: {
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
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const Step2DadosColaborador: React.FC<DadosColaboradorProps> = ({ onNext, onBack, formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Dados do Colaborador</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            label="Nome Completo"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nome Social"
            name="nomeSocial"
            value={formData.nomeSocial}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="CPF"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Cidade"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="UG/Setor"
            name="ugSetor"
            value={formData.ugSetor}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Tipo de Usuário"
            name="tipoUsuario"
            value={formData.tipoUsuario}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" onClick={onBack} style={{ marginRight: '10px' }}>
          Voltar
        </Button>
        <Button variant="contained" onClick={onNext}>
          Avançar
        </Button>
      </div>
    </div>
  );
};

export default Step2DadosColaborador;