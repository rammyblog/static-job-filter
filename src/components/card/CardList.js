import React, { useContext } from "react"
import { jobContext } from "../../context/JobContext"
import Card from "./Card"

export default function CardList() {
  const { jobsListing } = useContext(jobContext)

  return (
    <>
      {jobsListing
        ? jobsListing.map((jobDetail, id) => (
            <Card key={id} details={jobDetail} />
          ))
        : null}
    </>
  )
}
