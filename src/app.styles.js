import styled from 'styled-components'
import { animated } from 'react-spring'
import { Pill } from './components/pill'
import { config } from 'react-awesome-styled-grid'

export const AppContainer = styled.div`
  padding: 30px 0 30px 0;
`

export const Header = styled.header`
  padding-bottom: 20px;
`

export const StyledPill = styled(Pill)`
  margin-right: 5px;
  margin-bottom: 5px;

  ${props => config(props).media['xs']`
    padding: 5px 11px;
    font-size: 13px;
    border-right: 1px dashed #ececec;
    border-radius: 0;
  `}

  ${props => config(props).media['sm']`
    padding: 10px 25px;
    border-radius: 20px;
    border-right: 0;
    font-size: initial;
`}
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

export const OfflineMessage = styled(animated.div)`
  position: fixed;
  background-color: #ff5722;
  padding: 15px 25px;
  text-align: center;
  width: 100%;
`
