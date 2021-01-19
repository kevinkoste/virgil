// core
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// styling
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'
import { Div } from '../styles/CustomGrid'

// media


export default function DashboardPage() {

  let mobileView = useDetectMobileView()

  return (
    <Div web={12} style={{backgroundColor:'#000', flexDirection:'column', alignItems:'center', minHeight:'100vh'}}>

      <HeaderContainer web={11} style={{flexDirection:'row', alignItems:'flex-end'}}>
        <Link to='/' style={{textDecoration: 'none'}}>
          <HeaderTitle>
            Virgil
          </HeaderTitle>
        </Link>
      </HeaderContainer>



      {/* little strop of black */}
      <Div style={{height:mobileView ? '0':'5vh',
        backgroundColor:'#FFF'}} />

      <FooterContainer web={11}>
        <Div web={6} direction='column'
          style={{justifyContent:'flex-end', alignItems:'flex-start'}}>              
          <FooterTitle>
            Virgil
          </FooterTitle>
          <BodyText style={{color:'#FFF'}}>
            2020 © Virgil Technologies
          </BodyText>
        </Div>
        <Div web={6} direction='column'
          style={{justifyContent:'flex-end', alignItems:'flex-end'}}>              
          <BodyText style={{color:'#FFF'}}>
            Terms of Service
          </BodyText>
          <BodyText style={{color:'#FFF'}}>
            Privacy Policy
          </BodyText>
        </Div>
      </FooterContainer>

    </Div>
  )
}


const HeaderContainer = styled(Div)`
  justify-content: flex-start;
  height: 15vh;
  ${media.md`
    height: 9vh;
    justify-content: center;
  `}
`
const HeaderTitle = styled.h1`
  font-family: 'romana';
  font-size: 60px;
  color: #FFF;
  font-weight: 400;
  ${media.md`
    font-size: 44px;
  `}
`

const FooterContainer = styled(Div)`
  height: 25vh;
  padding-bottom: 5vh;
  justify-content: space-between;
  border-top: solid #FFF;
  border-width: 1px;
  ${media.md`
    height: 20vh;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5vh;
  `}
`
const FooterTitle = styled(HeaderTitle)`
  margin-bottom: 10px;
`

const TitleText = styled.h2`
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

const BodyText = styled.h3`
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #000;
  word-wrap: break-word;
  letter-spacing: 0.5px;

  font-size: 18px;
  line-height: 24px;

  ${media.md`
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  `}
`

const Image = styled(Div)`
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`