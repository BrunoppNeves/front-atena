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

export default function ModalEditColaborador({
  Cancelar,
  Confirmar,
  getNome,
  getMatricula,
  getEscolaridade,
  getAniversario,
  getAdmissao,
  getCompetencia,
  getAlocacao,
  getTime,
  getVinculo,
  getEmail,
  getGitlab,
  getTelefone,
  id,
}) {
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
  const [Pessoa, setPessoa] = useState();

  const token = localStorage.getItem("token");

  const handleGetUser = async (id) => {
    await api
      .get(`/users/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPessoa(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("erro" + err);
      });
  };

  return (
    <DivBackgroundContainer>
      <form onSubmit={handleGetUser}>
        <DivModalAddColaboradorContainer>
          <DivTopModalContainer>
            <h1>Editar Colaborador</h1>
          </DivTopModalContainer>
          <DivMidContainer>
            <DivLeftContainer>
              <DivInputContainer>
                <h2>Nome</h2>
                {<input type="text" value={nome} placeholder={`${getNome}`} onChange={({ target }) => setNome(target.value)} />}
              </DivInputContainer>
              <DivInputContainer>
                <h2>Matrícula</h2>
                {
                  <input
                    type="text"
                    value={matricula}
                    placeholder={`${getMatricula}`}
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
                    placeholder={`${getEscolaridade}`}
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
                    placeholder={`${getAniversario}`}
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
                    placeholder={`${getAdmissao}`}
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
                    placeholder={`${getCompetencia}`}
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
                    placeholder={`${getAlocacao}`}
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
                    placeholder={`${getTime}`}
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
                    placeholder={`${getVinculo}`}
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
                    placeholder={`${getEmail}`}
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
                    placeholder={`${getGitlab}`}
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
                    placeholder={`${getTelefone}`}
                    onChange={({ target }) => setTelefone(target.value)}
                  />
                }
              </DivInputContainer>
            </DivRightContainer>
          </DivMidContainer>
          <DivButtonContainer>
            <button type="button" onClick={Cancelar}>Cancelar</button>
            <button type="submit">Confirmar</button>
          </DivButtonContainer>
        </DivModalAddColaboradorContainer>
      </form>
    </DivBackgroundContainer>
  );
}
