import React from 'react';

function Buttons(props) {
    return (
        <div className="buttons-rod">
            <button className="blue">Увеличить</button>
            <button className="orange">Уменьшить</button>
            <button className="grey">Сбросить</button>
        </div>
    );
}

export default Buttons;