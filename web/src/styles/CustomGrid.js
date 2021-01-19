import styled from 'styled-components'
import media from '../styles/media'
// import { keyframes } from 'styled-components'

export const GridMap = {
  1: '8.33%',
  2: '16.66%',
  3: '25%',
  4: '33.33%',
  5: '41.66%',
  6: '50%',
  7: '58.33%',
  8: '66.66%',
  9: '75%',
  10: '83.33%',
  11: '91.66%',
  12: '100%'
}

export const Div = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction) ? props.direction : 'row' };
  width: ${props => (props.web) ? GridMap[props.web] : (props.mobile) ? GridMap[props.mobile] : 'unset' };
  ${media.md`
    flex-direction: column;
    width: ${props => (props.mobile) ? GridMap[props.mobile] : (props.web) ? GridMap[props.web] : 'unset' };
  `}
`