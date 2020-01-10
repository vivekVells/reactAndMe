import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet.js';
import Phone from './Phone.js';

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt me"),
        React.createElement("h2", {}, "Pet Names"),
        React.createElement(Pet, {
            name: "Brownie",
            animal: "Dog",
            breed: "Pomeranian"
        }),
        React.createElement(Pet, { name: "Tom", animal: "Cat", breed: "Mixed" }),
        React.createElement(Pet, {
            name: "Jerry",
            animal: "Mouse",
            breed: "Rodent"
        }),
        React.createElement("h2", {}, "Phones"),
        React.createElement(Phone, {
            manufacturer: "Samsung",
            model: "Note 9"
        }),
        React.createElement(Phone, {
            manufacturer: "Oneplus",
            model: "7T"
        }),
        React.createElement(Phone, {
            manufacturer: "Xiaomi",
            model: "Mi5"
        })
    );
};

render(React.createElement(App), document.getElementById("root"));
