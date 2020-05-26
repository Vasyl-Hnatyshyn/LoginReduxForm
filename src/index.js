import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,bindActionCreators} from 'redux';
import {connect,Provider} from 'react-redux';


const initialState={
    firstName:'Petro',
    secondName:'Ivanov'
};


const actionChangeFirstName = 'change_first_name';
const actionChangeSecondName = 'change_second_name';




const changeFirstName= (newFirstName)=> {
    return {
        type: actionChangeFirstName,
        payload: newFirstName
    };
};

const changeSecondName=(newSecondName)=>{
return {
    type: actionChangeSecondName,
    payload: newSecondName

};

};


const rootReducer =( state = initialState, action)=>{

    switch (action.type) {
        case actionChangeFirstName:
            return {...state,firstName: action.payload}

        case actionChangeSecondName:
            return {...state,secondName: action.payload};

    }
    return state;
}



const store = createStore(rootReducer);

const mapStateToProps=(state)=> {

    return {
        firstName:  state.firstName,
        secondName: state.secondName,

    }



}

const mapDispatchToProps=(dispatch)=> {

    return {
        changeFirstName: bindActionCreators(changeFirstName,dispatch),
        changeSecondName:  bindActionCreators(changeSecondName,dispatch)


    }



}

const BlockMainComponent = connect(mapStateToProps,mapDispatchToProps)(App);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}
      >
    <BlockMainComponent />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
