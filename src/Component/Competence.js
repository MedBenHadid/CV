import React, {Component} from "react";
import base from '../base';
import Box1 from './box1';

class Competence extends React.Component {
    state = {
        competence: {}
    }
    componentDidMount() {
     base.syncState(`info/Competence`, {
         context: this,
         state: 'competence',
     });
    }
    render() {
        return (
<div>
              <div className="titre">&nbsp;&nbsp;Competence </div>
           
                <div className="val2">
                    {Object.keys(this.state.competence).map(
					key=><Box1
					key={key}
					val2 = {this.state.competence[key]} />
                    )}
                 </div>
                 </div>
                );
    }
}

export default Competence;