import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

type Props = {
  values: Record<string, any>;
  onSubmit: () => void;
  onBack: () => void;
  submitLabel?: string;
}

const StepRevisaoEnvio: React.FC<Props> = ({ values, onSubmit, onBack, submitLabel = 'Enviar' }) => {
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
      <Button variant="contained" color="primary" onClick={onSubmit}>{submitLabel}</Button>
    </Box>
  );
};

export default StepRevisaoEnvio;

