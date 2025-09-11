import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { DadosColaborador } from "../types/formulario";

interface Props {
    values: DadosColaborador;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const fields = [
    { label: "Nome completo", name: "nome", required: true },
    { label: "Nome social", name: "nomeSocial" },
    { label: "CPF", name: "cpf", required: true },
    { label: "Telefone", name: "telefone" },
    { label: "E-mail", name: "emailColaborador" },
    { label: "Cidade", name: "cidade" },
    { label: "UG/Setor", name: "setor" },
    { label: "Cargo", name: "cargo" },
    { label: "Tipo de usuário", name: "tipoUsuario" },
];

const StepDadosColaborador: React.FC<Props> = ({ values, onChange }) => (
    <Box>
        <Typography variant="h6" gutterBottom>
            Dados do Colaborador
        </Typography>
        <Stack spacing={2}>
            {fields.map(({ label, name, required }) => (
                <TextField
                    key={name}
                    label={label}
                    name={name}
                    value={values[name as keyof DadosColaborador] || ""}
                    onChange={onChange}
                    required={required}
                    fullWidth
                />
            ))}
        </Stack>
    </Box>
);

export default StepDadosColaborador;
