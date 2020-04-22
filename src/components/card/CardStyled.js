import styled from "styled-components"
import tw from "tailwind.macro"

export const CardStyled = styled.div`
  ${(props) =>
    props.featured === true
      ? tw`border-l-4 border-cyan-dark`
      : tw`border-0 border-blue-500`};
`
