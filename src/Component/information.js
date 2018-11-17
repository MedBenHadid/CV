import React, {
    Component
} from "react";
import '../App.css';
import Profile from './profile';
import base from '../base';
class Profiles extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        base.syncState(`users`, {
            context: this,
            state: 'users',
        });

    }


    render() {
        console.log(this.state.users);
        return (
             <center>
            <h1> Profiles </h1> {
                Object.keys(this.state.users).map(
                    key => < box1 key = {
                        key
                    }
                    name = {
                        this.state.users[key].Name
                    }
                    role = {
                        this.state.users[key].Role
                    }
                    />
                )
            } </center>
        );
    }
}

export default Profiles;