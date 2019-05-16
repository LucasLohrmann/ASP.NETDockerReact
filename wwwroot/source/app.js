import React from 'react';
import ReactDOM from 'react-dom';
import CreatureService from '../../scripts/Services/CreatureService';
import CreatureList from '../../scripts/Components/CreatureList';

class App extends React.Component {
     render() {
          var creatures = CreatureService.getCreatureList();
          return (
                <CreatureList data={creatures}/>
          );
     }
}

ReactDOM.render(
     <App />,
     document.getElementById('container')
);