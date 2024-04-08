import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server';
import SmallIcons from "../SmallIcons";
import CarteMembre from "./CarteMembre";


//faire logique bouton supprimer
const ListeClientM = ({liste_cartes_membres}) => {
    
    const liste = ({liste_cartes_membres}) => {
        if(liste_cartes_membres.length === 0){
            return <h2>Aucun client</h2>
        }
        return liste_cartes_membres.map((element) => (
            <div className="composantGrand">
                <div key={element.id} className="client">
                    <div className="infoClient">
                        <h4>{element.nom}{element.prenom}{element.adresse}</h4>
                    </div>
                    <button id="buttonCarteEM" className="buttonAction">Supprimer</button>
                </div>
            </div>
        ));
    };

    return (
        <section id='carte'>
            <div className="composantGrand">
                <div className="composantGrandCarteEM">
                    <div className="Top_Component_Grand">
                        <button id="buttonReturn" className="buttonAction">Retour</button>
                        <h2 className="component_title">Liste des clients</h2>
                        <hr></hr>
                    </div>
                    <button id="buttonCarteEM" className="buttonCarte Membre">Ajouter une carte</button>
                    <div className="energie">
                        {liste({liste_cartes_membres})}
                    </div>
                </div>
            </div>
        </section>
    );

};


document.addEventListener("click", function (event) {
    if (event.target.classList.contains("buttonAction")) {
        const buttonText = event.target.textContent;
        switch (buttonText) {
            case "Supprimer":
                console.log("Bouton supprimer cliqué");
                break;
            case "Retour":
                console.log("bouton retour cliqué");
                returnHome();
            default:
                console.log("Bouton inconnu cliqué" + buttonText);
                break;
        }
        event.preventDefault();
    }
});


function returnHome() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteMembre = ReactDOMServer.renderToString(<CarteMembre />);
    divGeneral.innerHTML = smallIcons + carteMembre;
    divGeneral.style.display = "block";
}


export default ListeClientM;