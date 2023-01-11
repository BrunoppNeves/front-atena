import styled from "styled-components";

export const ListaComponente = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  color: black;
  font-size: 10px;
  border-radius: 8px;
  background-color: white;
  margin: 1rem 1.6rem 0rem;
`;

export const FundoLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(111, 75, 239, 0.2);
  width: 30rem;
  height: 30rem;
  border-radius: 16px;
  margin: 1.6rem 0 0 10.4rem;
  gap: 0.1rem;

  h2 {
    color: white;
    font-size: 20px;
    margin-top: 1rem;
  }
`;
