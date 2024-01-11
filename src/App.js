import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';
import { NavbarComponent } from './components/NavbarComponent';
import { Actor } from './components/Actor';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      actors:[],
      isLoading: true,
    };
  }
  componentDidMount(){
    setTimeout(()=>this.fetchActors(),2000);

  }
  fetchActors=async()=>{
    const res = await fetch("https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en")
    const data = await res.json();
    this.setState({actors:data.results,isLoading:false});
  }

  render(){
  const {actors, isLoading} = this.state;

    return (<div className='App'>
      <NavbarComponent/>
      
      {
        isLoading? (<div className='spinner-wrapper'>
           <Spinner
        color="warning"
        size=""
        type="grow">
        Loading...
      </Spinner>
      </div>
      ): (
        <div className="actors-wrapper">
        {actors.sort((a,b)=>a.popularity-b.popularity).map((singleActor)=><Actor {...singleActor} />)}
        </div> 
        )}
   
    </div>
      )
}
}

export default App;