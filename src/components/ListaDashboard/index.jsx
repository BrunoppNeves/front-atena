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

  //  const pessoas = ["Bruno", "Jorge", "Thami", "Lele", "Paulo"];
  //const listaPessoas = pessoas.map((c) => <li>{c.data.name}</li>);
  return (
    <>
      {!pessoas ? (
        <>
          <h1>...</h1>
        </>
      ) : (
        <>
          <FundoLista>
            <h2>Historico de chegada</h2>
            {pessoas.map((pessoa, key) => {
              return (
                <ListaComponente>
                  <h1>{pessoa.name}</h1>
                  <h1>{pessoa.id}</h1>
                </ListaComponente>
              );
            })}
          </FundoLista>
        </>
      )}
    </>
  );
}
