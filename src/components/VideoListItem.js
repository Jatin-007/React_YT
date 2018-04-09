import React from 'react';

const VideoListItem = ({video})=> {
    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className = "list-group-item card">
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        <p>{video.snippet.title}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;