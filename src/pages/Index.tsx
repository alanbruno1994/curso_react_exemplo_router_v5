import { Link } from "react-router-dom";

//O Link e  mais simples do que o NavLink mais funciona para redicionar a pagina sem carregar
export default function Index(){

    return <>
     <p style={{textAlign:'center'}}>Page Index <Link to='/about'>about</Link></p>
   
    </>
}