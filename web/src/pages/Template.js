// core
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// styling
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import media from '../styles/media'
import AOS from 'aos'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'
import { Div } from '../styles/CustomGrid'


export default function HomePage() {

  let mobileView = useDetectMobileView()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Div web={12} style={{flexDirection:'column', alignItems:'center'}}>

        <HeaderContainer web={11} style={{flexDirection:'row', alignItems:'flex-end'}}>
          <Link to='/' style={{textDecoration: 'none'}}>
            <HeaderTitle>
              Virgil
            </HeaderTitle>
          </Link>
        </HeaderContainer>

        {/* insert content here!! */}

        <SampleContent />

        <FooterContainer web={11}>
          <Div web={6} direction='column'
            style={{justifyContent:'flex-end', alignItems:'flex-start'}}>              
            <FooterTitle>
              Virgil
            </FooterTitle>
            <BodyText>
              2020 © Virgil Technologies
            </BodyText>
          </Div>
          <Div web={6} direction='column'
            style={{justifyContent:'flex-end', alignItems:'flex-end'}}>              
            <BodyText>
              Terms of Service
            </BodyText>
            <BodyText>
              Privacy Policy
            </BodyText>
          </Div>
        </FooterContainer>

    </Div>
  )
}


const SampleContent = () => {

  let mobileView = useDetectMobileView()

  return (
    <Div web={11} mobile={12}
      data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000"
      style={{height:(mobileView) ? '80vh' : '100vh',
      alignItems:(mobileView) ? 'center' : '',
      justifyContent:(mobileView) ? 'center' : '',
      flexDirection:(mobileView) ? 'column-reverse' : 'row-reverse'}}>

      <Div web={6} mobile={11} style={{flexDirection:'column',
        justifyContent:'center', alignItems: 'center'}}>
        <Div web={10} mobile={12} style={{flexDirection:'column', justifyContent:'center'}}>
          <TitleText>
            Tailored To You
          </TitleText>
          <BodyText>
            Credit cards don’t use your data to improve your expererience - they sell it for profit. 
            We work with you to build a preferences profile that improves the spending and reward experience. 
            We’re working for you, not the other way around
          </BodyText>
        </Div>
      </Div>

      <CardSpinner />

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
  color: #151515;
  font-weight: 400;
  ${media.md`
    font-size: 44px;
  `}
`

const FooterContainer = styled(Div)`
  height: 25vh;
  padding-bottom: 5vh;
  justify-content: space-between;
  border-top: solid #151515;
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