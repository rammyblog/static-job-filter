import React, { useContext } from "react"
// import FilterTags from "../filter/FilterTag"
// import InputBox from "../filter/InputBox"
import { jobContext } from "../../context/JobContext"

export default function Tags({ text }) {
  // const [show, setShow] = useState(false)

  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  const { addTags } = useContext(jobContext)

  const handleAddition = (text) => {
    addTags(text)
  }

  return (
    <span
      onClick={() => handleAddition(text)}
      className="rounded-sm bg-cyan-grayBg m-2 cursor-pointer inline-block w-auto  text-cyan-dark font-bold text-center py-1 px-2"
    >
      {text}
    </span>
  )
}
