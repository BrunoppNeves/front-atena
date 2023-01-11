import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10rem;
  margin-right: 10rem;
  padding-top: 5rem;

  img {
    width: 5rem;
    padding-right: 1rem;
  }

  .usuario {
    width: 10rem;
    color: white;
    padding-right: 15rem;
  }

  .logout {
    color: #ff0000;
    font-size: 15px;
    font-weight: bold;
  }

  .navegacao {
    padding-top: 10px;
    padding-right: 18rem;
  }

  a {
    color: white;
    font-weight: bold;
    margin: 20px;
  }
`;
