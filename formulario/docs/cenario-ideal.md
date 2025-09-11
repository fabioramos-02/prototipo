# 📌 Cenário Ideal

1. **Usuário interessado acessa o sistema e inicia a Solicitação de Acesso.**

2. **CPF informado:**
    - O sistema consulta:
      - **Base de cadastro:**  
         - Se não existir, permite preenchimento manual e armazena para o futuro.
      - **Sistema de e-mail via API:**  
         - Se já tiver e-mail, apenas informa.  
         - Se não tiver, continua o fluxo.

3. **Verificação do Termo de Responsabilidade:**
    - Se já foi assinado → segue.
    - Se não → solicita assinatura antes de prosseguir.

4. **Dados do Gestor:**
    - Sistema consulta automaticamente o **SGEO/Folha de Pagamento** (nome, matrícula).
    - Solicita validação dos dados:
      - Se corretos → prossegue.
      - Se incorretos → gera notificação ao SGEO, permite ajuste manual e sinaliza na solicitação que gestor precisa validar.

5. **Preenchimento dos dados complementares:**  
    - Telefone  
    - E-mail de contato  
    - E-mail institucional

6. **Gestor recebe notificação por e-mail:**
    - Deve aprovar e assinar eletronicamente a solicitação.

7. **Após aprovação:**
    - O sistema envia ao **SDP (atendimento da SETDIG)** para abertura de incidente.
    - O interessado recebe o número do incidente por e-mail.

8. **Atendimento do incidente:**
    - Equipe de cadastro verifica:
      - Se já existe e-mail → informa interessado.
      - Se não → cria e-mail e informa interessado.

9. **Encerramento:**  
    - Notificação para gestor e colaborador.
