# Requisitos do Formulário

## 1. Escolha da Solicitação

**Campos:**
- Serviços/Sistemas disponíveis (checkbox)
- Subopções (ex: tipo de e-mail: setor/corporativo ou usuário)

**Regras:**
- Obrigatório escolher pelo menos um serviço
- Exibir campos adicionais conforme a escolha (ex: pasta → pedir caminho completo)

---

## 2. Dados do Colaborador

- Nome completo (**obrigatório**)
- Nome social (opcional)
- CPF (**obrigatório**, com validação na API)
- Telefone
- E-mail
- Cidade
- UG/Setor
- Cargo
- Tipo de usuário

---

## 3. Dados do Gestor

- Nome (busca automática no SGEO)
- Matrícula
- Secretaria/Órgão
- Unidade Gestora
- Telefone
- E-mail institucional
- E-mail para contato

---

## 4. Assinatura e Aprovação

- Gestor recebe notificação
- Aprovação eletrônica obrigatória

---

## ✨ Sugestão de Protótipo Ideal

### Tela 1 – Escolha do Serviço
- Bem simples, como seu último print: caixas de seleção → avançar

### Tela 2 – Dados do Colaborador
- Autopreenchimento via CPF
- Se não encontrar → manual

### Tela 3 – Dados do Gestor
- Autopreenchimento via SGEO
- Solicitação de validação

### Tela 4 – Revisão e Envio
- Resumo dos dados + botão “Enviar Solicitação”
