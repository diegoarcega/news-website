import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Pill({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}

Pill.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled.span`
  display: inline-flex;
  background-color: ${props => (props.isSelected ? props.theme.grey : '#fff')};
  padding: 10px 25px;
  border-radius: 20px;
  transition: background-color ease-in-out 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.grey};
  }
`
