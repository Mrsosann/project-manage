import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import View from './components/View'
import Personal from './components/Personal'
import Process from './components/Process'
import ProjectContainer from './containers/Project'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import '../public/style/index.css'
import { Provider } from 'react-redux'
import configStore from './store'

let store = configStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={View}/>
                <Route path='view' component={View} />
                <Route path='personal' component={Personal} />
                <Route path='process' component={Process} />
                <Route path='project' component={ProjectContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
