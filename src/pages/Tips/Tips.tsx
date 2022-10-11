import { Article } from "./Tips.styles";

export const Tips = () => {
  return (
    <Article>
        
      <main>
          <h1>Por que ser Premium?</h1>
          <div className="card">
                    <div className="card-1">
                        <img className="imagens" src="./fotog.png" alt="" />
                        <article>
                            <h2>Modo offline</h2>
                            <p>Ouça música onde estiver.</p>
                        </article>
                    </div>
                    <div className="card-1">
                        <img className="imagens" src="./fotog.png" alt="" />
                        <article>
                            <h2>Ouça músicas sem anúncios.</h2>
                            <p>Curta música, sem parar.</p>
                        </article>
                    </div>
                    <div className="card-1">
                        <img className="imagens" src="./fotog.png" alt="" />
                        <article>
                            <h2>Ouça o que quiser.</h2>
                            <p>Mesmo no celular ou tablet.</p>
                        </article>
                    </div>
                    <div className="card-1">
                        <img className="imagens" src="./fotog.png" alt="" />
                        <article>
                            <h2>Troque de música o quanto quiser.</h2>
                            <p>Pule quando quiser.</p>
                        </article>
                    </div>
            </div>
      </main>
    </Article>
  );
};
