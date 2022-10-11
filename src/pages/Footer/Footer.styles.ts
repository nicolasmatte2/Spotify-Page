import styled from "Styled-components";

export const Foot = styled.div`
  max-height: 100%;
  background-color: black;
  .geral {
    color: white;
    width: 100%;
    padding: 80px 0 50px 0;
    height: 400px;
    max-height: 100%;
    padding: 80px 0 50px 0;
  }
  .geral-dois {
    display: flex;
    margin: 0 auto;
    width: 1170px;
    max-width: 100%;
    height: 400px;
    max-height: 100%;
    flex-wrap: wrap;
    h2 {
      color: gray;
      font-size: 16px;
      margin: 20px 0;
      font-weight: normal;
      font-weight: bold;
    }
    a {
      display: block;
      color: white;
      font-size: 15px;
      padding: 3px 0 15px;
      font-weight: normal;
    }
    a:hover {
      color: #1ed760;
    }
  }
  #logo {
    height: 346px;
    max-height: 100%;
    width: 165px;
    max-width: 100%;
    padding: 0 15px;
    margin: 0;
  }
  #abas {
    display: flex;
    h2 {
      font-size: 14px;
    }
  }
  .empresa {
    display: block;
    height: 346px;
    max-height: 100%;
    width: 165px;
    max-width: 100%;
    padding: 0 15px;
    margin: 0;
  }
  .comunidades {
    height: 346px;
    max-height: 100%;
    width: 165px;
    max-width: 100%;
    padding: 0 15px;
    margin: 0;
  }
  .links {
    height: 346px;
    max-height: 100%;
    width: 165px;
    max-width: 100%;
    padding: 0 15px;
    margin: 0;
  }
  .imagens {
    display: block;
    height: 346px;
    max-height: 100%;
    width: fit-content;
    max-width: 100%;
    margin: 0 15px 0 auto;
    #fotos {
      margin-top: 20px;
    }
    img {
      width: 54px;
      height: 54px;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .legal {
  }
  .registrado {
    display: flex;
    width: 1140px;
    max-width: 100%;
    height: 15px;
    max-height: 100%;
    margin: 0 15px;
    justify-content: flex-end;
    color: gray;
    font-size: 12px;
    img {
      margin: 0 8px 0 0;
    }
  }
  .footer {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    color: gray;
    font-size: 12px;
    align-items: center;
    span{
      margin: 0px 15px 0 auto;
    }
  }
  .legal {
    display: flex;
    height: 39px;
    margin: 0 45px 0 0;
    padding: 0 0 0 15px;
    align-items: center;

    a {
      display: flex;
      font-size: 12px;
      margin: 0 24px 0 0;
      padding: 12px 0;
      text-align: center;
      color: gray;
      text-decoration: none;
      justify-content: space-between;
    }
    a:hover {
      color: #1ed760;
      text-decoration: none;
    }
  }
  @media (max-width: 1199px) and (min-width: 992px){
    .geral-dois{
      width: 970px;
    }
  }
  @media (max-width: 991px) {
    #abas{
      display: block;
    }
    .geral{
      height: 565px;
      max-height: 100%;
      padding: 50px 0 20px 0;
    }
    .geral-dois{
      display: block;
      width: 750px;
      height: 100%;
      max-height: fit-content;
    }
    #logo{
      display: block;
      height: fit-content;
      margin: 0 auto 0 0; ;
      h1{
        font-size: 16px;
        width: fit-content;
      }
    }
    .empresa{
        display: inline-block;
        width: 220px;
        height: 300px;
        margin: 0 0;
        h2{
          margin: 50px 0 22px 0
        }
      }
    .comunidades{
      display: inline-block;
        width: 220px;
        height: 300px;
        max-width: 100%;
        h2{
          margin: 50px 0 22px 0
        }
      }
    .links{
      display: inline-block;
        width: 220px;
        height: 300px;
        max-width: 100%;
        h2{
          margin: 50px 0 22px 0
        }
      }
      .imagens{
        width: 100%;
        display: inline-block;
        height: fit-content;
        margin: 90px 15px 15px 15px;
      }
      .registrado {
        width: 720px;
      }
  }
`;
