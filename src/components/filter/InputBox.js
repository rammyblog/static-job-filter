import React, { useContext } from "react"
import FilterTag from "./FilterTag"
import { jobContext } from "../../context/JobContext"

export default function InputBox() {
  const { tags, removeTags } = useContext(jobContext)

  return (
    <>
      {tags.length ? (
        <div className="bg-white rounded-sm flex mb-8 relative bottom-3 p-4">
          {tags.map((tag, id) => (
            <FilterTag key={id} text={tag} removeTag={removeTags} />
          ))}
        </div>
      ) : null}
    </>
  )
}
