import React, { Component } from 'react';

											// const SearchBar = () => { //defining a constant '= () => {' is the same as declaring a function, apart from when using 'this.'
											// 	return <input /> //self closing tag - JSX
											// };

class SearchBar extends Component { 		//declares class with name SearchBar
											//define a new class called search bar and give it access to all functionality that React.component has 
	
	constructor(props) { 					//all JS classes have a function called constructor - this is how we initialize state
		super(props);						//calls parent method with 'super' - this is component 
		this.state = { term: ''}; 			//ONLY IN CONSTRUCTOR FUNCTION DO WE CHANGE STATE LIKE THIS
	}										//term is short for search-term = what the user inputs into box
	
	
	render() {
		return (
											//create an input element and pass it a prop 'On change' with a value of this.onInput change
			<div className="search-bar">
			<input 
			placeholder="search here..."
			value={this.state.term}    	//this turns form element into a controlled component
			onChange={event => this.onInputChange(event.target.value)} /> 
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}
											//onChange is a react defined property
export default SearchBar;