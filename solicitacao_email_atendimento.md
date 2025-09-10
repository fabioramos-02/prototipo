# Solicitação para Criação de E-mail e Atendimento

## Fluxo da Solicitação

1. **Preenchimento do Formulário de Solicitação de Acesso**
   - O interessado deve preencher o formulário de solicitação.
   - Ao informar o **CPF**, o sistema deve:
     - Verificar se o interessado já possui conta de e-mail.
       - Caso possua, deve informar o interessado.
       - Caso não possua, deve permitir a continuação da solicitação.
     - Uma **API** deve ser construída para consultar o sistema de e-mail, enviando o CPF e retornando a conta, se existente.

2. **Busca de Dados do Interessado**
   - O sistema deve buscar os dados do interessado em sua base de cadastro.
   - Caso não encontre:
     - Permitir o preenchimento manual dos dados.
     - Armazenar os dados após o preenchimento para reutilização em futuras solicitações.

3. **Verificação do Termo de Responsabilidade**
   - O sistema deve verificar se o interessado já possui termo assinado.
   - Caso não possua:
     - Orientar a assinatura do termo.
     - Enviar o termo junto com o formulário para armazenamento.

4. **Dados do Gestor**
   - Ao informar a **secretaria/órgão** e o **setor/unidade gestora**, o sistema deve:
     - Buscar no **SGEO** (ou folha de pagamento) os dados do gestor (nome e matrícula).
     - Solicitar validação dos dados pelo solicitante.
       - Caso incorretos: notificar o responsável pelo SGEO para atualização, permitir continuação manual e informar que os dados precisam ser validados.
       - Caso corretos: permitir o preenchimento dos próximos campos (telefone, e-mails de contato e do gestor).

5. **Aprovação do Gestor**
   - Após finalização do preenchimento, o gestor receberá um e-mail com instruções detalhadas para assinatura eletrônica e aprovação.

6. **Envio ao SDP**
   - Após aprovação do gestor, o sistema deve enviar um e-mail ao **SDP (SETDIG)** para criação do incidente.
   - O SDP retorna um e-mail ao interessado com o número do incidente.

7. **Atendimento pela Equipe de Cadastro**
   - A equipe verifica se já existe conta de e-mail.
     - Caso exista: informar o interessado.
     - Caso não exista: criar a conta.
   - Após a conclusão:
     - O gestor e o interessado recebem um e-mail com as informações do atendimento.

---

## Sugestões de Melhorias

- **Verificação automática de CPF:** criar uma API para consultar no sistema de e-mail e retornar a conta, caso existente.  
- **Integração com SGEO:** buscar automaticamente dados do gestor e solicitar validação; caso incorretos, permitir continuação manual e notificar o responsável para atualização.  
- **Cadastro do interessado:** armazenar dados preenchidos manualmente para uso em futuras solicitações, evitando retrabalho.  
- **Gestão do Termo de Responsabilidade:** verificar se já está assinado; caso contrário, solicitar uma única vez e armazenar para futuras consultas.  
