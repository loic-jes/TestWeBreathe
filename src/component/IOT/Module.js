import React, { Component } from 'react';



class Module extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    
    

    render() {
        

        return (
            <>
            <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header"><b>{this.props.title}</b></div>
                <div className="card-body">
                    <img className="card-img-top" src={this.props.src} alt="" />
                    <p className="card-text"> Matricule : {this.props.text1}</p>
                    <p className="card-text"> Description : {this.props.text2}</p>
                    <p className="card-text"> Type de module : {this.props.text3}</p>
                    {this.props.text4 > 200 ?<p className="card-text" > Température : <span style={{color:"red"}}>{this.props.text4}</span></p> : <p className="card-text"> Température : <span style={{color:"Green"}}>{this.props.text4}</span></p>}
                    {this.props.text5 == 0 ?<p className="card-text"> Etat de marche : <span style={{color:"red"}}>Non fonctionnel</span></p> : <p className="card-text"> Etat de marche : <span style={{color:"Green"}}>fonctionnel</span></p>}
                    <p className="card-text"> Nombre de données envoyées : {this.props.text6}</p>
                    <p className="card-text">{this.props.text7}</p>
                    <p className="card-text">{this.props.text8}</p>
                    <p className="card-text">{this.props.text9}</p>
                    <p className="card-text">{this.props.text10}</p>
                </div>
                <div className="card-footer text-muted">
                    Mise en service : {this.props.date}
                </div>
            </div>
            </>
        );
    }
}

export { Module };