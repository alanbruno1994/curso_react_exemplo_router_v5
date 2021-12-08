import { Route, useParams,Switch,Redirect } from 'react-router-dom';

export default function About(){
    //aqui vai ser usado para que na rota /about/:data se pegue o valor que tem em data
    //Exemplo aqui http://localhost:3000/about/i pega i
    const params:any=useParams()

   //Nesse exemplo esta rendizando um componente atraves de rota, about/world.
   //So que nesse caso, rendiza dentro outro componente pai que uma das telas
    return <>
        <p style={{textAlign:'center'}}>About {params.data && params.data}</p>
        <Route path='/about/world'>
            <h1>Hello World</h1>
        </Route>
        <Route path='/about/world'>
            <h1>Hello World</h1>
        </Route>
        <Switch>
        <Route path='/about/world'>
            <h1>Hello World</h1>
        </Route>
        <Route path='/about/world'>
            <h1>Hello World</h1>
        </Route>
      
        </Switch>
    </>
}