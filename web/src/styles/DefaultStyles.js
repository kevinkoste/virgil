import styled from 'styled-components'
import media from './media'
import { Div } from './CustomGrid'

export const TitleText = styled.h2`
  font-family: 'romana';
  font-size: 48px;
  color: #000;
  font-weight: 400;
  text-transform: capitalize;
  word-wrap: break-word;
  margin-bottom: 20px;
  ${media.md`
    font-size: 32px;
    text-align: center;
  `}
`

export const BodyText = styled.h3`
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #000;
  word-wrap: break-word;
  letter-spacing: 0.5px;

  font-size: 18px;
  line-height: 24px;

  ${media.md`
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  `}
`
export const WhiteTitleText = styled(TitleText)`
  color: #FFFFFF;
`
export const WhiteBodyText = styled(BodyText)`
  color: #FFFFFF;
`
export const Image = styled(Div)`
  background-image: none;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
`

export const HeaderContainer = styled(Div)`
  justify-content: flex-start;
  height: 15vh;
  ${media.md`
    height: 80px;
    justify-content: center;
  `}
`
export const HeaderTitle = styled.h1`
  font-family: 'romana';
  font-size: 60px;
  color: #FFF;
  font-weight: 400;
  ${media.md`
    color: #000;
    font-size: 44px;
  `}
`

export const FooterContainer = styled(Div)`
  height: 25vh;
  padding-bottom: 5vh;
  justify-content: space-between;
  border-top: 1px solid #FFF;
  ${media.md`
    height: 150px;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 30px;
  `}
`
export const FooterTitle = styled(HeaderTitle)`
  margin-bottom: 10px;
  ${media.md`
    color: #FFF;
  `}
`