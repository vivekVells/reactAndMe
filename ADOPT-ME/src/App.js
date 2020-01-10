import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet.js';

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt me"),
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
        })
    );
};

render(React.createElement(App), document.getElementById("root"));
