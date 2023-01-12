import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 67%;
  align-items: center;

  .headerLeft {
    display: flex;
    padding-top: 3%;
  }

  img {
    width: 5rem;
    padding: 0 2%;
  }

  .usuario {
    width: 10rem;
    color: white;
    padding: 8% 0% 0% 0%;
  }

  .logout {
    color: #ff0000;
    font-size: 15px;
    font-weight: bold;
  }

  .navegacao {
    padding-left: 45%;
  }

  a {
    color: white;
    font-weight: bold;
    margin: 20px;
  }
`;
