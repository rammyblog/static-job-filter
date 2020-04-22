import React from "react"
// import image from "./images/insure.svg"
export default function ImageCircle({ image }) {
  return (
    <div className="rounded-full h-12 sm:h-12 md:h-16 w-12 sm:w-12 md:w-16 lg:h-16  flex items-center justify-center">
      <img src={image} alt="logo" />
    </div>
  )
}
