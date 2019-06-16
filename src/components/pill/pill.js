import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

export default function Pill({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}

const Container = styled.span`
  display: inline-flex;
  background-color: ${props => (props.isSelected ? darken(0.1, props.theme.grey) : props.theme.grey)};
  padding: 10px 25px;
  border-radius: 20px;
  transition: background-color ease 0.7;

  &:hover {
    cursor: pointer;
    background-color: ${props => darken(0.1, props.theme.grey)};
  }
`
