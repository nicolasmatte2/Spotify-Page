import styled from "Styled-components";

export const Main = styled.div`
  background-color: #0072f4;
  max-width: 100%;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  .tudo{
    display: flex;
    margin: 0 auto;
    padding: 0 15px;
    width: fit-content;
  }
  header{
    display: block;
    width: fit-content;
    .card {
    display: block ;
    width: 1140px;
    padding: 72px 0 40px 0;
    height: 257px;
    max-height: 100%;
  }
  h1 {
    font-size: 40px;
    width: auto;
    font-weight: 600;
  }
  h2 {
    margin-top: 30px;
    width: auto;
    font-weight: normal;
  }
  .buttons{
    margin-top: 35px;
  }
  button {
    color: white;
    border: 2px solid white;
    background-color: transparent;
    border-radius: 500px;
    padding: 14px 32px;
    font-size: 14px;
    font-family: Helvetica;
    font-weight: bold;
    text-align: center;
    margin-right: 8px;
  }
  button:hover {
    background-color: #15549f;
    border-color: white;
    border-style: solid;
    border-radius: 500px;
    transform: scale(1.04);
  }
  #button-ver{
    background-color: black;
    border-color: black;
  }
  p {
    font-size: 11px;
    color: white;
    margin-top: 44px;

  }
  a{
    color: white;
  }
  @media (max-width: 1199px) and (min-width: 992px) {
    .card{
      width: 940px;
      max-width: 100%;
      padding: 48px 0 24px;
    }
    .tudo{
      width: 940px;
      max-width: 100%;
      height: 329px;
    }
  }
  @media (max-width: 991px){
    .card{
      width: 720px;
      max-width: 100%;
      padding: 48px 0 24px;
    }
    .tudo{
      width: 720px;
      max-width: 100%;
      height: 329px;
    }
  }
}
`;
