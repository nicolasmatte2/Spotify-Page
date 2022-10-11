import { Header } from "./Home.styles"

export const Home = () => {
  return (
    <Header>
          <div className="contender">
            <h1>Spotify</h1>
            <div className="right-buttons">
              <h2>Premium</h2>
              <h2>Suporte</h2>
              <h2>Baixar</h2>
              <h2>|</h2>
              <div className="cinza">
                <h2>Inscrever-se</h2>
                <h2>Entrar</h2>
                <img src="../imagens/barras.png" alt="" />
              </div>
            </div>
          </div>
    </Header>
  );
};
