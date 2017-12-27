all components are silent apart from when explicitly stated

###1. functional component
    - dumb component 
    - just return jsx
    - is not aware of surroundngs all state
    - cannot communicate with other components

###2. class component
     - internal record keeping. Ex. an input. The input needs ability to recognise what the user has typed in and relay this to other components.
    - every class based component MUST have a render method

This is a functional component: 

    const SearchBar = () => { 
        return <input /> //self closing tag - JSX
    };

This is a class component:

    class SearchBar extends Component {  
        render() {
            return <input />;
        }
    }

start with a functional component and change to class when you need more functionality 


    onInputChange(eventobject) { //event handler - on or handle / name of elemennt your watching / name of event itself
//event is the argument - event handlers are aways called with event objcts
//we use this to get value of input
    }


state - a JS object used to react and define user events
each class based component has it's own state object 
all events force C-components to re-render

we initialize the state by defining the constructor method and defining state as this.state

DIFFERENCE BETWEEN CREATING AND UPDATING STATE

controlled field - form element whose value is set by the state


Youtube API
Downwards data flow 
only the parent component to be responsible for collecting data.

MAP
map is a property of an array
if you pass map a function - it will be called with each property in the array

array of components
can render an array of arrays

why use react?
how lists are rendered

handling null props - with a ternary operator.