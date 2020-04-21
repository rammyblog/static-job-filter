import React from "react"
import bgImgDesktop from "../common/images/bg-header-desktop.svg"
import bgImgMobile from "../common/images/bg-header-mobile.svg"

export default function Header() {
  return (
    <div className="bg-cyan-dark mb-8">
      <img
        src={bgImgDesktop}
        alt="header"
        className="hidden  sm:hidden lg:block md:block"
      />
      <img
        src={bgImgMobile}
        alt="header"
        className="lg:hidden md:hidden sm:block block "
      />
    </div>
  )
}
