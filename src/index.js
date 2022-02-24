import './style.css';
import {homePageLoad} from './homePage';
import {menuPageLoad} from './menuPage';
import {contactPageLoad} from './contactPage';

const headline = document.createElement("div");
    headline.setAttribute("id", "headline")
    const headlineText = document.createTextNode("Muy Spicy");
    headline.appendChild(headlineText);
    document.getElementById('content').appendChild(headline);

    const toolbar = document.createElement("div");
    toolbar.setAttribute("id", "toolbar")
    document.getElementById('content').appendChild(toolbar);

        const home = document.createElement('div');
        home.setAttribute("id", "home");
        const homeText = document.createTextNode('Home');
        home.appendChild(homeText);
        document.getElementById('toolbar').appendChild(home);

        const menu = document.createElement('div');
        menu.setAttribute("id", "menu");
        const menuText = document.createTextNode('Menu');
        menu.appendChild(menuText);
        document.getElementById('toolbar').appendChild(menu);

        const contact = document.createElement('div');
        contact.setAttribute("id", "contact");
        const contactText = document.createTextNode('Contact');
        contact.appendChild(contactText);
        document.getElementById('toolbar').appendChild(contact);

homePageLoad();
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

home.addEventListener('click', () => {
    homePageLoad();
    mainChunk1.remove();
    homeButton.style.zIndex = "-1";
    menuButton.style.zIndex = "1";
    contactButton.style.zIndex = "1";
})

home.addEventListener('click', () => {
    mainChunk2.remove();
    homeButton.style.zIndex = "-1";
    menuButton.style.zIndex = "1";
    contactButton.style.zIndex = "1";
})

menu.addEventListener('click', () => {
    menuPageLoad();
    mainChunk.remove();
    menuButton.style.zIndex = "-1";
    homeButton.style.zIndex = "1";
    contactButton.style.zIndex = "1";
})

menu.addEventListener('click', () => {
    mainChunk2.remove();
    menuButton.style.zIndex = "-1";
    homeButton.style.zIndex = "1";
    contactButton.style.zIndex = "1";
})

contact.addEventListener('click', () => {
    contactPageLoad();
    mainChunk.remove();
    contactButton.style.zIndex = "-1";
    homeButton.style.zIndex = "1";
    menuButton.style.zIndex = "11";
})

contact.addEventListener('click', () => {
    mainChunk1.remove(); 
    contactButton.style.zIndex = "-1";
    homeButton.style.zIndex = "1";
    menuButton.style.zIndex = "1";
})












