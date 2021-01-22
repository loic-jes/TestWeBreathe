import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';




class Footer extends Component {


    render() {

        return (
            <>

                <Navbar bg="black" expand="lg" className="d-flex justify-content-between">
                    <div>

                    </div>
                    <div>
                        <p className="color-white">© 2021 Loïc Jeschonek</p>
                    </div>

                </Navbar>
            </>
        );
    }
}

export { Footer }; 