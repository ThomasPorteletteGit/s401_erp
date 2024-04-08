import React, { useState } from "react";
import ReactDOMServer from 'react-dom/server';
import SmallIcons from "../SmallIcons";
import CarteMembre from "./CarteMembre";


//faire logique bouton supprimer
const ListeClientM = () => {
    const [clients, setClients] = useState([
        { id: 1, nom: "Truc", prenom: " Jean", adresse: " 1 rue de la paix" },
        { id: 2, nom: "Bidule", prenom: " Jean", adresse: " 2 rue de la paix" },
        { id: 3, nom: "Machin", prenom: " Jean", adresse: " 3 rue de la paix" },
        { id: 4, nom: "Chose", prenom: " Jean", adresse: " 4 rue de la paix" },
        { id: 5, nom: "Truc", prenom: " Gertrude", adresse: " 5 rue de la paix" },
        { id: 6, nom: "Bidule", prenom: " Gertrude", adresse: " 6 rue de la paix" },
        { id: 7, nom: "Machin", prenom: " Gertrude", adresse: " 7 rue de la paix" },
    ]);

    const liste = () => {
        return clients.map((element) => (
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
                    <div className="energie">
                        {liste()}
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