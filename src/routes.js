import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Wizard from './components/Wizard/Wizard'
import WizardTwo from './components/Wizard/WizardTwo'
import WizardThree from './components/Wizard/WizardThree'
import Dashboard from  './components/Dashboard/Dashboard'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route  path='/wiz' component={Wizard} />
        <Route path='/wiz2' component={WizardTwo}/>
        <Route path='/wiz3' component={WizardThree}/>
    </Switch>
)