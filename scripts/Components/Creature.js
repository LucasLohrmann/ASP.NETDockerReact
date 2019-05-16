import React from 'react';

export default class Creature extends React.Component {
    constructor(props) {
        super(props);
   }
    render() {
         return (
              <div className="creatureRow"> 
                    <div className="creatureRowColumn">
                         <label>
                              {this.props.data.race}
                         </label>
                   </div>
                   <div className="creatureRowColumn">
                         <label>
                              {this.props.data.name}
                         </label>
                   </div>
                   <div className="creatureRowColumn">
                         <label>
                              {this.props.data.hability}
                         </label>
                   </div>
                   <div className="creatureRowColumn">
                         <label>
                              {this.props.data.weekness}
                         </label>
                    </div>
              </div>
         );
    }
}