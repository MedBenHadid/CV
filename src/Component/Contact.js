import React, {Component} from "react";
import base from '../base';
import Box from './box';

class Contact extends React.Component {
    state = {
        contact: {}
    }
    componentDidMount() {
     base.syncState(`info/Contact`, {
         context: this,
         state: 'contact',
     });
    }
    render() {
        return (
<div>
              <div className="titre">&nbsp;&nbsp;Contact </div>
           
                <div className="val1">
                    {Object.keys(this.state.contact).map(
					key=><Box
					key={key}
					val1 = {this.state.contact[key]} />
                    )}
                 </div>
                 </div>
                );
    }
}

export default Contact;