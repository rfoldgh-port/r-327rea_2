import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import Card from '../js/components/card';
import List from '../js/components/list';
import ListContainer from '../js/components/list-container';
import Board from '../js/components/board';

const should = chai.should();

describe('Trello component', function() {
    it('Board renders the cards',  function() {


        const renderer = TestUtils.createRenderer();
        renderer.render(<Board/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('board');
        result.type.should.equal('div');
        result.props.children[0].type.should.equal(ListContainer);
        result.props.children[0].props.title.should.equal('to do');
     
    });
    
     it('ListContainer creates ListContainer component',  function() {


        const renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('list-container');
        result.type.should.equal('div');
        result.props.children[0].type.should.equal("h1");
        result.props.children[1].type.should.equal(List);
        //result.props.children[1].props.cards.should.equal(state.cards);
         
        //ASK MARIO ABOUT THIS!!!!!
    });
    
     it('List creates list component',  function() {


        const renderer = TestUtils.createRenderer();
        renderer.render(<List />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('list');
        result.type.should.equal('div');
       // result.props.children.children.type.should.equal(Card);
         //HOW DO YOU TEST THE TYPE OF 'CARD' IN CARDCOMPONENT???
//      result.props.children[0].props.title.should.equal('to do');
    });
    
         it('Card creates card component',  function(done) {


        const renderer = TestUtils.createRenderer();
        renderer.render(<Card />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('cards');
        result.type.should.equal('div');
        let cardChild = result.props.children;
       // console.log(cardChild);
        cardChild.type.should.equal('p');
        cardChild.props.className.should.equal('text');
//             console.log(cardChild);
        done();//we use callback
          
        //result.props.children[0].className.should.equal('text')
//        result.props.children[0].className.should.equal('text');
    
    });
});



//@juansnow It looks like your component is expecting a "text" prop to be passed in. Maybe that relates //to the error? Also, try using console.log(result) and console.log(result.props) to see if your result //content matches what you expect.


//describe('List component', function() {
//   
//});
//
//describe('Card component', function() {
//    it('Creates card component',  function() {
//
//
//        const renderer = TestUtils.createRenderer();
//        renderer.render(<Image url={url} description={description} />);
//        const result = renderer.getRenderOutput();
//        result.props.className.should.equal('gallery-image');
//
//        const img = result.props.children[0];
//        img.type.should.equal('img');
//        img.props.src.should.equal(url);
//        img.props.alt.should.equal(description);
//
//        const p = result.props.children[1];
//        p.type.should.equal('p');
//        p.props.children.should.equal(description);
//    });
//});

//Test components for ListContainer, List, Cards--Along with Board.js