# SkL-Movies
=> Projeto criado para realização de atividades práticas.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Projeto Criado a partir da API da API do ThemovieDB
    https://developers.themoviedb.org/3/getting-started/introduction

# ReactJS

### Criar um projeto

    npx create-next-app@latest nome-projeto

### Instalar o bootstrap

    npm install react-bootstrap bootstrap

### Axios para API

    npm i axios

### Iniciar o projeto

    npm run dev

### Base do código

```jsx
import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
```

- rafce

### Componentes

- pages/index.jsx

```jsx
import React from "react";
import Cabecalho from "../components/Cabecalho";

const Home = () => {
  return (
    <div>
      <Cabecalho />
    </div>
  );
};

export default Home;
```

---

- componentes/Cabecalho.jsx

```jsx
import React from "react";

const Cabecalho = () => {
  return <div>Cabeçalho</div>;
};

export default Cabecalho;
```

### Componentes com Props

- #### Componente pai

```jsx
const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div className="bg-secondary py-3 text-white text-center mb-3">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      {props.children}

      <div
        style={{ width: "100%" }}
        className="bg-secondary position-fixed bottom-0 py-3 text-white text-center"
      >
        <p>Todos os direitos reservados®</p>
      </div>
    </>
  );
};
```

- #### Componente filho

```jsx
const Home = () => {
  return (
    <>
      <Pagina titulo="Página Inicial">
        <Container>
          <h1>Hello World</h1>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </Container>
      </Pagina>
    </>
  );
};
```

### Map

```jsx
{
  carros.map((carro, index) => <p key={index}>{carro}</p>);
}
```

