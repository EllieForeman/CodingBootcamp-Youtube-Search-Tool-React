import React, { Component }  from 'react'; //libraries are name-spaced so no need to specify the file route
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Search_bar';
import VideoList from './components/Video_list';
import Title from './components/Title'
import VideoDetail from './components/Video_detail';
import { compose } from 'redux';
import _ from 'lodash';
const API_KEY = 'AIzaSyAQOyL26qwkStq26-uPnQeatqYibrO9_oE'
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
	this.videoSearch('rock climbing');
}					
			
	videoSearch(term) {
		YTSearch ({key:API_KEY, term: term}, (videos) => { //takes some time to complete network request
			this.setState ({ 
				videos:videos,
				selectedVideo: videos [0]
			});		//only need one string because key and varible have same name. object with a key of videos and a term - videos		});
		});

	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); //function passed to debounce - takes the inner function and returns a new function that can only be called once every 300 miliseconds
		return ( 
			<div> 
				<Title />
				<SearchBar onSearchTermChange={videoSearch}/> 
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
				 	videos={this.state.videos} /> 
			</div>
		); 								//passign data using props
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
