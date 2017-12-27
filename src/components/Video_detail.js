import React from 'react';

const VideoDetail = ({video}) => {

	if (!video) {
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8 container">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-reposonsive-item" src={url}></iframe>
			</div>

			<div className="details jumbotron">
			<div className="video-title">{video.snippet.title}</div>
			<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};


export default VideoDetail;