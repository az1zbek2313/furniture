const defaultState = {
    counter:0
}


export function CounterReducer(state = defaultState, actions) {
    switch(actions.type){
        case "UPDATE":
            return {...state, counter:actions.payload}
 
       default:
       return state;
}
}

export default CounterReducer;