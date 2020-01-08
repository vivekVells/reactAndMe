const Pet = () => {
    return React.createElement("div", {}, [ 
        React.createElement("h2", {}, "Brownie"),
        React.createElement("h2", {}, "Scooby"),
        React.createElement("h2", {}, "Tucker"),
    ]);
}

const App = () => {
    return React.createElement(
        "div", {},
        React.createElement("h1", {}, "Adopt me"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
    );
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);