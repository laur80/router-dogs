import React from 'react'
import Doglist from "./DogList"
import DogDetails from "./DogDetails"
import { Switch, Route, Redirect } from 'react-router-dom';

function Routes(prop) {

    const getDog =props => {
        let name = props.match.params.name;
        let currentDog = prop.dogs.find(
          dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        // console.log(currentDog);
        return <DogDetails {...props} dog={currentDog}/>
      };
         

    return (
        <Switch>
        <Route exact path='/dogs' render={()=><Doglist dogs={prop.dogs}/>} />
        <Route exact path='/dogs/:name' render={getDog} />
        <Redirect to='/dogs' />
       
       </Switch>
    )
}

export default Routes
