import React from "react";

import { ModalInfoContainer, BackgroundContainer } from "./style";

export default function ModalInfo({ title, onClick }) {
  return (
    <BackgroundContainer>
      <ModalInfoContainer>
        <h2>{title}</h2>
        <h1>Nome</h1>
        <h1>Matricula</h1>
        <h1>Escolaridade</h1>
        <h1>Curso</h1>
        <h1>Aniversario</h1>
        <h1>Admissao</h1>
        <h1>Competencia</h1>
        <h1>Alocacao</h1>
        <h1>Time</h1>
        <h1>Vinculo</h1>
        <h1>Email</h1>
        <h1>Telefone</h1>
        <h1>Gitlab</h1>
        <button onClick={onClick}>Fechar</button>
      </ModalInfoContainer>
    </BackgroundContainer>
  );
}
