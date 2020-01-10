import React from 'react';

export default function Phone({ manufacturer, model }) {
    return React.createElement(
        "div", {},
        [
            React.createElement("h3", {}, manufacturer),
            React.createElement("h3", {}, model)
        ]
    )
}