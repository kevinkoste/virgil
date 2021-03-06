//core
import React from 'react'
import { useHistory } from 'react-router-dom'

// styling
import { Grid } from '@material-ui/core/'
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'

// data
import surveyData from '../data/survey-data.json'

// takes questionData, resultsData, and handleSubmitQuestion in props, renders appropriate form
export default function StartView (props) {

  let mobileView = useDetectMobileView()

  const viewData = surveyData.find(item => item.id === "start")

  if (mobileView) {
    return (
      <Grid container item xs={12} justify='center' alignItems='center'
        style={{height:'100%'}}>
        <Grid container item xs={12} justify='center' alignItems='center'
          direction='column' style={{height:'100%'}}>
  
            <StartText
              viewData={viewData}
              handleSurveyStart={props.handleSurveyStart}
              />
  
          </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container item xs={12} justify='center' alignItems='center'
        style={{height:'100%'}}>
        <Grid container item xs={8} justify='center' alignItems='center'
          direction='column' style={{height:'100%'}}>
  
            <StartText
              viewData={viewData}
              handleSurveyStart={props.handleSurveyStart}
              />
  
          </Grid>
      </Grid>
    )
  }
}


// needs questionData, resultsData, and handleQuestionSubmit in props
function StartText (props) {

  const history = useHistory()

  const handleSubmit = () => {
    props.handleSurveyStart()
    history.push(props.viewData.nextID)
  }

  return (
    <ViewContainer>

      <Grid container direction='column' justify='center' alignItems='center' style={{flex: 1}}>
        <QuestionText>{props.viewData.question}</QuestionText>
        <BodyText>{props.viewData.body}</BodyText>
      </Grid>

      <Grid container direction='column' justify='center' alignItems='center'>
        <NextButton onClick={handleSubmit}>Onward</NextButton>
      </Grid>
      
    </ViewContainer>
  )
}


const ViewContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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

const BodyText = styled.h3`
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #151515;
  letter-spacing: 1px;
  text-align: center;

  line-height: 27px;
  font-size: 18px;

  margin-bottom: 30px;
  ${media.sm`
    line-height: 25px;
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  `}
`

const NextButton = styled.button`
	border: none;
  padding: 0;
  width: 214px;

  height: 60px;
  font-size: 18px;

  ${media.sm`
    height: 50px;
    font-size: 16px;
  `}

  border: solid #151515;
  border-width: 1px;

  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;

  background-color: #151515;
  color: #FFFFFF;
`