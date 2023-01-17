import React, { useState } from "react";
import closeIcon from "../../assets/images/closeTab.svg";
import api from "../../services/api";

import {
  DivBackgroundContainer,
  DivModalAddColaboradorContainer,
  DivMidContainer,
  DivTopModalContainer,
  DivLeftContainer,
  DivRightContainer,
  DivButtonContainer,
  DivInputContainer,
} from "./style";

export default function ModalAddColaborador({ CloseTab, Cancelar, Confirmar }) {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [admissao, setAdmissao] = useState("");
  const [competencia, setCompetencia] = useState("");
  const [alocacao, setAlocacao] = useState("");
  const [time, setTime] = useState("");
  const [vinculo, setVinculo] = useState("");
  const [email, setEmail] = useState("");
  const [gitlab, setGitlab] = useState("");
  const [telefone, setTelefone] = useState("");

  const token = localStorage.getItem("token");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const newUser = {
      name: nome,
      matricula: matricula,
      escolaridade: escolaridade,
      aniversario: aniversario,
      adimissao: admissao,
      competencia: competencia,
      alocacao: alocacao,
      time: time,
      vinculo: vinculo,
      email: email,
      gitlab: gitlab,
      telefone: telefone,
    };
    await api
      .post("/users/create", newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        alert("Colaborador cadastrado com sucesso!");
        window.location.href = "/Colaboradores";
      })
      .catch((error) => {
        alert("Erro ao cadastrar colaborador!");
        console.log(error);
      });
  };

  return (
    <DivBackgroundContainer>
      <form onSubmit={handleCreateUser}>
        <DivModalAddColaboradorContainer>
          <DivTopModalContainer>
            <h1>Adicionar Colaborador</h1>
            <button onClick={CloseTab}>{<img src={closeIcon} alt="icon" />}</button>
          </DivTopModalContainer>
          <DivMidContainer>
            <DivLeftContainer>
              <DivInputContainer>
                <h2>Nome</h2>
                {
                  <input
                    type="text"
                    value={nome}
                    placeholder="Informe o nome completo do colaborador."
                    onChange={({ target }) => setNome(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Matrícula</h2>
                {
                  <input
                    type="text"
                    value={matricula}
                    placeholder="Informe a matrícula do colaborador."
                    onChange={({ target }) => setMatricula(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Escolaridade</h2>
                {
                  <input
                    type="text"
                    value={escolaridade}
                    placeholder="Informe a escolaridade do colaborador. Ex: Educação infantil"
                    onChange={({ target }) => setEscolaridade(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Aniversário</h2>
                {
                  <input
                    type="text"
                    value={aniversario}
                    placeholder="Informe o aniversário do colaborador. Ex: 01-01-2000"
                    onChange={({ target }) => setAniversario(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Admissão</h2>
                {
                  <input
                    type="text"
                    value={admissao}
                    placeholder="Informe a data de admissão do colaborador. Ex: 01-01-2000"
                    onChange={({ target }) => setAdmissao(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Competência</h2>
                {
                  <input
                    type="text"
                    value={competencia}
                    placeholder="Informe a competência do colaborador. Ex: iot, backend, ..."
                    onChange={({ target }) => setCompetencia(target.value)}
                  />
                }
              </DivInputContainer>
            </DivLeftContainer>
            <DivRightContainer>
              <DivInputContainer>
                <h2>Alocação</h2>
                {
                  <input
                    type="text"
                    value={alocacao}
                    placeholder="Informe a alocação do colaborador. Ex: Vortex, DTEC, ..."
                    onChange={({ target }) => setAlocacao(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Time</h2>
                {
                  <input
                    type="text"
                    value={time}
                    placeholder="Informe o time do colaborador. Ex: Venus, Netuno, ..."
                    onChange={({ target }) => setTime(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Vínculo</h2>
                {
                  <input
                    type="text"
                    value={vinculo}
                    placeholder="Informe o vínculo do colaborador. Ex: Estagiario, Bolsista, ..."
                    onChange={({ target }) => setVinculo(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Email</h2>
                {
                  <input
                    type="text"
                    value={email}
                    placeholder="Informe o email do colaborador. Ex: seuemail@unifor.br"
                    onChange={({ target }) => setEmail(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Gitlab</h2>
                {
                  <input
                    type="text"
                    value={gitlab}
                    placeholder="Informe o gitlab do colaborador. Ex: seuemail@gitlab.com"
                    onChange={({ target }) => setGitlab(target.value)}
                  />
                }
              </DivInputContainer>
              <DivInputContainer>
                <h2>Telefone</h2>
                {
                  <input
                    type="text"
                    value={telefone}
                    placeholder="Informe o telefone do colaborador. Ex: (xx) 9xxxx-xxxx"
                    onChange={({ target }) => setTelefone(target.value)}
                  />
                }
              </DivInputContainer>
            </DivRightContainer>
          </DivMidContainer>
          <DivButtonContainer>
            <button onClick={Cancelar}>Cancelar</button>
            <button type="submit">Confirmar</button>
          </DivButtonContainer>
        </DivModalAddColaboradorContainer>
      </form>
    </DivBackgroundContainer>
  );
}