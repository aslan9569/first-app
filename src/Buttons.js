import React from 'react';
import Plus from "./Plus";
import Minus from "./Minus";
import Reset from "./Reset";

function Buttons(props) {

    return (
        <div className="buttons-rod">
            <Plus />
            <Minus />
            <Reset />
        </div>
    );
}

export default Buttons;