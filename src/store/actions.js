
import {actionChangeFirstName,actionChangeSecondName } from '../index'


export const changeFirstName= (newFirstName)=> {
    return {
        type: actionChangeFirstName,
        payload: newFirstName
    };
};

export const changeSecondName=(newSecondName)=>{
    return {
        type: actionChangeSecondName,
        payload: newSecondName

    };

};
