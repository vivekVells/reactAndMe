const Pet = () => {
    return React.createElement("div", {}, [ 
        React.createElement("h1", {}, "Scooby"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Pomeranian"),
    ]);
}

const App = () => {
    return React.createElement(
        "div", {},
        React.createElement("h1", {}, "Adopt me"),
        React.createElement(Pet)
    );
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);