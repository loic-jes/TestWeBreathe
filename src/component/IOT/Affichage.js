import React, { Component } from 'react';
import {Module} from './Module';
import {ApiRequest} from "../../Helpers";
import {AddModForm} from "./AddModForm"
import { Alert } from 'react-bootstrap';



// Représente la page entière

class Affichage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            modules: [],
            error: null
    }
}

    componentDidMount() {

        ApiRequest({table:"modules"}).then((response)=>{
            return response.text().then((resp) => {
                if (resp) {
                    this.setState({
                        isLoaded: true,
                        modules : JSON.parse(resp)                       
                    })                    
                }
            },
            (error) => {
                this.setState({
                    isLoaded: true, 
                    error
                })
            });
        })
    }
        

    render() {

        let cards = [
            {
                date : "19/12/2020",
                title : "Petites rectifications",
                text1 : "Ajout d'une traduction en anglais pour les éléments manquants (alerte, header, un gmt+1 manquant, mises à jour",
                text2 : "création d'un pseudo-cookie maison qui conserve le choix de langue pour la prochaine co",
                text3 : "Fix du nom de l'onglet et normalement de ce qui est montré quand on envoie le lien du site"
            },
            {
                date: "17/12/2020",
                title: "Pfiouu",
                text1: "Migration enfin réussie du projet sous la nouvelle technologie : React.js",
                text2: "Ajout : ",
                text3: "- un convertisseur rapide ",
                text4: "- un pied de page",
                text5: "- d'une version anglophone",
                text6: "- de tout plein de dynamisme des résultats", 
                text7: "- du système qui permettra de changer de page plus tard :D"

            },
            {
                date: "08/12/2020",
                title: "Nul",
                text1: "Tentative ratée d'incorporer la technologie 'react' au site",
                text3: "Modification du fonctionnement du calculateur pour qu'il prenne juste un chiffre entre 0 et 160 au lieu de xx/160",
                text4: "Maintenant on peut appuyer sur 'Entrée' du clavier pour afficher le résultat quand on est dans la zone de texte au lieu d'avoir a aller clicker sur le bouton valider"
            },
            {
                date: "20/11/2020 (bis)",
                title: "Timer interne 2",
                text1: "Mon timer était nul, mais au moins maintenant il est corrigé"


            },
            {
                date: "20/11/2020",
                title: "Timer interne",
                text1: "Met à jour toutes les 8 minutes le stock de résine actuelle, et ajuste tous les timers en adéquation"

            },
            {
                date: "18/11/2020",
                title: "Mise en service du site"
            },
            {
                date: "17/12/2020",
                title: "Une photo de Meren",
                src: "https://cdn.discordapp.com/attachments/586261737439887461/788866481793925140/unknown.png",
                text1: "La découverte du Brachydios",
                text9: "En vrai c'était juste un essai pour faire une news standardisée.",
                text10: "'Ca marche bien !'"
            },
        ]

        const { error, isLoaded, modules } = this.state;

        if (error) {
            return (
                <div className="vh-100 d-flex align-items-center" style={{ marginTop: -80 }}>
                    <Alert variant='danger' className='text-center w-100'>
                        {error}
                    </Alert>
                </div>
            );
        }
        else if (!isLoaded) {
            return (
                <div className="vh-100 d-flex align-items-center" style={{ marginTop: -80 }}>
                    <Alert variant='success' className='text-center w-100'>
                        Chargement...
                    </Alert>
                </div>
            );
        }
        else if (modules.length > 0) {
            return (
                <>
                    <div className="row">
                        {modules.map(item => {
                            let nom = item.nom;
                            let numero = item.numero;
                            let description = item.description;
                            let temperature = item.temperature;
                            let etat_de_marche = item.etat_de_marche;
                            let duree_fonctionnement = Number(item.duree_fonctionnement);
                            let donnees_envoyees = item.donnees_envoyees;
                            let type = item.type;

                            let realDuree_fonctionnement = Math.trunc((Date.now()-duree_fonctionnement)/86400000); // Compare la date de mise en place et la date actuelle
                            let exprDuree

                            if (realDuree_fonctionnement < 1) {
                                exprDuree = "Aujourd'hui";
                            } else if (realDuree_fonctionnement == 1){
                                exprDuree = "Hier";
                            } else if (realDuree_fonctionnement > 1) {
                                exprDuree = `Il y a ${realDuree_fonctionnement} jours`
                            }



                        
                            if (item.active > 0) {
                                return (
                                    <div key={item.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center mt-5">
                                        <Module title={nom} text1={numero} text2={description} text3={type} text4={temperature} text5={etat_de_marche} text6={donnees_envoyees} date={exprDuree}/>

                                        {/* 
                            let numero = item.numero;
                            let description = item.description;
                            let temperature = item.temperature;
                            let etat_de_marche = item.etat_de_marche;
                            let duree_fonctionnement = Number(item.duree_fonctionnement);
                            let donnees_envoyees = item.donnees_envoyees;
                            let type = item.type;
  */}
                                    </div>
                                );
                            }
                            else {
                                return false;
                            }
                        })}
                    </div>
                </>
            );
        }
        else {
            return (
                <div className="vh-100 d-flex align-items-center" style={{ marginTop: -80 }}>
                    <Alert variant='success' className='text-center w-100'>
                        Vous retrouverez les modules ici.
                    </Alert>
                </div>
            );
        }
    }
}

export { Affichage };