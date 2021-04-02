import React from 'react';
import {useSelector} from "react-redux";

function Number(props) {

    const number = useSelector(state => state)
    return (
        <div className="big">
            {number}
        </div>
    );
}

export default Number;