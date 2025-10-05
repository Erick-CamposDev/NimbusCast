<!-- Banner do Projeto -->
<h1 align="center">🌤️ NimbusCast - Aplicação de Clima</h1>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/OpenWeather_API-FF7F00?style=for-the-badge&logo=openweather&logoColor=white"/>
  <img src="https://img.shields.io/badge/Responsive%20Design-00C853?style=for-the-badge&logo=responsive&logoColor=white"/>
</p>

---

## 📖 Sobre o Projeto

O **NimbusCast** é uma aplicação web desenvolvida com foco em **Mobile First**, totalmente **responsiva**, que permite consultar o **clima em tempo real** de qualquer cidade do mundo.  
O projeto consome a **API OpenWeatherMap**, exibindo dados como **temperatura, umidade, velocidade do vento e condição climática atual**.

---

## 🧩 Tecnologias Utilizadas

- **HTML5** → Estrutura da aplicação
- **CSS3** → Estilos e design responsivo
- **JavaScript (ES6)** → Lógica de busca e integração com a API
- **OpenWeatherMap API** → Fonte dos dados climáticos

---

## 🧠 Funcionalidades

✅ Busca de cidades por nome  
✅ Exibição da temperatura atual em °C  
✅ Dados de umidade, vento e descrição do tempo  
✅ Ícones dinâmicos de acordo com a condição climática  
✅ Layout adaptável para diferentes tamanhos de tela

---

## 🧪 Demonstração

<p align="center">
  <img src="/src/assets/imgs/nimbuscast-before-search.jpg" alt="Imagem da aplicação de clima antes de pesquisar a cidade" width="80%"/>
  <img src="/src/assets/imgs/nimbuscast-after-search.jpg" alt="Imagem da aplicação de clima depois de pesquisar a cidade" width="80%"/>
</p>

---

## ⚙️ Como Funciona

O app consome dados da **OpenWeatherMap API**, realizando uma requisição via `fetch()` e exibindo os resultados diretamente na interface, de forma rápida e intuitiva.

---

## 💡 Aprendizados

Durante o desenvolvimento deste projeto, foram aprimorados conceitos de:

- Consumo de APIs REST com JavaScript
- Manipulação de DOM
- Design responsivo (Mobile First)
- Boas práticas de organização de código

---

## 🧰 Como Usar o Projeto

Siga os passos abaixo para clonar, configurar a API Key da OpenWeatherMap e rodar o **NimbusCast** localmente 👇

---

### 🥇 1️⃣ Clonar o projeto na sua máquina

Abra o terminal e execute:

```bash
git clone https://github.com/Erick-CamposDev/NimbusCast.git
```

### 🥈 2️⃣ Criar conta na OpenWeatherMap e gerar uma API Key

1. Acesse o site oficial da OpenWeatherMap: [https://openweathermap.org/](https://openweathermap.org/)
2. Clique em **Sign Up** e crie uma conta gratuita.
3. Após fazer login, vá até o menu **API Keys** no seu painel de usuário.
4. Clique em **Generate Key** (ou **Create Key**) para gerar sua chave pessoal.
5. Copie a chave gerada.

### 🥉 3️⃣ Colocar a API Key no arquivo `script.js`

1. Abra o arquivo principal de JavaScript do projeto (`script.js`).
2. Localize a variável onde a API Key deve ser inserida, por exemplo:

```js
const apiKey = "SUA_CHAVE_DA_API_AQUI";
```

3. Substitua o placeholder pela chave copiada

### 🏁 4️⃣ Rodar o projeto no navegador

1. Utilizando o VScode baixe a extensão "Live Server" em seguida clique com o botão sobre o arquivo index.html e clique em "Open With Live Server" ou aperte Alt + L Alt + O pelo teclado.

2. Teste a aplicação!

---

<p align="center">
  Feito por <b>Erick Campos</b>
</p>

