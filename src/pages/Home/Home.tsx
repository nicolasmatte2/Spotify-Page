import * as S from "./Home.styles";

export const Home = () => {
  const cardsData = [
    {
      title: "Modo offline",
      description: "Ouça música onde estiver",
      image: "./fotog.png",
    },
    {
      title: "Ouça músicas sem anúncios.",
      description: "Curta música, sem parar.",
      image: "./fotog.png",
    },
    {
      title: "Ouça o que quiser.",
      description: "Mesmo no celular ou tablet.",
      image: "./fotog.png",
    },
    {
      title: "Troque de música o quanto quiser.",
      description: "Pule quando quiser.",
      image: "./fotog.png",
    },
  ];

  const boxesData = [{}, {}];
  return (
    <>
      <S.Main>
        <h1>Aproveite 1 mês grátis de Premium</h1>
        <h2>Depois, a partir de R$ 11,90/mês. Cancele quando quiser.</h2>
        <div className="buttons">
          <button id="button-começar">COMEÇAR</button>
          <button>VER PLANOS</button>
        </div>
        <p>
          <a
            href="https://www.youtube.com/watch?v=h4FpFvHdm-U&ab_channel=DankiCode"
            target="_blank"
          >
            Sujeito a Termos e Condições.
          </a>{" "}
          O mês grátis não está disponível para usuários que já experimentaram o
          Premium.
        </p>
      </S.Main>
      <S.Article>
        <h1>Por que ser Premium?</h1>
        <div className="card">
          {cardsData.map((item) => (
            <div className="card-1">
              <img className="imagens" src={item.image} alt="" />
              <article>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            </div>
          ))}
        </div>
      </S.Article>
      <S.Box>
        <div className="contender">
          <div id="principal">
            <h1>Escolha seu plano Premium</h1>
            <p>
              Ouça sem limites no seu celular, alto-falante e em outros
              dispositivos.
            </p>
            <div id="imagens">
              <ul className="imagens-dois">
                <li className="imagens-tres">
                  <img src="../imagens/visa-logo.svg" alt="logo visa" />
                </li>
                <li className="imagens-tres">
                  <img src="../imagens/mastercard.webp" alt="logo mastercard" />
                </li>
                <li className="imagens-tres">
                  <img
                    src="../imagens/american-express.jpg"
                    alt="logo american express"
                  />
                </li>
                <li className="imagens-tres">
                  <img src="../imagens/elo-logo-1.png" alt="logo elo" />
                </li>
                <li className="imagens-tres">
                  <img src="../imagens/hipercard.svg" alt="logo hipercard" />
                </li>
              </ul>
              <span>+ outros 11</span>
            </div>
          </div>
          <div id="caixas">
            <div className="caixa">
              <div className="completo">
                <div className="caixa-um">
                  <div className="caixa-dois">
                    <div className="topo">
                      <p className="mes">1 mês grátis ao assinar</p>
                      <p className="pagamento">Pagamento único disponível</p>
                    </div>
                    <h1>Individual</h1>
                    <p className="periodo">
                      R$ 19,90/mês após o período da oferta
                    </p>
                    <p className="conta">1 conta</p>
                    <img src="../imagens/black.png" alt="" />
                  </div>
                </div>
                <div className="lista">
                  <ul className="lista-dois">
                    <div className="lista-tres">
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Ouça músicas sem anúncios</p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Ouça em qualquer lugar — até no modo offline</p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Escolha a música que quer ouvir</p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Faça um plano pré-pago ou uma assinatura</p>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="botao-box">
                  <div className="botao">
                    <button>COMEÇAR</button>
                  </div>
                </div>
                <div className="termos">
                  <p>
                    <a href="#">Sujeito a Termos e Condições</a>. O mês grátis
                    não está disponível para usuários que já experimentaram o
                    Premium.
                  </p>
                </div>
              </div>
              <div className="completo">
                <div className="caixa-um">
                  <div className="caixa-dois">
                    <div className="topo">
                      <p className="mes">1 mês grátis ao assinar</p>
                      <p className="pagamento">Pagamento único disponível</p>
                    </div>
                    <h1>Duo</h1>
                    <p className="periodo">
                      R$ 24,90/mês após o período da oferta
                    </p>
                    <p className="conta">2 conta</p>
                    <img src="../imagens/black.png" alt="" />
                  </div>
                </div>
                <div className="lista">
                  <ul className="lista-dois">
                    <div className="lista-tres">
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>2 contas Premium para um casal que mora junto</p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Ouça sem anúncios, no modo offline e sob demanda</p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Faça um plano pré-pago ou uma assinatura</p>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="botao-box">
                  <div className="botao">
                    <button>COMEÇAR</button>
                  </div>
                </div>
                <div className="termos">
                  <p>
                    <a href="#">Sujeito a Termos e Condições</a>. O mês grátis
                    não está disponível para usuários que já experimentaram o
                    Premium.
                  </p>
                </div>
              </div>
              <div className="completo">
                <div className="caixa-um">
                  <div className="caixa-dois">
                    <div className="topo">
                      <p className="mes">1 mês grátis ao assinar</p>
                      <p className="pagamento">Pagamento único disponível</p>
                    </div>
                    <h1>Família</h1>
                    <p className="periodo">
                      R$ 34,90/mês após o período da oferta
                    </p>
                    <p className="conta">Até 6 contas</p>
                    <img src="../imagens/black.png" alt="" />
                  </div>
                </div>
                <div className="lista">
                  <ul className="lista-dois">
                    <div className="lista-tres">
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>
                          6 contas Premium para familiares que moram no mesmo
                          endereço
                        </p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Bloqueie músicas com conteúdo explícito</p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Ouça sem anúncios, no modo offline e sob demanda</p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>
                          Spotify Kids: um aplicativo separado, feito
                          especialmente para crianças
                        </p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Faça um plano pré-pago ou uma assinatura</p>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="botao-box">
                  <div className="botao">
                    <button>COMEÇAR</button>
                  </div>
                </div>
                <div className="termos">
                  <p>
                    <a href="#">Sujeito a Termos e Condições</a>. O mês grátis
                    não está disponível para usuários que já experimentaram o
                    Premium.
                  </p>
                </div>
              </div>
              <div className="completo">
                <div className="caixa-um">
                  <div className="caixa-dois">
                    <p className="mes">1 mês grátis ao assinar</p>
                    <h1>Universitário</h1>
                    <p className="periodo">
                      R$ 9,90/mês após o período da oferta
                    </p>
                    <p className="conta">1 conta</p>
                    <br />
                    <img src="../imagens/black.png" alt="" />
                  </div>
                </div>
                <div className="lista">
                  <ul className="lista-dois">
                    <div className="lista-tres">
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>
                          Desconto especial para estudantes universitários que
                          tenham direito à oferta
                        </p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Ouça músicas sem anúncios</p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Ouça em qualquer lugar — até no modo offline</p>
                      </li>
                      <li>
                        <img
                          className="imagens-lista"
                          src="../imagens/check.png"
                          alt=""
                        />
                        <p>Escolha a música que quer ouvir</p>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="botao-box">
                  <div className="botao">
                    <button>COMEÇAR</button>
                  </div>
                </div>
                <div className="termos">
                  <p>
                    Oferta disponível somente para estudantes de instituições de
                    ensino superior credenciadas. O mês grátis não está
                    disponível para usuários que já experimentaram o Premium.{" "}
                    <a href="#">Sujeito aos Termos e Condições</a> da oferta do
                    Spotify de desconto para universitários.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </S.Box>
    </>
  );
};
