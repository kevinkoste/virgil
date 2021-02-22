// core
import React from 'react'

// styling
import { Grid } from '@material-ui/core/'
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'

// data
import categoryData from '../data/category-data.json'

// takes questionData, resultsData, and handleSubmitQuestion in props, renders appropriate form
export default function RecsView (props) {

  let mobileView = useDetectMobileView()

  if (mobileView) {
    return (
      <Grid container item xs={12} justify='center' alignItems='center'
        style={{height:'100%'}}>
        <Grid container item xs={12} justify='center' alignItems='center'
          direction='column' style={{height:'100%'}}>
  
            <ProductView
              productResult={props.productResult}
              />
  
          </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container item xs={12} justify='center' alignItems='center'
        style={{height:'100%'}}>
        <Grid container item xs={10} justify='center' alignItems='center'
          direction='column' style={{height:'100%'}}>
  
            <ProductView
              productResult={props.productResult}
              />
  
          </Grid>
      </Grid>
    )
  }
}


// needs questionData, resultsData, and handleQuestionSubmit in props
function ProductView (props) {

  let mobileView = useDetectMobileView()

  return (
    <ViewContainer>

        { (mobileView)

          ? <Grid container direction='column' justify='space-between' style={{flex: 1}}>

              <QuestionText>Hand-Picked For You...</QuestionText>

              <Grid item container direction='column' justify='space-between' alignItems='flex-start'>
                {props.productResult.map((item, index) =>
                  <Product
                    key={index}
                    data={item}
                    />
                )}
              </Grid>
            </Grid>

          : <Grid container direction='column' justify='space-between' style={{flex: 1}}>

              <QuestionText>Chosen For You</QuestionText>

              <Grid item container direction='row' justify='space-between' alignItems='flex-start'>
                {props.productResult.map((item, index) =>
                  <Product
                    key={index}
                    data={item}
                    />
                )}
              </Grid>
            </Grid>
        }

    </ViewContainer>
  )
}

function Product (props) {
  // getting props [merchant, category, product, price, image]

  let mobileView = useDetectMobileView()

  const handleClick = () => {
    window.open(props.data.link, "_blank")
  }

  const img = categoryData.find(item => item.category === props.data.category).image

  return (

    <> { (mobileView)
      ? <Grid item container direction='column'
          style={{height:'100%', width:'100%'}}>

            <Image src={require(`../img/category_images/${img}`)}/>

            <LinkButton onClick={handleClick}>
              {props.data.category}
            </LinkButton>

        </Grid>

      : <Grid item container direction='column'
          style={{height:'100%', width:'29%'}}>

            <Image src={require(`../img/category_images/${img}`)}/>

            <LinkButton onClick={handleClick}>
              {props.data.category}
            </LinkButton>

        </Grid>

    } </>

  )
}


const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${media.md`
    position: absolute;
    top: 15vh;
    height: auto;
    left: 8.33vw;
    width: 83.33vw;
  `}
`

const QuestionText = styled.h2`
  font-family: 'romana';
  font-size: 36px;
  color: #151515;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 30px;
  ${media.md`
    font-size: 32px;
    margin-bottom: 48px;
    text-align: center;
  `}
`

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-bottom: 16px;
  ${media.md`
    margin-bottom: 16px;
  `}
`

const LinkButton = styled.button`
	border: none;
  padding: 0;

  height: 60px;
  font-size: 18px;

  ${media.sm`
    height: 50px;
    font-size: 16px;
    margin-bottom: 72px;
  `}

  background-color: #151515;
  color: #FFFFFF;

  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  text-align: center;
`
