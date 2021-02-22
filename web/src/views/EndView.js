//core
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// styling
import { Grid } from '@material-ui/core/'
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'

// simple end text
export default function EndView () {

  let mobileView = useDetectMobileView()

  const history = useHistory()

  useEffect(() => {
    setTimeout(() => history.push('signup'), 1500)
  }, [history])

  if (mobileView) {
    return (
      <Grid container item xs={12} justify='center' alignItems='center'
        style={{height:'100%'}}>
        <Grid container item xs={12} justify='center' alignItems='center'
          direction='column' style={{height:'100%'}}>

            <QuestionText>
              The End
            </QuestionText>
  
          </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container item xs={12} justify='center' alignItems='center'
        style={{height:'100%'}}>
        <Grid container item xs={8} justify='center' alignItems='center'
          direction='column' style={{height:'100%'}}>

            <QuestionText>
              The End.
            </QuestionText>
  
          </Grid>
      </Grid>
    )
  }
}

const QuestionText = styled.h2`
  font-family: 'romana';
  font-size: 36px;
  color: #151515;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 30px;
  ${media.sm`
    font-size: 32px;
    margin-bottom: 20px;
    text-align: center;
  `}
`
