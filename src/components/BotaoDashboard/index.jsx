import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { BotaoDashboardContainer } from "./style";

export default function BotaoDashboard({ title, showIcon, icon, router, msg }) {
  useEffect(() => {
    handleClick();
  }, []);

  async function handleClick(rota, msg) {
    await api
      .get(rota)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          alert(`${msg}`);
        }
      })
      .catch((err) => {
        console.error("erro" + err);
      });
  }
  
  return (
    <>
      <BotaoDashboardContainer>
        <button onClick={() => handleClick(router, msg)}>
          {title}
          {showIcon ? <img src={icon} alt="icon" /> : null}
        </button>
      </BotaoDashboardContainer>
    </>
  );
}
