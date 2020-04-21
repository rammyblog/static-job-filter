import React from "react"
import { ButtonStyle } from "./ButtonStyled"
function Button({ primary, text }) {
  return <ButtonStyle primary={primary}>{text}</ButtonStyle>
}

export default Button
