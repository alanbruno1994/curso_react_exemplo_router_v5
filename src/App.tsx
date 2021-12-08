import { NavLink } from 'react-router-dom';
import Router from './Router';
import style from './App.module.css'
function App() {
  //bruno vai ser o param data
  //className e usado para o link inativo e activeClassName quando o link esta ativo
  return <>
    <nav className={style.nav}>
      <NavLink className={style.active}  to='/'>Start</NavLink>
      <NavLink activeClassName={style.active} to='/about'>About</NavLink>
      <NavLink to='/about/bruno'>About-Value</NavLink>
      <NavLink to='/home'>Home</NavLink>
    </nav>
    <Router/>
  </>
}

export default App;
