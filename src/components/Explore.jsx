import React from 'react'
import { Title } from "../assets/ui";
import { Images } from '../assets/assets';


const Explore = () => {
  return (
    <div className='mb-(--html-spacing) section-padding'>
        <Title text="explore yamaha"/>
        <div className="wrapper mt-5">
            <div className="explore-card bg-black/70 max-w-80 rounded-xl border-2 border-primary overflow-hidden">
                <div className="imagePart overflow-hidden hover:scale-105 transition duration-600">
                    <img src={Images.category1} alt="" />
                </div>
                <div className="textPart p-4">
    234
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore