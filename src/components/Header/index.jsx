import { HeaderContainer } from './style'
import logo from '../../assets/images/Logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt='logo'></img>       
      <div className='usuario'>
        <h3>bruno.neves9@unifor.br</h3>
        <h3 className='logout'>Logout</h3>
      </div>
      <div className='navegacao'>
      <a>Dashboard</a>
      <a>Colaboradores</a>
      </div>
    </HeaderContainer>
  );
}

