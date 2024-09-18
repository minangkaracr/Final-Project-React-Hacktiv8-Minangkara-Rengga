import React from 'react';
import ReactPlayer from 'react-player';
import HeaderTitle from '../molecules/HeaderTitle';

const VideoTrailer = (id) => {
    const value = id.id.dataVideo
    // console.log(value)
  return (
    <>
        <HeaderTitle title="Trailer"/>
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${value}`}
            width="100%"
            playing={true}
        />
    </>
  );
};

export default VideoTrailer;