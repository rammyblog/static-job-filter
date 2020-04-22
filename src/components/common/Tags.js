import React, { useContext } from "react"
import { jobContext } from "../../context/JobContext"

export default function Tags({ text }) {
  const { addTags } = useContext(jobContext)

  const handleAddition = (text) => {
    addTags(text)
  }

  return (
    <span
      onClick={() => handleAddition(text)}
      className="rounded-sm hover:text-white hover:bg-cyan-dark bg-cyan-grayBg m-2 cursor-pointer inline-block w-auto  text-cyan-dark font-bold text-center py-1 px-2"
    >
      {text}
    </span>
  )
}
