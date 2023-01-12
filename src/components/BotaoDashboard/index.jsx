import { BotaoDashboardContainer } from "./style";

export default function BotaoDashboard({ title, showIcon, icon }) {
  return (
    <>
      <BotaoDashboardContainer>
        <button>
          {title}
          {showIcon ? <img src={icon} alt="icon" /> : null}
        </button>
      </BotaoDashboardContainer>
    </>
  );
}
