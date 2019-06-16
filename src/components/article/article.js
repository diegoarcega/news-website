import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

export default function Article({ title, img, content, author }) {
  return (
    <Container>
      <Image src={img} loading="lazy" />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Content>{content}</Content>
    </Container>
  )
}

const Container = styled.article`
  padding: 10px 0 10px 0;
  transition: background-color ease 0.7;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: ${props => lighten(0.02, props.theme.grey)};
  }
`
const Title = styled.h1`
  padding-top: 13px;
`
const Image = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 4px;
`
const Author = styled.p`
  padding-top: 10px;
`
const Content = styled.p`
  padding-top: 10px;
`
