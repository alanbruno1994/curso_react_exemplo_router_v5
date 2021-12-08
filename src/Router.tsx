import {Switch,Route,Redirect} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Index from './pages/Index'



export default function Router()
{
    //Se nao tiver exact ele pega primeira rota correspondente e rendiza
    //:data serve para indicar um parametro de rota chamado data
    return  <Switch>
                <Route path='/' exact><Index/></Route>
                <Route path='/about' exact><About/></Route>
                <Route path='/about/:data'><About></About></Route>
                <Route path='/home'><Home/></Route>          
                <Route path="*">
                    <Redirect to='/'></Redirect>
                </Route>      
            </Switch>
      
}
//o path='*' indica qualquer rota e Redirect como o nome indica serve para redirecionar a rota
