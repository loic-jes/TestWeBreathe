import React from 'react'

import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import {Affichage} from './IOT/Affichage'
import {AddModForm} from './IOT/AddModForm'




class Main extends React.Component {



  render() {



    return (
      <>
        <Container fluid>
          <Switch>
            <Route exact path="/" component={Affichage} />
            <Route exact path="/formulaire" component={AddModForm} />

          </Switch>
        </Container>
      </>
    );
  }
}

export { Main };
