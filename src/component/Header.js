import React from 'react'
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";




class Header extends React.Component {



    render() {

        return (
          <div className = "borderBottomBlue">
            <Navbar  expand="lg" className="d-flex justify-content-between">
                <div>
                  <img src="https://static.wixstatic.com/media/9cc29e_bb57f20ff79143529930d8a6d04007be~mv2.png/v1/crop/x_227,y_220,w_1579,h_391/fill/w_272,h_68,al_c,q_85,usm_0.66_1.00_0.01/Sans%20titre%20-%202.webp" alt="Logo webreathe"/>

                </div>

                <Nav.Link as="div">
                    <Link to="/formulaire">Ajouter un module</Link>
                  </Nav.Link>

                <Nav.Link as="div">
                    <Link to="/">Voir les modules</Link>
                  </Nav.Link>
            </Navbar>
            </div>
        );
    }
}

export { Header };