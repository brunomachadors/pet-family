# Pet Family

Bem-vindo ao Pet Family! Este site será o seu melhor amigo para administrar a vida do seu pet. Pets têm uma função fundamental e fazem parte das nossas famílias, por isso estamos criando um site que ajude a gerir toda a rotina e cuidados do seu pet.

## Preview

![alt text](/public/image.png)

## Descrição

O Pet Family é um site dedicado a ajudar os donos de pets a manterem todas as informações importantes sobre seus animais de estimação em um só lugar. O site oferecerá funcionalidades como:

- Registro de histórico de vacinas e tratamentos
- Contatos de veterinários
- Informações específicas para cada tipo de animal e raça
- Dicas e informações personalizadas para o seu pet
- Localização de lugares pet-friendly
- Cupons de desconto em lojas parceiras

## Funcionalidades

### Implementadas

- [x] **Cadastro de Pets**:
  - Registre seu pet com detalhes como nome, espécie, raça, data de nascimento, etc.
  - Receba dicas e informações personalizadas com base na raça e espécie do seu pet.

### Futuras

- [ ] **Histórico de Vacinas e Tratamentos**:
  - Mantenha um registro detalhado das vacinas e tratamentos do seu pet.
  - Receba notificações sobre vacinas e consultas futuras.

- [ ] **Contatos Veterinários**:
  - Adicione e gerencie contatos de veterinários.
  - Acesse informações de contato rapidamente em caso de emergência.

- [ ] **Localizações Pet-Friendly**:
  - Encontre lugares como parques, restaurantes e lojas que são pet-friendly.
  - Veja avaliações e recomendações de outros usuários.

- [ ] **Cupons de Desconto**:
  - Acesse cupons de desconto em lojas parceiras.
  - Economize em produtos e serviços para o seu pet.

## Estrutura do Projeto

- **Frontend**:

  - Desenvolvido com React e Next.js.
  - Estilizado com Styled Components para uma UI moderna e responsiva.
  - Imagens hospedadas no Cloudinary para otimização e desempenho.
  - Autenticação de usuários implementada com [Clerk](https://clerk.dev).

- **Backend**:

  - Utiliza o Next.js API Routes para criação de endpoints de backend.
  - PostgreSQL como banco de dados relacional.
  - Implementação baseada no Next.js Server, sem uso de Express.

- **Banco de Dados**:

  - PostgreSQL para armazenamento de dados.

## Instruções de Instalação

### Clonar o Repositório e Instalar Dependências

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/brunomachadors/pet-family.git
   cd pet-family
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Execute o projeto**:

   ```bash
   npm run dev
   ```

### Implantação

A maneira mais fácil de implantar sua aplicação Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) criada pelos criadores do Next.js.

Consulte nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

## Tecnologias Utilizadas

- **Frontend**:

  - Next.js
  - React
  - Styled Components
  - Axios (para requisições HTTP)
  - Cloudinary (para hospedagem de imagens)
  - [Clerk](https://clerk.dev) (para autenticação de usuários)

- **Backend**:

  - Next.js API Routes
  - PostgreSQL (banco de dados)

## Desenvolvedores

- **Bruno Machado** - Founder/Desenvolvedor
- **Pablo Machado** - DBA/Architect
- **Juliana Louis** - Product Designer
- **Aline Gorga** - Product Manager


