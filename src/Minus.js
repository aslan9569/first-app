import React from 'react';
import {useDispatch} from "react-redux";

function Minus(props) {

    const dispatch = useDispatch();

    const minus = () => {
        dispatch({
            type: 'minus'
        })
    }



    return (
        <div>
            <button className="orange" onClick={minus} >Уменьшить</button>
        </div>
    );
}

export default Minus;