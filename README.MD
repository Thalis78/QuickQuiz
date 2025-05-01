# Sistema de Quiz Educacional

Este é um sistema de quiz interativo desenvolvido para ser usado em sala de aula, onde o **professor** cria um quiz, gera um **QR Code** para que os **alunos** possam acessar, responder às questões e ganhar pontos com base nas suas respostas. Ideal para utilizar em escolas, tanto públicas quanto privadas, para tornar o aprendizado mais dinâmico e divertido.

## Funcionalidades

### **Para o Professor:**

- **Criação de Quiz:** O professor pode criar um quiz, definindo a quantidade de questões e configurando os tópicos.
- **Geração de QR Code:** Após criar o quiz, um **QR Code** único é gerado, o qual pode ser exibido para os alunos acessarem o quiz rapidamente.
- **Configuração de Pontuação:** Cada questão do quiz tem uma quantidade de pontos atribuída, podendo variar de acordo com o tipo ou complexidade da pergunta.

### **Para o Aluno:**

- **Acesso via QR Code:** Os alunos escaneiam o QR Code exibido pelo professor para acessar o quiz diretamente no celular ou computador.
- **Cadastro de Usuário:** Cada aluno tem um **usuário único** para registrar suas respostas e acompanhar sua pontuação.
- **Pontuação:** As questões valem pontos, e a pontuação é acumulada conforme o aluno responde corretamente.
- **Feedback Imediato:** Ao finalizar o quiz, o aluno pode visualizar sua pontuação e o desempenho geral.

## Arquitetura do Sistema

### **Frontend:**

- **Tecnologias:** React com JSX e CSS puro.
- O frontend será responsável pela criação da interface do usuário, onde o professor poderá criar quizzes e os alunos poderão acessar os quizzes e registrar suas respostas.

### **Backend (Java Spring Boot):**

- **Tecnologias:** Java, Spring Boot, Spring Data JPA (para persistência de dados), Spring Security (para autenticação de usuários) e Spring Web.
- O backend é responsável por:
  - Gerenciar os quizzes criados pelos professores.
  - Armazenar as respostas dos alunos e calcular a pontuação.
  - Gerar e fornecer o QR Code para acesso dos alunos.
  - Criar uma API RESTful que se comunica com o frontend para fornecer e receber dados.

### **Banco de Dados:**

- **Banco Relacional (MySQL ou PostgreSQL):** O backend se comunica com um banco de dados relacional para armazenar quizzes, questões, respostas dos alunos e pontuação.

### **QR Code:**

- **Geração de QR Code:** O backend irá gerar um QR Code que será utilizado para acessar o quiz de forma rápida pelos alunos.

## Como Funciona

1. **Professor:**

   - O professor cria o quiz através da interface web no frontend.
   - O sistema gera um QR Code único para o quiz.
   - O professor exibe o QR Code para que os alunos possam escaneá-lo e acessar o quiz.

2. **Aluno:**
   - O aluno escaneia o QR Code com seu celular ou acessa via computador.
   - O aluno se registra no sistema e responde às questões do quiz.
   - Após responder todas as questões, o aluno recebe a pontuação final com feedback sobre seu desempenho.

## Tecnologias Utilizadas

### **Frontend:**

- **React (JSX):** Estruturação e lógica da interface com componentes modernos e reutilizáveis.
- **CSS Puro:** Estilização da interface sem uso de frameworks externos.

### **Backend:**

- **Java:** Linguagem de programação utilizada para o backend.
- **Spring Boot:** Framework para desenvolvimento rápido de aplicações Java.
  - **Spring Data JPA:** Para persistência de dados.
  - **Spring Security:** Para gerenciamento de autenticação de usuários (professor e aluno).
  - **Spring Web:** Para criação da API RESTful.
- **QRCode Library:** Para geração de QR Codes dinâmicos.

### **Banco de Dados:**

- **MySQL/PostgreSQL:** Para armazenamento de dados (quizzes, usuários, respostas, pontuação).


# Versionamento de código:

## Padrões para Nomeação de Branches e Commits

A adoção de convenções claras e consistentes na nomeação de branches e commits é essencial para facilitar a comunicação e o controle de versão em projetos de software. Seguindo uma estrutura bem definida, todos os membros da equipe podem identificar rapidamente o propósito e o impacto das alterações, além de garantir um histórico de versões mais organizado e legível.

### 1. Nomeação de Branches

As branches devem ser nomeadas de forma clara e concisa, utilizando um verbo no infinitivo para indicar a ação que será realizada. Além disso, é importante seguir um padrão que categoriza as mudanças conforme o tipo de alteração. O formato recomendado para nomeação é:

```
    <tipo-de-alteracao>/<descricao-da-branch>
```
### Tipos de Alterações Comuns:

- **feature**: Para novas funcionalidades ou recursos.
- **bugfix**: Para corrigir erros ou falhas no sistema.
- **docs**: Para alterações ou atualizações na documentação.
- **refactor**: Para melhorias no código sem modificar o comportamento da funcionalidade.
- **improvement**: Para otimizar ou melhorar o desempenho, usabilidade ou eficiência de uma funcionalidade.
- **style**: Para ajustes de estilo ou design, sem afetar o comportamento do código.
- **chore**: Para tarefas de manutenção ou configuração, como atualizações de dependências ou ajustes na infraestrutura.
- **test**: Para adicionar ou modificar testes automatizados.

### Exemplos de Branches:

- `feature/adicionar-painel-de-controle`: Para criar uma nova funcionalidade, como um painel de controle.
- `bugfix/corrigir-erro-em-formulario`: Para corrigir um erro específico em um formulário do sistema.
- `docs/atualizar-guia-de-instalação`: Para atualizar a documentação, incluindo o guia de instalação do projeto.
- `refactor/melhorar-estruturas-de-dados`: Para refatorar o código, melhorando a estrutura dos dados sem mudar o comportamento do sistema.
- `improvement/otimizar-consumo-de-api`: Para melhorar o desempenho de uma API, por exemplo, reduzindo o tempo de resposta ou o consumo de recursos.
- `style/ajustar-layout-responsivo`: Para melhorar o design ou corrigir problemas de layout, sem alterar a lógica de funcionalidade.
- `chore/atualizar-dependencias`: Para realizar manutenção, como atualizar as dependências do projeto.
- `test/adicionar-teste-unitario-painel`: Para adicionar testes automatizados, como um teste unitário para uma nova funcionalidade.

---

## 2. Nomeação de Commits

Os commits devem ser nomeados com verbos no tempo **presente do indicativo**, descrevendo de maneira concisa e objetiva o que foi feito na alteração. A mensagem de commit deve ser clara o suficiente para que qualquer pessoa que leia o histórico do repositório entenda rapidamente a intenção e o impacto da mudança.

### Recomendações para Mensagens de Commit:

- **Seja conciso, mas descritivo**: A mensagem deve ser objetiva e fornecer contexto suficiente para quem está lendo.
- **Use o tempo presente**: As mensagens devem ser escritas no tempo presente, pois o commit reflete o que está sendo **feito** naquele momento.
- **Evite mensagens vagas**: Mensagens como "corrige", "atualiza", "ajusta" devem ser acompanhadas de mais detalhes sobre o que exatamente foi feito.

### Exemplos de Mensagens de Commit:

- `adiciona painel de controle para usuários`: Para adicionar uma nova funcionalidade, como o painel de controle mencionado anteriormente.
- `corrige erro no cálculo do total de pedidos`: Para resolver um bug relacionado ao cálculo do total.
- `atualiza documentação sobre API de autenticação`: Para atualizar a documentação, incluindo novos endpoints ou parâmetros na API.
- `refatora lógica de processamento de dados`: Para refatorar a lógica do código sem alterar seu comportamento, visando melhorar a legibilidade ou a manutenção.
- `melhora performance da API de busca`: Para realizar uma melhoria no desempenho da API de busca, como redução de tempo de resposta.
- `ajusta layout do cabeçalho para dispositivos móveis`: Para realizar ajustes no design, tornando o cabeçalho responsivo.
- `remove código redundante de autenticação`: Para eliminar trechos de código desnecessários ou duplicados.
- `adiciona testes unitários para autenticação`: Para garantir que os testes de autenticação estão cobrindo todos os cenários possíveis.

---

### 3. Boas Práticas e Padrões de Commit

- **Divida grandes mudanças em commits menores**: Commits menores são mais fáceis de revisar, testar e reverter, se necessário.
- **Escreva uma mensagem de commit clara e explicativa**: Evite uma única frase como "atualiza o código" ou "ajustes". Tente ser específico sobre o que foi alterado.
- **Use o padrão de commits convencionais**: Para projetos maiores ou em equipes grandes, seguir padrões pode ajudar a padronizar as mensagens e automatizar a geração de changelogs.

---

### 4. Exemplo Completo de Fluxo de Trabalho:

1. **Criar a Branch**:
   - Se você vai adicionar um novo recurso de busca: `feature/adicionar-busca`.
2. **Fazer o Commit**:
   - Após implementar a busca, o commit poderia ser: `adiciona funcionalidade de busca com filtros avançados`.
3. **Fazer Mais Commits, se Necessário**:

   - `adiciona validações de entrada nos campos de busca`.
   - `corrige bug no botão de limpar busca`.

4. **Finalizar a Branch**:
   - Depois de realizar todos os testes e verificações, a branch pode ser mesclada com a principal (geralmente `main` ou `develop`).

---

### 5. Benefícios de Seguir Convenções de Branches e Commits

- **Clareza e Organização**: Facilita a navegação no histórico de commits e a compreensão das mudanças realizadas.
- **Facilidade na Revisão de Código**: A estrutura de commits bem organizada permite que os revisores entendam o propósito de cada alteração.
- **Automação e Integração Contínua**: Padrões como o Conventional Commits permitem a automação de tarefas como geração de changelogs ou deploys automáticos.
- **Melhoria no Colaborativo**: Facilita a colaboração entre membros da equipe, proporcionando uma visão clara sobre o que está sendo feito e em que momento.

## 6. Links para Extensão do Conteúdo

Para mais informações e recursos sobre padrões de commits, acesse o repositório oficial:

- [Padrões de Commits - GitHub](https://github.com/iuricode/padroes-de-commits)

