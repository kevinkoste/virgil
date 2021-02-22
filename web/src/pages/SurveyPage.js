// core
import React, { useState, useEffect } from "react";
import {
  useRouteMatch,
  useHistory,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

// styling
import { Grid } from "@material-ui/core/";
import styled from "styled-components";
import media from "../styles/media";
import { SwitchTransition, CSSTransition } from "react-transition-group";

// custom
import useDetectMobileView from "../styles/useDetectMobileView";
import SurveyView from "../views/SurveyView";
import StartView from "../views/StartView";
import EndView from "../views/EndView";
import SignUpView from "../views/SignUpView";
import RecsView from "../views/RecsView";

// data
import surveyData from "../data/survey-data.json";
import productData from "../data/product-data.json";
import categoryData from "../data/category-data.json";

export default function SurveyPage() {
  let history = useHistory();
  let match = useRouteMatch();
  let mobileView = useDetectMobileView();

  const [resultsData, setResultsData] = useState([]);
  const [inProgress, setInProgress] = useState(false);
  const [productResult, setProductResult] = useState([]);
  const [showingProgress, setShowingProgress] = useState(true);

  // helper to redirect to first question on refresh or bad link
  // also kicks off image preload
  useEffect(() => {
    setInProgress(true);

    surveyData
      .map((item) => item.image)
      .forEach((image) => {
        if (image) new Image().src = require("../img/survey_images/" + image);
      });
    categoryData
      .map((item) => item.image)
      .forEach((image) => {
        if (image) new Image().src = require("../img/category_images/" + image);
      });
  }, []);

  const handleQuestionSubmit = (questionID, response, nextQuestionID) => {
    if (nextQuestionID === "end") {
      handleCalculateProducts();
    }

    // navigate to next page
    history.push(`${match.path}/${nextQuestionID}`);

    if (resultsData.find((item) => item.id === questionID)) {
      // if the question has already been answered, update result
      setResultsData(
        resultsData.map((item) =>
          item.id === questionID ? { ...item, response: response } : item
        )
      );
    } else {
      // if a new response, add the response to results
      setResultsData([
        ...resultsData,
        {
          id: questionID,
          question: surveyData.find((item) => item.id === questionID).question,
          response: response,
        },
      ]);
    }
  };

  // method to calculate category and product point totals
  const handleCalculateProducts = () => {
    setShowingProgress(false);

    resultsData.forEach((result) => {
      const questionData = surveyData.find((item) => item.id === result.id);

      if (questionData.options) {
        const points = questionData.options.find(
          (item) => item.response === result.response
        ).points;

        for (const item in points) {
          if (item.startsWith("To ")) {
            categoryData.forEach((category, index) => {
              if (category.category === item) {
                categoryData[index] = {
                  ...categoryData[index],
                  points: categoryData[index].points + points[item],
                };
              }
            });
          } else {
            productData.forEach((product, index) => {
              if (product.id === item) {
                productData[index] = {
                  ...productData[index],
                  points: productData[index].points + points[item],
                };
              }
            });
          }
        }
      }
    });

    // get top three categories
    const topCategories = categoryData
      .sort((a, b) => b.points - a.points)
      .slice(0, 3);

    // get top product from each category
    const topProducts = [];
    topCategories.forEach((category, index) => {
      topProducts.push(
        productData
          .filter((item) => item.category === category.category)
          .sort((a, b) => b.points - a.points)[0]
      );
    });

    setProductResult(topProducts);
  };

  const handleSurveyStart = () => {
    setResultsData([
      ...resultsData,
      {
        id: "start",
      },
    ]);
  };

  return (
    <Grid
      container
      spacing={0}
      justify="center"
      style={{ minHeight: mobileView ? "85vh" : "100vh" }}
    >
      <Grid
        item
        container
        xs={10}
        alignItems="center"
        style={{ height: mobileView ? "15vh" : "17vh" }}
        justify={mobileView ? "center" : "flex-start"}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <HeaderTitle>Virgil</HeaderTitle>
        </Link>
      </Grid>

      <Grid
        item
        container
        xs={10}
        style={{ height: mobileView ? "65vh" : "66vh" }}
      >
        <AnimationWrapper>
          <Route
            render={({ location }) => (
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={location.key}
                  timeout={{ enter: 400, exit: 400 }}
                  classNames={"fade"}
                >
                  <Switch location={location}>
                    <Route path={`${match.path}/end`}>
                      {inProgress ? (
                        <EndView />
                      ) : (
                        <Redirect to={`${match.path}/start`} />
                      )}
                    </Route>

                    <Route path={`${match.path}/signup`}>
                      {inProgress ? (
                        <SignUpView />
                      ) : (
                        <Redirect to={`${match.path}/start`} />
                      )}
                    </Route>

                    <Route path={`${match.path}/recs`}>
                      {inProgress ? (
                        <RecsView productResult={productResult} />
                      ) : (
                        <Redirect to={`${match.path}/start`} />
                      )}
                    </Route>

                    <Route path={`${match.path}/start`}>
                      {inProgress ? (
                        <StartView handleSurveyStart={handleSurveyStart} />
                      ) : (
                        <Redirect to={`${match.path}/start`} />
                      )}
                    </Route>

                    <Route path={`${match.path}/:questionID`}>
                      {inProgress ? (
                        <SurveyView
                          handleQuestionSubmit={handleQuestionSubmit}
                          resultsData={resultsData}
                        />
                      ) : (
                        <Redirect to={`${match.path}/start`} />
                      )}
                    </Route>

                    <Route path={`${match.path}/`}>
                      <Redirect to={`${match.path}/start`} />
                    </Route>
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            )}
          />
        </AnimationWrapper>
      </Grid>

      <Grid
        item
        container
        xs={10}
        style={{ height: mobileView ? "5vh" : "17vh" }}
      >
        <Footer />
      </Grid>

      {showingProgress ? (
        <ProgressBar>
          <Progress style={{ width: `${(100 * resultsData.length) / 21}%` }} />
        </ProgressBar>
      ) : (
        <></>
      )}
    </Grid>
  );
}

const ProgressBar = styled.div`
  position: absolute;
  bottom: 20px;
  height: 5px;
  width: 83.33vw;
  border-bottom: solid #151515;
  border-width: 1px;
`;

const Progress = styled.div`
  height: 5px;
  background-color: #151515;
`;

const HeaderTitle = styled.h1`
  font-family: "romana";
  font-size: 60px;
  color: #151515;
  font-weight: 400;
  ${media.sm`
    font-size: 44px;
  `}
`;

const Footer = styled.div`
  height: 128px;
`;

const AnimationWrapper = styled.div`
  height: 100%;
  width: 100%;

  .fade-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 400ms, transform 400ms;
  }
`;
