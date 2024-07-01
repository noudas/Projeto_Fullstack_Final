Aqui está o README atualizado com a instrução correta para inicializar o mobile usando `npm run android`:

---

# Projeto Final Fullstack

## Shem Shemesh

**Shem Shemesh** é uma plataforma destinada a ensinar sobre o Holocausto.

## Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalacao)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Contribuição](#contribuicao)
- [Licença](#licenca)

## Sobre

O **Shem Shemesh** é um projeto final fullstack que busca proporcionar uma ferramenta educativa sobre o Holocausto. A plataforma permite o armazenamento, atualização e recuperação de dados sobre sobreviventes, descrições e vídeos relacionados ao tema.

## Funcionalidades

- CRUD para gerenciar dados de sobreviventes, descrições e vídeos.
- Upload e armazenamento de imagens utilizando Multer e MongoDB.
- Exposição de endpoints RESTful para integração com o frontend.
- Aplicativo mobile com suporte a Android e iOS utilizando Expo.

## Instalação

### Pré-requisitos

- Node.js
- Docker
- Android SDK ou Expo Go no celular

### Backend

1. Clone o repositório:

    ```bash
    git clone https://github.com/usuario/projeto-final-fullstack.git
    cd projeto-final-fullstack/BackEnd
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o Docker:

    ```bash
    docker-compose up
    ```

### Frontend Mobile

1. Navegue até a pasta do frontend mobile:

    ```bash
    cd projeto-final-fullstack/front_mobile
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o aplicativo no Android:

    ```bash
    npm run android
    ```

4. Use Expo Go no seu celular para escanear o QR code e rodar o aplicativo.

## Uso

1. Inicie o servidor backend:

    ```bash
    cd projeto-final-fullstack/BackEnd
    npm run dev
    ```

2. Inicie o aplicativo mobile:

    ```bash
    cd projeto-final-fullstack/front_mobile
    npm run android
    ```

3. O backend estará disponível em `http://localhost:5000` e o aplicativo mobile pode ser acessado através do Expo Go.

## Endpoints

### Tabela Sobrevivente

- **Create**
  - **POST** `/v2/api/formdata`
  - Envia um formulário com `imagem`, `codigo`, `nome`, `descricao`, `url`, `transcricao`.

- **Read**
  - **GET** `/v2/api/pessoa/:codigo`
  - Retorna os dados de um sobrevivente específico.

  - **GET** `/v2/api/lista`
  - Retorna a lista de todos os sobreviventes.

- **Update**
  - **PATCH** `/v2/api/pessoa`
  - Atualiza os dados de um sobrevivente.

- **Delete**
  - **DELETE** `/v2/api/pessoa`
  - Remove um sobrevivente.

### Tabela Descricao

- **Read**
  - **GET** `/v2/api/descricao/:codigo`
  - Retorna a descrição de um sobrevivente específico.

- **Update**
  - **PATCH** `/v2/api/descricao`
  - Atualiza a descrição de um sobrevivente.

- **Delete**
  - **DELETE** `/v2/api/descricao`
  - Remove a descrição de um sobrevivente.

### Tabela Video

- **Read**
  - **GET** `/v2/api/video/:codigo`
  - Retorna o vídeo de um sobrevivente específico.

- **Update**
  - **PATCH** `/v2/api/video`
  - Atualiza o vídeo de um sobrevivente.

- **Delete**
  - **DELETE** `/v2/api/video`
  - Remove o vídeo de um sobrevivente.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Faça suas alterações e commit: `git commit -m 'Minha nova feature'`.
4. Envie para o branch original: `git push origin minha-feature`.
5. Crie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
