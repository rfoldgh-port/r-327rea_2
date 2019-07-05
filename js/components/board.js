var React = require('react');
var ReactDOM = require('react-dom');
import ListContainer from './list-container';

class Board extends React.Component {

      constructor(props) {
      super(props);
      this.state = {value: ''};
  }



render(){

    
	return (
	<div className="board">
        <ListContainer title = "to do" />
        <ListContainer  title = "progress"/>
        <ListContainer title="done"/>
	</div>
		);
}//end render
    
    
}

export default Board;

