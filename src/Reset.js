import React from 'react';
import {useDispatch} from "react-redux";

function Reset(props) {

    const dispatch = useDispatch();

    const reset = () => {
        dispatch({
            type: 'reset'
        })
    }



    return (
        <div>
            <button className="grey" onClick={reset} >Сбросить</button>
        </div>
    );
}

export default Reset;