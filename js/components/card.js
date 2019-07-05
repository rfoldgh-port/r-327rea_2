var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {

    return (
            <div className="cards">
                <p className="text">{props.text}</p>
			</div>
    );
};

module.exports = Card;