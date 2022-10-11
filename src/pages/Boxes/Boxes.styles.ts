import styled from "Styled-components";

export const Box = styled.div`
background-color: #efefef;
  .contender {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    width: 1140px;
    padding: 75px 15px;
    height: fit-content;

    #principal {
      text-align: center;
      h1 {
        font-size: 36px;
      }
      p {
        font-size: 16.5px;
        margin: 10px 0;
      }
      #imagens {
        display: flex;
        margin-top: 16px;
        justify-content: center;
      }
      .imagens-dois {
        display: flex;
      }

      .imagens-tres {
        display: inline-block;
        margin-right: 7px;
        img {
          width: 29px;
          max-width: 100%;
          height: 20px;
        }
      }
      span {
        color: black;
        text-decoration-line: underline;
      }
    }
    #caixas {
      display: flex;
      margin: 50px 0px 26px 0px;
      background-color: none;
      font-family: Arial, Helvetica, serif;
      h1 {
        font-size: 24px;
        margin-bottom: 5px;
      }
    }
    .completo{
      display: block;
    }
    .caixa {
      display: flex;
      grid-template-rows: repeat(4, auto);
      grid-auto-flow: column;
      grid-template-columns: repeat(4, 1fr);
      -webkit-box-pack: center;
      justify-content: center;
      margin: auto 0px 26px 0px;
    }
  }
  .caixa-dois {
    display: grid;
    background-color: white;
    width: 237px;
    max-width: 100%;
    height: 199px;
    max-height: 100%;
    padding: 16px 16px 0px 16px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: rgb(255 255 255) 0px 8px 0px 0px, rgb(0 0 0 / 30%) 0px 0px 8px;
      hr{
        background-color: rgb(255 255 255);
      }
  }
  .topo-1 {
    display: inline-block;
    height: fit-content;
  }
  .mes {
    background-color: rgb(13, 114, 234);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px 4px 10px 0px;
    list-style-type: none;
    display: inline-block;
    width: fit-content;
    height: fit-content;
  }
  .pagamento {
    border-radius: 4px;
    font-size: 12px;
    padding: 4px 8px;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    margin: 0px 4px 10px 0px;
    margin-block: 0px 10px;
    color: rgb(13, 114, 234);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(13, 114, 234);
  }
  .periodo {
    margin-bottom: 2px;
  }
  .conta {
    margin-bottom: 20px;
  }
  li {
    display: flex;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
  }
  .lista {
    padding: 20px 16px 16px;
    margin-right: 16px;
    width: 237px;
    height: 369px;
    max-width: 100%;
    background-color: white;
    padding-bottom: 16px;
    box-shadow: rgb(0 0 0 / 30%) 0px 5px 8px;
    border-radius: 4px;
  }
  .lista-tres {
    background-color: white;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 237px;
    max-width: 100%;
    line-height: 23px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 5px;
  }
  .imagens-lista{
    height: 100%;
    max-height: 24px;
    width: 100%;
    max-width: 24px;
    padding-right: 10px;
  }
  .botao-box {
    background-color: white;
    width: 237px;
    text-align: center;
    max-width: 100%;
    height: 60px;
    max-height: fit-content;
    margin-right: 16px;
    padding: 0 16px;
    box-shadow: rgb(255 255 255) 0px -9px 0px 0px, rgb(0 0 0 / 30%) 0px 0px 8px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    width: 237px;
    padding: 14px 32px;
    border-radius: 500px;
    font-size: 14px;
    margin: 0;
    font-weight: bold;
  }
  .termos {
    color: rgb(83, 83, 83);
    width: 237px;
    font-size: 12px;
    padding: 4px 16px 16px;
    max-width: 100%;
    background-color: white;
    height: 124px;
    max-width: 100%;
    border-radius: 0px 0px 10px 10px;
    box-shadow: rgb(255 255 255) 0px -9px 0px 0px, rgb(0 0 0 / 30%) 0px 0px 8px;
    margin: 0 16px 16px 0;
    p {
      margin-top: 12px;
    }
    a {
      color: rgb(83, 83, 83);
    }
  }
    @media (max-width: 1199px) and (min-width: 992px) {
      .contender{
        height: fit-content;

      } 
      #caixas{
        margin: 0 auto;
        justify-content: center
        
      }
      .caixa{
        display: flex;
        
        flex-direction: column;
        width: fit-content;
        
      }
      .completo{
        margin: 0 auto;
      }
      .caixa-dois{
        width: 400px;
        height: 155px;
        img{
          width: 400px;
          height: 2px;
        }
      }
      .lista{
        width: 400px;
        height: fit-content;

      }
      .lista-tres{
        width: 100%;
      }
      .botao-box{
        width: 400px;
        button{
          width: 100%;
        }
      }
      .termos{
        width: 400px;
        height: fit-content;
      }
      }
  @media (max-width: 991px){
    .contender{
        height: fit-content;

      } 
      #caixas{
        margin: 0 auto;
        justify-content: center
        
      }
      .caixa{
        display: flex;
        
        flex-direction: column;
        width: fit-content;
        
      }
      .completo{
        margin: 0 auto;
      }
      .caixa-dois{
        width: 400px;
        height: 155px;
        img{
          width: 400px;
          height: 2px;
        }
      }
      .lista{
        width: 400px;
        height: fit-content;

      }
      .lista-tres{
        width: 100%;
      }
      .botao-box{
        width: 400px;
        button{
          width: 100%;
        }
      }
      .termos{
        width: 400px;
        height: fit-content;
      }
  }
`;
