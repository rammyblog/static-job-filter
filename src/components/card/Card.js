import React from "react"
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
  const cardClasses = `flex transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-120 cursor-pointer
              flex-col bg-white mb-8 py-0 px-4 md:p-4 md:py-4 h-65 md:h-40 sm:h-65 lg:h-full lg:py-16 sm:py-0 sm:px-4 lg:py-4 lg:px-16 
        sm:flex-col sm:relative lg:flex-row shadow-lg`

  const featuredClasses = `border-l-4 border-cyan-dark ${cardClasses}`

  return (
    <>
      <div className={featured ? featuredClasses : cardClasses}>
        <div className="lg:w-3/4 flex flex-col sm:flex-col md:flex-row  lg:flex-row">
          <div className="mr-2 relative bottom-1-5 md:static lg:static">
            <ImageCircle image={logo} />
          </div>
          <div>
            <div className="inline-block">
              <span className="inline-block font-semibold text-cyan-dark mr-3">
                {company}
              </span>
              {New ? <Button primary={true} text={"NEW!"} /> : null}

              {featured ? <Button primary={false} text={"FEATURED!"} /> : null}
            </div>
            <div className="text-xl font-bold text-cyan-darker hover:text-cyan-dark">
              {position}
            </div>
            <div className="flex flex-row align-center">
              <DetailTag detail={postedAt} />{" "}
              <span className="mx-4"> &bull;</span>
              <DetailTag detail={contract} />
              <span className="mx-4"> &bull;</span>
              <DetailTag detail={location} />
            </div>
          </div>
        </div>
        <hr className="block my-2 divide-y divide-cyan-darkGray sm:block md:hidden lg:hidden" />
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
