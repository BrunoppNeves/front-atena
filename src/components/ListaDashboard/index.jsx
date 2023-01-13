import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ListaComponente, FundoLista } from "./style";

export default function ListaDashboard() {
  const [pessoas, setPessoas] = useState();

  async function pessoasApi() {
    await api
      .get("/history/list")
      .then((response) => {
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
          <FundoLista>
            <h2>Histórico de chegada</h2>
            {pessoas.map((pessoa, key) => {
              return (
                <ListaComponente>
                  <h1>{pessoa.User.name}</h1>
                  <h1>{pessoa.date}</h1>
                </ListaComponente>
              );
            })}
          </FundoLista>
        </>
      )}
    </>
  );
}
