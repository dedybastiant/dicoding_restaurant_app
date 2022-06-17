import "regenerator-runtime"; /* for async await transpile */
// import image from "../public/images/heros/food.png";
import "../styles/main.css";
import "../styles/appbar.css";
import "../styles/appbar.css";
import "../styles/appbar.css";
import "../styles/appbar.css";
import "./component/appbar.js";
import "./component/hero.js";
import "./component/favouritelist";
import "./component/restaurantlist";
import "./component/about";

const menuButtonElement = document.querySelector(".navbar--links--button");
const drawerElement = document.querySelector(".navbar__links--list");
const mainElement = document.querySelector("main");
const heroElement = document.querySelector(".hero");

menuButtonElement.addEventListener('click', (event) => {
    drawerElement.classList.toggle("open");
    event.stopPropagation;
})

mainElement.addEventListener("click", (event) => {
    drawerElement.classList.remove("open");
    event.stopPropagation;
});

heroElement.addEventListener("click", (event) => {
    drawerElement.classList.remove("open");
    event.stopPropagation;
});