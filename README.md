# reactAndMe

- emmet plugin - write html codes faster by using simple string syntax abbreviations (https://docs.emmet.io/)
- react dom & react native both share same react package
- react package - small package (2KB) - used for how to interact with react
- react dom - large package - that uses react package and renders them into the browser
- react native - that uses react package and load them into android and ios app 

composability model with React - components inside components inside components .... 

### Commands Insights:
- React.render(React.createElement(<func>), document.getElementById(<elementID>)) 
    - e.g -> 
        - code:
            - `<div id="root">content inside div element</div>`
            -  ReactDOM.render("override div content", document.getElementById("root"));
        - when this gets executed in browser: the `content inside div element` will be overriden and the page displays as `override div content`
            - ReactDOM.render just overwrites anything inside the element identifier  
- npm
    - npm init -y: to view just initialize the npm package manager to the project with default args
    - npm install or npm i:
        - npm install -D <package_name>: to install dependencies only in development mode. these dependencies will not be available in production.

### Packages
- Prettier - format project consistently. standardizes the format usage. 
    - shortcut: in vscode -> Shift + Option + F
    - under "scripts":
        - "format": "prettier 'src/**/*/.{js, html}' --write"
            - --write writes the format prettiered code to all unformatted code of .js or .html.

### Questions
- prettier vs eslint: 
    - Prettier takes care of your code formatting, ESLint takes care of your code style (syntax checkings & code quality).
    - example:
        - prettier: Formatting rules: eg: max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style...
        - eslint: Code-quality rules: eg no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors...
- package.json vs package-lock.json:
    - The package.json is used for more dependencies - like defining project properties, description, author & license information, scripts, etc. The package-lock.json is solely used to lock dependencies to a specific version number.
    - `npm run ci` will be command to install package dependencies from package-lock.json file. 
    - `npm install` will install all latest package dependencies from package.json file.