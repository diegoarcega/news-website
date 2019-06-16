import styled from 'styled-components'
import { animated } from 'react-spring'
import { Pill } from './components/pill'

export const AppContainer = styled.div`
  padding: 30px 0 30px 0;
`

export const Header = styled.header`
  padding-bottom: 20px;
`

export const StyledPill = styled(Pill)`
  margin-right: 5px;
  margin-bottom: 5px;
`

export const AllCategories = styled.span`
  color: ${props => props.theme.secondary};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const TopBar = styled(animated.div)`
  height: 10px;
  width: 100%;
`
