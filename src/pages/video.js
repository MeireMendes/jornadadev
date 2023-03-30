import React from 'react'
import "./video.css"

function Video() {
  return (
    <div className="video">
        Eu sou um componente Video
        <video 
            className='video__player'
            src=''
        >
        </video>
    </div>
  )
}

export default Video