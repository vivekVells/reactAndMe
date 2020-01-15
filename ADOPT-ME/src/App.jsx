import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
// import Pet from './Pet';

const App = () => {
    // return React.createElement(
    //     "div",
    //     {},
    //     React.createElement("h1", {}, "Adopt me"),
    //     React.createElement("h2", {}, "Pet Names"),
    //     React.createElement(Pet, {
    //         name: "Brownie",
    //         animal: "Dog",
    //         breed: "Pomeranian"
    //     }),
    //     React.createElement(Pet, { name: "Tom", animal: "Cat", breed: "Mixed" }),
    //     React.createElement(Pet, {
    //         name: "Jerry",
    //         animal: "Mouse",
    //         breed: "Rodent"
    //     }),

    // paranthesis is used to make javascript understand that consider everything inside the parathesis as one line.
    return (
        <div>
            <h1>Adopt Me</h1>
            {/* <h2>Pet Names</h2>
            <Pet name="Brownie" animal="Dog" breed="Pomerian" />
            <Pet name="Jerry" animal="Mouse" breed="Rodent" /> */}
            <h2>Search Location</h2>
            <SearchParams />

        </div>
    )
};

render(<App />, document.getElementById("root"));
