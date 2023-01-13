import { BotaoColaboradoresContainer } from "./style";

export default function BotaoDashboard({ icon }) {
  return (
    <>
      <BotaoColaboradoresContainer>
        <button>{<img src={icon} alt="icon" />}</button>
      </BotaoColaboradoresContainer>
    </>
  );
}
