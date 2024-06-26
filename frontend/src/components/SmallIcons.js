import React from "react";
import ReactDOMServer from 'react-dom/server'
import PropTypes from "prop-types";
import EtatCuvesGrand from "./cuve/EtatCuvesGrand";
import DirectionGrand from "./direction/DirectionGrand";
import IncidentsGrand from "./incidents/IncidentsGrand";
import ServicesGrand from "./services/ServicesGrand";
import HoraireGrand from "./horaire/HoraireGrand";
import Especes from "./paiement/Especes";
import CarteBancaire from "./paiement/CarteBancaire";
import ChoixPaiementCarteEnergie from "./paiement/ChoixPaiementCarteEnergie";
import EtatStockGrand from "./stocks/EtatStocksGrand";
import TransactionGrand from "./transaction/TransactionGrand";

let energies, horaires, incidents, transactions, produits;
await fetch('/stockEnergie/get')
    .then(response => response.json())
    .then(data => {
        energies = data;
    });

await fetch('/stockProduits/get')
    .then(response => response.json())
    .then(data => {
        produits = data;
    }
);

const stocks = produits.concat(energies);


await fetch('/horaires/get')
    .then(response => response.json())
    .then(data => {
        horaires = data;
    });

await fetch('/incidents/get')
    .then(response => response.json())
    .then(data => {
        incidents = data;
    });

await fetch('/transaction/get')
    .then(response => response.json())
    .then(data => {
        transactions = data;
    });



const SmallIcons = ({ iconClicked }) => {
    const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires', 'esp', 'cb', 'carteEnergie'];
    const componentsGrand = [<EtatCuvesGrand energies={energies}/>, <DirectionGrand />, <IncidentsGrand incidents={incidents}/>, <TransactionGrand transactions={transactions}/>, <EtatStockGrand stocks={stocks}/>, <ServicesGrand />, <HoraireGrand horaires={horaires}/>, <Especes />, <CarteBancaire />, <ChoixPaiementCarteEnergie />];

    const emojis = {
        'etat-cuves': '🛢️',
        'direction': '👩‍💼',
        'incidents': '⚠️',
        'transaction': '💸',
        'stocks': '📦',
        'services': '⚒️',
        'horaires': '🕐',
        'esp': '💵',
        'cb': '💳',
        'carteEnergie': '🔋'
    };

    let divs = [];

    components.forEach(component => {
        if (component !== iconClicked) {
            divs.push(<div className="smallIcon" key={component}>{emojis[component]}</div>);
        }
    });

    let isListener = false;

    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("smallIcon") && !isListener) {
            isListener = true;
            const buttonText = event.target.textContent;
            switch (buttonText) {
                default:
                    for (const key in emojis) {
                        if (emojis[key] === buttonText) {
                            divGeneral.innerHTML = ReactDOMServer.renderToString(<SmallIcons iconClicked={key} />);
                        }
                    }
            }
            event.preventDefault();
        }
    });


    return (
        <>
            <div className="smallIcons">
                {divs}
            </div>
            <div className="DivBlock">
                {(componentsGrand[components.indexOf(iconClicked)])}
            </div>
        </>
    );
};

SmallIcons.propTypes = {
    iconClicked: PropTypes.string.isRequired
};

export default SmallIcons;
