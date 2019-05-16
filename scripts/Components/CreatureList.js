import React from 'react';
import CreatureComponent from '../Components/Creature'

export default class CreatureList extends React.Component {
    constructor(props) {
        super(props);
   }
    render() {
         return (
             <div className="appContainer">
                 <div className="header">
                     <div className="headerColumn">RACE</div>
                     <div className="headerColumn">NAME</div>
                     <div className="headerColumn">HABILITY</div>
                     <div className="headerColumn">WEEKNESS</div>
                 </div>
                 {
                  this.props.data.map((creature, i) => {
                      return(
                    <CreatureComponent key={i} data={creature}/>
                      );
                  })
                 }
            </div>
         );
    }
}