import { Main } from "./Menu.styles";

export const Menu = () => {
  return (
    <Main>
      <div className="tudo">
        <header>
          <div className="card">
            <h1>Aproveite 1 mês grátis de Premium</h1>
            <h2>Depois, a partir de R$ 11,90/mês. Cancele quando quiser.</h2>
            <div className="buttons">
              <button id="button-ver">COMEÇAR</button>
              <button>VER PLANOS</button>
            </div>
            <p>
              <a
                href="https://www.youtube.com/watch?v=h4FpFvHdm-U&ab_channel=DankiCode"
                target="_blank"
              >
                Sujeito a Termos e Condições.
              </a>{" "}
              O mês grátis não está disponível para usuários que já experimentaram
              o Premium.
            </p>
          </div>
        </header>
      </div>
    </Main>
  );
};
