var Person = require('./person');
var React = require('react');
var ReactDOM = require('react-dom');

Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                    job="Male model" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
};

module.exports = PersonList;