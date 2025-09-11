import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Button, Typography } from '@mui/material';

const services = [
  { id: 'email_setor', label: 'E-mail Setor' },
  { id: 'email_corporativo', label: 'E-mail Corporativo' },
  { id: 'usuario', label: 'Usuário' },
];

const Step1EscolhaServico = ({ onNext }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((service) => service !== value) : [...prev, value]
    );
  };

  const handleNext = () => {
    if (selectedServices.length === 0) {
      alert('Por favor, escolha pelo menos um serviço.');
      return;
    }
    onNext(selectedServices);
  };

  return (
    <Box>
      <Typography variant="h6">Escolha os Serviços</Typography>
      {services.map((service) => (
        <FormControlLabel
          key={service.id}
          control={
            <Checkbox
              value={service.id}
              checked={selectedServices.includes(service.id)}
              onChange={handleChange}
            />
          }
          label={service.label}
        />
      ))}
      <Button variant="contained" color="primary" onClick={handleNext}>
        Avançar
      </Button>
    </Box>
  );
};

export default Step1EscolhaServico;