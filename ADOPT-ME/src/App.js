const Pet = (props) => {
    return React.createElement("div", {}, [ 
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
}

const App = () => {
    return React.createElement(
        "div", {},
        React.createElement("h1", {}, "Adopt me"),
        React.createElement(Pet, {name: "Brownie", animal: "Dog", breed: "Pomeranian"}),
        React.createElement(Pet, {name: "Tom", animal: "Cat", breed: "Mixed"}),
        React.createElement(Pet, {name: "Jerry", animal: "Mouse", breed: "Rodent"})
    );
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);