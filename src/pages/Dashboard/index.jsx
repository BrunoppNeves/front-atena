import React, { useState } from "react";
import Header from "../../components/Header";
import cadeadoFechado from "../../assets/images/cadeadoFechado.svg";
import cadeadoAberto from "../../assets/images/cadeadoAberto.svg";
import cadeadoTempo from "../../assets/images/cadeadoTempo.svg";
import BotaoDashboard from "../../components/BotaoDashboard";
import {
  DashboardContainer,
  WorkSpaceContainer,
  DivLeftContainer,
  DivRightContainer,
  DivBottomContainer,
  DivVideoContainer,
  DivButtonsContainer,
} from "./style";
import ListaDashboard from "../../components/ListaDashboard/";
import ReconhecimentoFacial from "../../components/ReconhecimentoFacial";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <WorkSpaceContainer>
        <Header />
        <DivBottomContainer>
          <DivLeftContainer>
            <ListaDashboard />
          </DivLeftContainer>
          <DivRightContainer>
            <DivVideoContainer>
              <ReconhecimentoFacial />
            </DivVideoContainer>
            <DivButtonsContainer>
              <BotaoDashboard title={"Abrir"} showIcon={true} icon={cadeadoAberto} />
              <BotaoDashboard title={"Abrir 3s"} showIcon={true} icon={cadeadoTempo} />
              <BotaoDashboard title={"Fechar"} showIcon={true} icon={cadeadoFechado} />
            </DivButtonsContainer>
          </DivRightContainer>
        </DivBottomContainer>
      </WorkSpaceContainer>
    </DashboardContainer>
  );
}
