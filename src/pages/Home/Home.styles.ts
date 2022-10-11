import styled from "Styled-components";

export const Header = styled.div`
margin: 0;
color: white;
background: black;
  .contender {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    height: 80px;
    padding: 0 15px;
    color: white;
    width: 100%;
    max-width: 1170px;
  }
  .card{
    display: block
  }
  .cinza {
    display: flex;
    color: lightgray;
  }

  h1 {
    padding: 28px 17px;
    display: flex;
    flex-direction: row;
    font-size: 25px;
    font-family: Arial;
  }

  .right-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h2 {
    font-family: Helvetica;
    font-weight: bold;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    padding: 28px 17px;
  }
  img{
    display: none;
  }

  h2:hover {
    color: #1ed760;
  }
  @media (max-width: 1199px) and (min-width: 992px){
    .contender {
      max-width: 970px;
      height: 80px;
    }
  }
  @media (max-width: 991px) {
    img{
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: auto 0;

    }
    h1{
        align-items: center;
        font-size: 16px;
        padding: 0;
      }
      h2{
        display: none;
      }
    .contender {
      max-width: 720px;
      height: 54px;
    }
  }

`;
