import {actionChangeFirstName, actionChangeSecondName} from "../index";

const initialState={
    firstName:'Petro',
    secondName:'Ivanov'
};

 export const rootReducer =( state = initialState, action)=>{

    switch (action.type) {
        case actionChangeFirstName:
            return {...state,firstName: action.payload}

        case actionChangeSecondName:
            return {...state,secondName: action.payload};

    }
    return state;
}