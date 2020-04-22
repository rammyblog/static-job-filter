import styled from "styled-components"
import tw from "tailwind.macro"

export const ButtonStyle = styled.button`
  ${tw`py-1 px-2 mr-2 text-sm font-semibold text-white text-center rounded-full`};
  ${(props) => (props.primary ? tw`bg-cyan-dark` : tw`bg-cyan-darker`)};
`
