var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');


var List = function(props) {
  
	var cardComponent;
	
			if (props.cards){
			 cardComponent = props.cards.map(function(item,index){
				return (
					<Card text = {item} key={index} />
					
				);
			
			 });//end for
			}
	
	return (
	<div className="list">
		{cardComponent}
	</div>
		);

}; // end List




export default List;



//Next make the Board component that will render three lists to view progress and finished state

