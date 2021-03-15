import React from 'react';

function Buttons(props) {

    function plus() {
        props.setCounter(props.counter + 4);
    }
    function minus(){
        props.setCounter(props.counter - 2);
        if (props.counter - 2 <= 0 ) {
            reset();
        }
    }
    function reset(){
        props.setCounter(0);
    }


    return (
        <div className="buttons-rod">
            <button className="blue" onClick={plus}>Увеличить</button>
            <button className="orange" onClick={minus}>Уменьшить</button>
            <button className="grey" onClick={reset}>Сбросить</button>
        </div>
    );
}

export default Buttons;