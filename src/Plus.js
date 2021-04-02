import React from 'react';
import {useDispatch} from "react-redux";

function Plus(props) {

    const dispatch = useDispatch();
    const plus = () => {
        dispatch({
            type: 'plus'
        })
    }



    return (
        <div>
            <button className="blue" onClick={plus}>Увеличить</button>
        </div>
    );
}

export default Plus;