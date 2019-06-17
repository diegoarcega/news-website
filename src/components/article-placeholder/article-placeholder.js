import React from 'react'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

export default function ArticlePlaceHolder({ ...rest }) {
  return (
    <Container {...rest}>
      <ContentLoader height={412} width={330} speed={1}>
        <rect x="0" y="0" rx="5" ry="5" width="330" height="200" />
        <rect x="0" y="210" rx="4" ry="4" width="330" height="40" />
        <rect x="0" y="260" rx="3" ry="3" width="150" height="10" />
        <rect x="0" y="285" rx="3" ry="3" width="330" height="10" />
        <rect x="0" y="300" rx="3" ry="3" width="330" height="10" />
        <rect x="0" y="315" rx="3" ry="3" width="330" height="10" />
        <rect x="0" y="330" rx="3" ry="3" width="330" height="10" />
      </ContentLoader>
    </Container>
  )
}

const Container = styled.article`
  height: 412px;
  width: 330px;
  max-width: 100%;
`

export function ImagePlaceHolder({ ...rest }) {
  return (
    <ContentLoader height={197} width={330} speed={1} {...rest}>
      <rect x="0" y="0" rx="5" ry="5" width="330" height="200" />
    </ContentLoader>
  )
}
