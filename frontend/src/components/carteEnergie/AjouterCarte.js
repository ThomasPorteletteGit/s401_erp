import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server'
import CarteEnergie from "./CarteEnergie";
import SmallIcons from "../SmallIcons";

//a faire logique bouton enregistrer
const AjouterCarte = ({liste_cartes_energies}) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');

    
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("buttonCarte") && event.target.classList.contains("Energie")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Enregistrer":
                    break;
                case "Annuler":
                    annuler();
                    break;
                case "Retour":
                    returnHome();
                    break;
                default:
                    break;
            }
            event.preventDefault();
        }
    });

    return (
        <section id='carte'>
            <div className="composantGrand">
                <div className="composantGrandCarteEM">
                    <div className="Top_Component_Grand">
                        <button id="buttonReturn" className="buttonCarte">Retour</button>
                        <h2 className="component_title">Ajouter une carte</h2>
                        <hr></hr>
                    </div>


                    <form>
                        <div className="infoClientCarte">
                            <h3>Nom :</h3>
                            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
                        </div>
                        <div className="infoClientCarte">
                            <h3>Prénom :</h3>
                            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                        </div>
                        <div className="infoClientCarte">
                            <h3>Adresse Mail:</h3>
                            <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
                        </div>

                        <div className="infoClientCarte">
                            <button id="buttonCarteEM" className="buttonCarte Energie" type="submit">Enregistrer</button>
                            <button id="buttonCarteEM" className="buttonCarte Energie" type="button">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};



function afficherClients(liste_cartes_energies) {
    const divGeneral = document.getElementsByClassName("composantGrand")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<ListeClient liste_cartes_energies={liste_cartes_energies}/>);
    divGeneral.style.display = "block";
}

function voirAvantage(liste_cartes_energies) {
    const divGeneral = document.getElementsByClassName("composantGrand")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AvantageCarte liste_cartes_energies={liste_cartes_energies} />);
    divGeneral.style.display = "block";
}

function ajouterCarte(liste_cartes_energies) {
    const divGeneral = document.getElementsByClassName("composantGrand")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AjouterCarte liste_cartes_energies={liste_cartes_energies}/>);
    divGeneral.style.display = "block";
}


function annuler() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<AjouterCarte />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}

function returnHome() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<CarteEnergie />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}


export default AjouterCarte;