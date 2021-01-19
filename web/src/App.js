import React, { } from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import HomePage from './pages/HomePage'
// import SurveyPage from './pages/SurveyPage'
import HowItWorksPage from './pages/HowItWorksPage'
import ConnectPage from './pages/ConnectPage'
import DashboardPage from './pages/DashboardPage'
import IntentPage from './pages/IntentPage'
// import SweepstakesRules from './pages/SweepstakesRulesPage'
import PrivacyPage from './pages/PrivacyPolicyPage'
import LoginPage from './pages/LoginPage'

export default function App() {

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        {/* <Route path='/survey'>
          <SurveyPage />
        </Route> */}

        <Route path='/howitworks'>
          <HowItWorksPage />
        </Route>

        <Route path='/connect'>
          <ConnectPage />
        </Route>

        <Route path='/giveaway'>
          <DashboardPage />
        </Route>

        <Route path='/intent'>
          <IntentPage />
        </Route>

        {/* <Route path='/sweepstakes-rules'>
          <SweepstakesRules />
        </Route> */}

        <Route path='/privacy'>
          <PrivacyPage />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/:any'>
          <Redirect to='/' />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}