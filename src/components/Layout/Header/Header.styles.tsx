import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: black;
  color: white;
  height: 80px;
  margin: 0;
  padding: 0 5rem;

  .left-content {
    color: white;
    width: 100%;
  }

  .right-content {
    display: flex;
    flex-direction: row;
  }

  h1 {
    display: flex;
    flex-direction: row;
    font-size: 25px;
    font-family: Arial;
  }

  img {
    display: none;
  }

  h2:hover {
    color: #1ed760;
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    .left-content {
      max-width: 970px;
      height: 80px;
    }
  }

  @media (max-width: 991px) {
    img {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: auto 0;
    }

    h1 {
      align-items: center;
      font-size: 16px;
      padding: 0;
    }

    h2 {
      display: none;
    }

    .left-content {
      max-width: 720px;
      height: 54px;
    }
  }
`;
