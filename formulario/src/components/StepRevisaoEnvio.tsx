import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

interface Props {
  values: Record<string, any>;
  onSubmit: () => void;
  onBack: () => void;
}

const StepRevisaoEnvio: React.FC<Props> = ({ values, onSubmit, onBack }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Revisão e Envio</Typography>
      <List>
        {Object.entries(values).map(([key, value]) => (
          <ListItem key={key}>
            <ListItemText primary={key} secondary={String(value)} />
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" onClick={onBack} sx={{ mr: 2 }}>Voltar</Button>
      <Button variant="contained" color="primary" onClick={onSubmit}>Enviar Solicitação</Button>
    </Box>
  );
};

export default StepRevisaoEnvio;
