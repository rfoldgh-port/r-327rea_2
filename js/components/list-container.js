var React = require('react');
var ReactDOM = require('react-dom');
import List from './list';
import NameForm from './name-form';

 class ListContainer extends React.Component {
       constructor(props) {
        super(props);
        this.state = {
            textInput: '' ,
            cards: []
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInput = this.onInput.bind(this);
    }
    
    onSubmit(event){
        this.setState({
            cards: this.state.cards.concat(this.state.textInput)//pushes to a new array rather than same array, creates a new array object.
        });
       console.log("submission has been made, the submission value is now" , this.state.cards);
        
    }
    
    onInput(event){
        this.setState({
            textInput: event.target.value //when input is entered textInput is logged as what is submitted to text input
        });
         console.log("input has been made, the input is now" , this.state.textInput);
    }
render(){

	return (
	<div className="list-container">
        <h1>{this.props.title}</h1>
		<List cards = {this.state.cards} />
        <NameForm onSubmit={this.onSubmit} onInput={this.onInput} />
	</div>
		);
}//end render


}//end List Container

export default ListContainer;
//Next make the Board component that will render three lists to view progress and finished state