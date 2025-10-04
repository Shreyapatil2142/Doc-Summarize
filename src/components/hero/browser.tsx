import React from 'react'
import imgArtwork from "@/assets/Browser.png";
const Browser = () => {
  return (
    <div className='relative bottom-36 hidden md:block lg:block [350px] md:w-[500px] md:h-[350px] '>
      <img src={imgArtwork} alt="" className="z-100" />
    </div>
  )
}

export default Browser
