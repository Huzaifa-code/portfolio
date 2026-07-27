// YouTubeEmbed.js
import React from 'react';

const YouTubeEmbed = ({ url }) => {
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(url);

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  return (
    <div className="youtube-embed my-11 flex justify-center items-center">
      <iframe
        // width="560"
        // height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
        className='rounded-lg h-[250px] w-[350px] md:h-[400px] md:w-[650px]'
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
