import React, { useEffect, useState } from "react";
import { DivListaUserContainer, DivCentralContainer, DivButtonsContainer } from "./style";
import api from "../../services/api";
import BotaoColaboradores from "../BotaoColaboradores";
import botaoEditar from "../../assets/images/IconeEditar.png";
import lixeira from "../../assets/images/Lixeira.svg";
import info from "../../assets/images/info.png";
import adicionar from "../../assets/images/AdicionarUsuario.svg";

export default function ListaColaboradores() {
  const [pessoas, setPessoas] = useState();

  async function pessoasApi() {
    await api
      .get("/users/list")
      .then((response) => {
        console.log(response.data);
        setPessoas(response.data);
      })
      .catch((err) => {
        console.error("erro" + err);
      });
  }

  useEffect(() => {
    pessoasApi();
  }, []);

  return (
    <>
      {!pessoas ? (
        <>
          <h1>...</h1>
        </>
      ) : (
        <>
          <DivCentralContainer>
            <DivListaUserContainer>
              <h1>Nome</h1>
              <h1>Email</h1>
              <h1>Matrícula</h1>
              <h1>Time</h1>
              <h1>Aniversario</h1>
              <h1>Competencia</h1>
              <h1>Vinculo</h1>
              <BotaoColaboradores icon={adicionar} />
            </DivListaUserContainer>
            {pessoas.map((pessoa, key) => {
              return (
                <DivListaUserContainer>
                  <h1>{pessoa.name}</h1>
                  <h1>{pessoa.email}</h1>
                  <h1>{pessoa.matricula}</h1>
                  <h1>{pessoa.time}</h1>
                  <h1>{pessoa.aniversario}</h1>
                  <h1>{pessoa.competencia}</h1>
                  <h1>{pessoa.vinculo}</h1>
                  <DivButtonsContainer>
                    <BotaoColaboradores icon={botaoEditar} />
                    <BotaoColaboradores icon={lixeira} />
                    <BotaoColaboradores icon={info} />
                  </DivButtonsContainer>
                </DivListaUserContainer>
              );
            })}
          </DivCentralContainer>
        </>
      )}
    </>
  );
}
