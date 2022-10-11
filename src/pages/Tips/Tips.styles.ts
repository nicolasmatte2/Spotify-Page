import { Article } from "./Tips.styles";
import styled from "Styled-components";

export const Article = styled.div`
  background-color: white;
  display: block;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  main{
    margin: 0px auto;
    max-width: 1140px ;
    padding: 75px 15px;
    color: black;
  }
   h1 {
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 72px;
    font-size: 38px;
    font-weight: 900;
  }
  .card {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-content: center
    justify-content: space-between;
    list-style-image: initial;
    text-align: center;
    margin-bottom: 20px;
    max-width: fit-content;
    max-height: fit-content;
    height: 100%;
    width: 100%;
    margin: 0px;
  }
  .card-1 {
    height: fit-content;

  }
  article {
    margin: 16px 0px;
  }
  h2 {
    margin-bottom: 10px;
    text-align: center;
    font-size: 21px;
    font-weight: bold;
  }
  img {
    width: 142px;
    height: 142px;
    border-radius: 50%;
    flex-wrap: wrap;
    margin: 0px 71px 40px;
  }
  .imagens{
    display: inline-block
  }
  @media (max-width: 1199px) and (min-width: 992px){
    main{ 
      width: 940px;
    }
    img{
     width: 104px;
     height: 104px;
    }
    .card{
      flex-direction: row;
      flex-wrap: wrap;
      column-count: 3;
      overflow: hidden;
      
    }
    .card-1{
      display: flex;
      height: fit-content;
      width: fit-content;
      height: 142px;
      h2{
        text-align: start;
        font-size: 20px;
      }
      p{
        text-align: start;
        font-size: 15px;
      }
      img{
        margin: 0 20px 0 0;
      }
      article{
        width: 345px;
      }
    }

  }
  @media (max-width: 991px){
    main{ 
      width: 720px;
    }
    img{
     width: 96px;
     height: 96px;
    }
    .card{
      flex-direction: row;
      flex-wrap: wrap;
      column-count: 3;
      overflow: hidden;
      
    }
    .card-1{
      display: flex;
      height: fit-content;
      width: fit-content;
      height: 142px;
    
      h2{
        text-align: start;
        font-size: 20px;
      }
      p{
        text-align: start;
        font-size: 15px;
      }
      img{
        margin: 0 20px 0 0;
      }
      article{
        width: 243px;
      }
    }
  }
`;
