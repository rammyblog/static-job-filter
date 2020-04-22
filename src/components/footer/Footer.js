import React from "react"

export default function Footer() {
  return (
    <div className=" text-cyan-darker static bottom-0 left-0 text-center mx-auto ">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
        rel="noopener noreferrer"
        target="_blank"
        className="text-cyan-dark font-bold m-1"
      >
        Frontend Mentor
      </a>
      &
      <span className="text-cyan-darker m-1">
        Coded with{" "}
        <span className="text-red-700" aria-label="love" role="img">
          ❤️
        </span>{" "}
        by{" "}
      </span>
      <a
        href="https://github.com/rammyblog"
        rel="noopener noreferrer"
        target="_blank"
        className="text-cyan-dark font-bold ml-1 hover:font-bold"
      >
        Onasanya Babatunde
      </a>
      .
    </div>
  )
}
