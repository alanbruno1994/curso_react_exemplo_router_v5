import { useHistory,useLocation } from "react-router-dom"

export default function Home(){
const history=useHistory()//Aqui e usada para transitar entre as telas de forma dinamica
const location=useLocation()//com o location se para descobrir atraves de pathname o nome da rota atual
// e com o seach se descobre os atributos de consulta que usam algo como ?e=x
const queryParams = new URLSearchParams(location.search);//Aqui consega pega cada um dos search de location
//Se por exemplo na rota tive algo como ?e=3 e ai voce usa queryParams.get('e') voce obtem o valor 3
console.log(queryParams)
    function aboutHandler(){    
        //push- Coloca uma nova entrada na pilha de histórico
        //replace- Substitui a entrada atual na pilha de histórico
        history.push('/about')//
    }

    function returnPage(){
        history.goBack()//volta a pagina anterior
    }

    

    return <div style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center',alignItems:'center'}}>
        Page Home-{location.pathname+location.search}<br/>
        <button style={{width:300}} onClick={aboutHandler}>About</button>
        <button style={{width:300}} onClick={returnPage}>Return Page</button>
        <br/>
        <p>{queryParams.get('e')}</p>

    </div>
}