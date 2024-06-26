import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server'
import SmallIcons from "./SmallIcons";
import reduire from '../assets/img/reduire.png';
import agrandir from '../assets/img/agrandir.png';

const ComponentsAnimation = () => {
    const [clickedComponent, setClickedComponent] = useState(null);
    let saveDiv;

    useEffect(() => {
        const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires', 'releve', "choixpaiement", 'esp', 'cb', 'carteEnergie'];

        function attachEventListeners() {
            const btnesp = document.querySelector('#esp');
            const btncb = document.querySelector('#cb');
            const btnce = document.querySelector('#carteEnergie');
            if (btnesp) {
                
                btnesp.addEventListener("click", handleClick(btnesp.id));
            }
            if (btncb) {
                
                btncb.addEventListener("click", handleClick(btncb.id));
            }
            if (btnce) {
                
                btnce.addEventListener("click", handleClick(btnce.id));
            }
            components.forEach((componentId) => {
                const component = document.getElementById(componentId);
                if (component) {
                    const img = component.querySelector('#imgAgrandir');
                    
                    if (img) {
                        console.log(component);
                        img.addEventListener("click", handleClick(componentId));
                    }
                }
            });
        }
        

        const handleClick = (componentId) => () => {
            setClickedComponent(componentId)
            const divGeneral = document.getElementsByClassName("dashboard-right")[0];
            saveDiv = divGeneral.innerHTML;
            components.forEach((compId) => {
                const comp = document.getElementById(compId);
                if (comp) {
                    comp.classList.add("disappear-animation");
                }
            });

            setTimeout(() => {
                divGeneral.innerHTML = ReactDOMServer.renderToString(<SmallIcons iconClicked={componentId} />);
                divGeneral.style.display = "block";

                components.forEach((compId) => {
                    const comp = document.getElementById(compId);
                    if (comp) {
                        comp.classList.remove("disappear-animation");
                        comp.style.display = compId === componentId ? "block" : "none";
                    }
                });
            }, 500);

        };


        const boutonHome = document.getElementById("homeButton")

        boutonHome.addEventListener("click", () => {
            const divGeneral = document.getElementsByClassName("dashboard-right")[0];
            if (saveDiv != null) {
                divGeneral.style.display = "flex";
                divGeneral.innerHTML = saveDiv;
                attachEventListeners();
                components.forEach((compId) => {
                    const comp = document.getElementById(compId);
                    if (comp) {
                        comp.classList.remove("disappear-animation");

                    }
                });
            }
        });

        attachEventListeners();

        const boutonf11 = document.getElementById("scaleButton");

        boutonf11.addEventListener("click", () => {
            if (!document.fullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen().catch(err => {
                        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                    });
                    boutonf11.src = reduire;
                } else {
                    console.error('Full screen mode is not supported by this browser.');
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    boutonf11.src = agrandir;
                }
            }
        });
    }, []);
};

export default ComponentsAnimation;
