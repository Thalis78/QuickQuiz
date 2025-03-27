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

- **Tecnologias:** HTML, CSS e JavaScript.
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

- **HTML:** Estruturação da interface web.
- **CSS:** Estilização da interface.
- **JavaScript:** Lógica de interação no frontend, controle de quiz e exibição de pontuação.

### **Backend:**

- **Java:** Linguagem de programação utilizada para o backend.
- **Spring Boot:** Framework para desenvolvimento rápido de aplicações Java.
  - **Spring Data JPA:** Para persistência de dados.
  - **Spring Security:** Para gerenciamento de autenticação de usuários (professor e aluno).
  - **Spring Web:** Para criação da API RESTful.
- **QRCode Library:** Para geração de QR Codes dinâmicos.

### **Banco de Dados:**

- **MySQL/PostgreSQL:** Para armazenamento de dados (quizzes, usuários, respostas, pontuação).
