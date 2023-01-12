import { HeaderContainer } from "./style";
import logo from "../../assets/images/Logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="headerLeft">
        <img src={logo} alt="logo"></img>
        <div className="usuario">
          <h3>bruno.neves9@unifor.br</h3>
          <h3 className="logout">Logout</h3>
        </div>
      </div>
      <div className="navegacao">
        <a>Dashboard</a>
        <a>Colaboradores</a>
      </div>
    </HeaderContainer>
  );
}
