import { Link } from "../../Buttons/Link/Link";
import * as S from "./Header.styles";

export const Header = () => {
  const handlePremiumClick = () => {
    alert("Premium Clicked");
    window.location.href = "http://localhost:8080/";
  };

  const buttonLabels = [
    { label: "Individual" },
    { label: "Suporte" },
    { label: "Baixar" },
    { label: "Inscrever-se" },
    { label: "Entrar" },
  ];

  return (
    <S.Header>
      <div className="left-content">
        <h1>Spotify</h1>
      </div>
      <div className="right-content">
        {buttonLabels.map((item) => (
          <Link label={item.label} />
        ))}
        <img src="../imagens/barras.png" alt="" />
      </div>
    </S.Header>
  );
};
