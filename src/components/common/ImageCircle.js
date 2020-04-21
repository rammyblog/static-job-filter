import React from "react"
// import image from "./images/insure.svg"
export default function ImageCircle({ image }) {
  return (
    <div className="rounded-full h-16 w-16 flex items-center justify-center">
      <img src={image} alt="logo" />
    </div>
  )
}
