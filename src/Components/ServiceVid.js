import "./ServiceVidStyle.css"
import video from "../Videos/video.mp4"

import React from 'react'

const ServiceVid = () => {
  return (
    <div className="my-5">
        <h1 className="mt-5 mb-3 fw-bolder text-center">Entertain Yourself</h1>
        <video autoPlay>
            <source src={video} type="video/mp4"/>
        </video>
    </div>
  )
}

export default ServiceVid