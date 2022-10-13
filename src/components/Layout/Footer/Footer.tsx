import * as S from "./Footer.styles";

export const Footer = () => {
  return (
    <S.Foot>
      <div className="geral">
        <div className="geral-dois">
          <div id="logo">
            <h1>Spotify</h1>
          </div>
          <div id="abas">
            <div className="empresa">
              <h2>EMPRESA</h2>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Sobre
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Empregos
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                For the Record
              </a>
            </div>
            <div className="comunidades">
              <h2>COMUNIDADES</h2>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Para Artistas
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Desenvolvedores
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Publicidade
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Fornecedores
              </a>
              <a>Investidores</a>
            </div>
            <div className="links">
              <h2>LINKS ÚTEIS</h2>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Suporte
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Player da Web
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Aplicativo móvel grátis
              </a>
            </div>
          </div>
          <div className="imagens">
            <div id="fotos">
              <img src="../imagens/insta.png" alt="" />
              <img src="../imagens/insta.png" alt="" />
              <img src="../imagens/insta.png" alt="" />
            </div>
          </div>
          <div className="registrado">
            <img src="../imagens/earth.ico" alt="" />
            <p>Brasil</p>
          </div>
          <div className="footer">
            <div className="legal">
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Legal
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Centro de Privacidade
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Política de privacidade
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Cookies
              </a>
              <a
                href="https://www.linkedin.com/in/nicolasmatte/"
                target="_blank"
              >
                Sobre anúncios
              </a>
            </div>
            <span>© 2022 Spotify AB</span>
          </div>
        </div>
      </div>
    </S.Foot>
  );
};
