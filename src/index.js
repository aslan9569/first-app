import ReactDOM from 'react-dom';
import App from "./App";
import "./styles.css"
import {Provider} from "react-redux";
import {createStore} from "redux";

const reducer = (state = 0, action) => {
    if (action.type === 'plus') {
        return state + 2;
    }
    if (action.type === 'minus') {
        if (state >= 3) {
            return state - 3;
        } else {return 0}
    }
    if (action.type === 'reset') {
        return state === 0;
    }

    return state;
}


const store = createStore(reducer);




ReactDOM.render(
<>
    <Provider store={store}>
    <App />
    </Provider>
</>,
  document.getElementById('root')
);



