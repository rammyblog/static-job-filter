import React, { useState } from "react"
import ImageCircle from "../common/ImageCircle"
import Button from "../common/Button"
import Tags from "../common/Tags"
import DetailTag from "../common/DetailTag"

export default function Card(props) {
  const {
    company,
    logo,
    new: New,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.details
  return (
    <>
      <div className="flex flex-col bg-white mb-8 flex-shrink py-0 px-4 h-64 sm:h-64 lg:h-auto lg:py-16 sm:py-0 sm:px-4 lg:py-4  lg:px-16 sm:flex-col sm:relative lg:flex-row shadow-lg">
        <div className="lg:w-3/4 flex flex-col sm:flex-col md:flex-row  lg:flex-row">
          <div className="mr-2 relative bottom-1-5 md:static lg:static">
            <ImageCircle image={logo} />
          </div>
          <div>
            <div className="inline-block">
              <span className="inline-block font-semibold text-cyan-dark mr-2">
                {company}
              </span>
              {New ? <Button primary={true} text={"NEW!"} /> : null}

              {featured ? <Button primary={false} text={"FEATURED!"} /> : null}
            </div>
            <div className="text-xl font-bold text-cyan-darker">{position}</div>
            <div className="flex flex-row align-center">
              <DetailTag detail={postedAt} />{" "}
              <span className="mx-4"> &bull;</span>
              <DetailTag detail={contract} />
              <span className="mx-4"> &bull;</span>
              <DetailTag detail={location} />
            </div>
          </div>
        </div>
        <div className="flex-wrap -mx-4 lg:w-1/3 flex flex-shrink lg:flex-row h-8">
          <Tags text={role} />
          <Tags text={level} />

          {!languages
            ? null
            : languages.map((language, id) => (
                <Tags text={language} key={id} />
              ))}

          {!tools
            ? null
            : tools.map((tool, id) => <Tags text={tool} key={id} />)}
        </div>
      </div>
    </>
  )
}
