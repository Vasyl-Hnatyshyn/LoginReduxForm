import React from 'react';
import './App.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeFirstName, changeSecondName}  from './store/actions';

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

class App extends React.Component {
    render() {

      const { firstName,secondName,changeFirstName,changeSecondName} = this.props;

        return (

            <div className="App">

                <input type="text"
                       placeholder= "First Name"
                       onChange={(e)=>{
                           changeFirstName(e.target.value)
                       }}
                />

                <input
                    type="text"
                    placeholder= "Second Name"

                    onChange={(e)=>{
                        changeSecondName(e.target.value)
                    }}
                />


                <div>
                    <div>
                        Your name : {firstName}
                    </div>
                    <div>
                        Your Second name : {secondName}
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
