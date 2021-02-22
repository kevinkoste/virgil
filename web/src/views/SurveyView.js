//core
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// styling
import { Grid } from '@material-ui/core/'
import styled, { keyframes } from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'

// data
import surveyData from '../data/survey-data.json'


// takes questionData, resultsData, and handleSubmitQuestion in props, renders appropriate form
export default function SurveyView(props) {

  let { questionID } = useParams()
  let mobileView = useDetectMobileView()

  const [questionData, setQuestionData] = useState(surveyData.find(item => item.id === parseInt(questionID)))

  // get questionData on update
  useEffect(() => {
    setQuestionData(surveyData.find(item => item.id === parseInt(questionID)))
  }, [questionID])


  const [showImage, setShowImage] = useState(true)
  const handleImagePress = () => setShowImage(false)

  if (mobileView) {
    return (
      <Grid container item xs={12} style={{height:'100%'}}>
        <Grid container item xs={12} justify='center'
          direction='column'
          style={{height:'100%'}}>

            {
              (showImage)
              ? 
                <Grid container item xs={12} md={6} justify='center'
                  style={{height:'100%', width:'100%'}}>
                  <ImageButton onClick={handleImagePress}>
                    <Image src={require(`../img/survey_images/${questionData.image}`)}/>
                  </ImageButton>
                </Grid>
              :
                (questionData.type === 'text')
                ? <TextForm
                    questionData={questionData}
                    resultsData={props.resultsData}
                    handleQuestionSubmit={props.handleQuestionSubmit}
                    />
                : <RadioForm
                    questionData={questionData}
                    resultsData={props.resultsData}
                    handleQuestionSubmit={props.handleQuestionSubmit}
                    />
            }

          </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container item xs={12} style={{height:'100%'}}>
        <Grid container item xs={12} justify='center'
          direction={questionData.id%2===0 ?'row-reverse' :'row'}
          style={{height:'100%'}}>

          <Grid container item xs={12} md={6} justify='center' style={{height:'100%'}}>
            <Image src={require(`../img/survey_images/${questionData.image}`)} />
          </Grid>

          <Grid container item xs={12} md={6} justify='center'>
            <Grid container item xs={9}>

              {
                (questionData.type === 'text')
                ? <TextForm
                    questionData={questionData}
                    resultsData={props.resultsData}
                    handleQuestionSubmit={props.handleQuestionSubmit}
                    />
                : <RadioForm
                    questionData={questionData}
                    resultsData={props.resultsData}
                    handleQuestionSubmit={props.handleQuestionSubmit}
                    />
              }

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}


// needs questionData, resultsData, and handleQuestionSubmit in props
function TextForm (props) {

  const [response, setResponse] = useState('')
  const [invalidInput, setInvalidInput] = useState(false)

  const handleSubmit = () => {

    if (response === '') {
      setInvalidInput(true)
    } else {
      props.handleQuestionSubmit(
        props.questionData.id,
        response,
        props.questionData.nextID
      )
      setResponse('')
    }
  }

  const handleChange = (event) => {
    setResponse(event.target.value)
    setInvalidInput(event.target.value === '')
  }

  return (
    <FormContainer>

      <Grid container direction='column' justify='center' style={{flex: 1}}>
        <QuestionText>{props.questionData.question}</QuestionText>
        <TextInput
          name='textInput'
          type='text'
          id={`text-input`}
          placeholder={props.questionData.placeholder}
          onChange={handleChange}
          value={response}
          border={(invalidInput) ? 'solid red' : 'solid #151515' }
          />

      </Grid>

      <Grid container direction='column'>
        <NextButton
          bg={(response === '') ? '#FFFFFF' : '#151515'}
          textcolor={(response === '') ? '#151515' : '#FFFFFF'}
          onClick={handleSubmit}>
            Move Forward
        </NextButton>
      </Grid>
      
    </FormContainer>
  )
}

// needs questionData, resultsData, and handleQuestionSubmit in props
function RadioForm (props) {

  const [response, setResponse] = useState('')

  // check if returning to question, if so, highlight accordingly
  useEffect(() => {
    if (props.resultsData.find(item => item.id === parseInt(props.questionData.id))) {
      const foundResponse = props.resultsData.find(item => item.id === parseInt(props.questionData.id))
      const foundIndex = props.questionData.options.findIndex(item => item.response === foundResponse.response)
      setResponse(foundIndex)
    }
  }, [props.questionData, props.resultsData])

  const handleSubmit = (index) => {
    
    // open link if the response has a link prop
    if (props.questionData.options[index].link) {
      window.open(props.questionData.options[index].link, "_blank")
    }

    props.handleQuestionSubmit(
      props.questionData.id,
      props.questionData.options[index].response,
      props.questionData.options[index].nextID
    )
    if ('handleShowImage' in props) {
      props.handleShowImage()
    }
    setResponse('')
  }

  const handleClick = (index) => {

    setTimeout(() => {
      handleSubmit(index)
    }, 300)

    setResponse(index)

  }


  return (
    <FormContainer>

      <Grid container direction='column' justify='center' style={{flex: 1}}>

        <QuestionText>{props.questionData.question}</QuestionText>

        {props.questionData.options.map((item, index) => (
          <RadioButton onClick={() => handleClick(index)} key={index}
            animation={(index === parseInt(response)) ? flicker : 'none'}>

            <ButtonText
              animation={(index === parseInt(response)) ? flickerText : 'none'}
              >
              {item.response}
            </ButtonText>

          </RadioButton>
        ))}

      </Grid>
      
    </FormContainer>

  )
}

const ImageButton = styled.button`
  border: none;
  padding: 0px;
  background-color: #FFFFFF;
  height: 100%;
`

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  ${media.sm`
    max-width: 100%;
  `}

`

const FormContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
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

const TextInput = styled.input`
  height: 60px;
  font-size: 18px;
  ${media.sm`
    height: 50px;
    font-size: 16px;
  `}
  
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 10px 15px;

  border: ${props => props.border};
  border-width: 1px;

  ::placeholder {
    color: #D0D0D0;
  }
  :focus::placeholder {
    opacity: 0;
  }
`

const NextButton = styled.button`
	border: none;
  padding: 0;
  width: 214px;

  align-self: flex-end;
  height: 60px;
  font-size: 18px;

  ${media.sm`
    align-self: center;
    height: 50px;
    font-size: 16px;
  `}

  border: solid #151515;
  border-width: 1px;

  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;

  background-color: ${props => props.bg};
  color: ${props => props.textcolor};

`

const flicker = keyframes`
  0% {background-color: #151515}
  25% {background-color: #FFFFFF}
  50% {background-color: #151515}
  100% {background-color: #151515}
`

const flickerText = keyframes`
  0% {color: #FFFFFF}
  25% {color: #151515}
  50% {color: #FFFFFF}
  100% {color: #FFFFFF}
`

const RadioButton = styled.button`
  background-color: #FFFFFF;
  color: #151515;
  animation: ${props => props.animation} 0.5s ease-in-out 1;

  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: solid #151515;
  border-width: 1px;
  margin-bottom: 20px;
  padding: 10px 15px;
  height: 60px;
  ${media.sm`
    height: 50px;
  `}
`

const ButtonText = styled.h3`
  flex: 1;
  text-align: left;
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 2px;

  animation: ${props => props.animation} 0.5s ease-in-out 1;

  font-size: 18px;
  ${media.sm`
    font-size: 16px;
  `}
`


