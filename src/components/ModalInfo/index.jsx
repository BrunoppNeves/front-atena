import React, { useState, useEffect } from "react";
import api from "../../services/api";

import {
  ModalInfoContainer,
  BackgroundContainer,
  WorkspaceContainer,
  TopModalContainer,
  DivLeftContainer,
  DivCenterContainer,
  DivStatusContainer,
  DivRightContainer,
  DivFotoContainer,
  DivHistoricoContainer,
  DivListContainer,
  DivDadosContainer,
} from "./style";

import botaoFechar from "../../assets/images/closeTab.svg";

export default function ModalInfo({
  title,
  onClick,
  nome,
  matricula,
  time,
  vinculo,
  alocacao,
  email,
  gitlab,
  aniversario,
  telefone,
  escolaridade,
  curso,
  competencia,
  adimissao,
  status,
  historicos,
}) {
  return (
    <BackgroundContainer>
      <ModalInfoContainer>
        <TopModalContainer>
          <h2>{title}</h2>
          <button onClick={onClick}>{<img src={botaoFechar} alt="icon" />}</button>
        </TopModalContainer>
        <WorkspaceContainer>
          <DivLeftContainer>
            <h1>Nome: {nome}</h1>
            <h1>Matricula: {matricula} </h1>
            <h1>Time: {time}</h1>
            <h1>Vínculo: {vinculo} </h1>
            <h1>Alocação: {alocacao}</h1>
            <h1>Email: {email}</h1>
            <h1>Gitlab: {gitlab}</h1>
          </DivLeftContainer>
          <DivCenterContainer>
            <h1>Aniversario: {aniversario} </h1>
            <h1>Telefone: {telefone} </h1>
            <h1>Escolaridade: {escolaridade} </h1>
            <h1>Curso: {curso} </h1>
            <h1>Competencia: {competencia} </h1>
            <h1>Admissao: {adimissao} </h1>
            <DivStatusContainer>
              <h1 id="status">Ferias: {status ? <p style={{ color: "red" }}>Sim</p> : <p style={{ color: "green" }}>Não</p>}</h1>
            </DivStatusContainer>
          </DivCenterContainer>
          <DivRightContainer>
            <DivHistoricoContainer>
              <h2>Historico</h2>
              <DivListContainer>
                {historicos.map((historico) => {
                  return <DivDadosContainer>
                    <h3>{historico.date}</h3>
                  </DivDadosContainer>;
                })}
              </DivListContainer>
            </DivHistoricoContainer>
            <DivFotoContainer></DivFotoContainer>
          </DivRightContainer>
        </WorkspaceContainer>
      </ModalInfoContainer>
    </BackgroundContainer>
  );
}
