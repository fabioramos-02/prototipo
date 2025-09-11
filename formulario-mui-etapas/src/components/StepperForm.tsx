import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import Step1EscolhaServico from './Step1EscolhaServico';
import Step2DadosColaborador from './Step2DadosColaborador';
import Step3DadosGestor from './Step3DadosGestor';
import Step4RevisaoEnvio from './Step4RevisaoEnvio';

const steps = ['Escolha do Serviço', 'Dados do Colaborador', 'Dados do Gestor', 'Revisão e Envio'];

const StepperForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNext = (data) => {
        setFormData({ ...formData, ...data });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return <Step1EscolhaServico onNext={handleNext} />;
            case 1:
                return <Step2DadosColaborador onNext={handleNext} />;
            case 2:
                return <Step3DadosGestor onNext={handleNext} />;
            case 3:
                return <Step4RevisaoEnvio formData={formData} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {renderStepContent(activeStep)}
                <div>
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                        Voltar
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            if (activeStep === steps.length - 1) {
                                // Handle final submission
                            } else {
                                handleNext({});
                            }
                        }}
                    >
                        {activeStep === steps.length - 1 ? 'Enviar' : 'Avançar'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StepperForm;