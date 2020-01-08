# reactAndMe

- emmet plugin - write html codes faster by using simple string syntax abbreviations (https://docs.emmet.io/)
- react dom & react native both share same react package
- react package - small package (2KB) - used for how to interact with react
- react dom - large package - that uses react package and renders them into the browser
- react native - that uses react package and load them into android and ios app 

composability model with React - components inside components inside components .... 

### Commands Info:
- React.render(React.createElement(<func>), document.getElementById(<elementID>)) 
    - e.g -> 
        - code:
            - `<div id="root">content inside div element</div>`
            -  ReactDOM.render("override div content", document.getElementById("root"));
        - when this gets executed in browser: the `content inside div element` will be overriden and the page displays as `override div content`
            - ReactDOM.render just overwrites anything inside the element identifier  