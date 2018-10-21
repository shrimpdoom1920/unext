import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import ApolloClient from 'apollo-boost'
import withSession from './Components/withSession'
import MainNavbar from './Components/MainNavbar/MainNavbar'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('token') || ''
    operation.setContext({
      headers: { authorization: token }
    })
  }
})

// Loadable Loading Component
const Loading = () => (<div></div>)

// Loadable Components
const Homepage = Loadable({
  loader: () => import('./Pages/Homepage/Homepage'),
  loading: Loading,
})

const Signup = Loadable({
  loader: () => import('./Pages/Signup/Signup'),
  loading: Loading
})

const Login = Loadable({
  loader: () => import('./Pages/Login/Login'),
  loading: (props) => (<div>{props.error}</div>)
})

const Wizard = Loadable({
  loader: () => import('./Pages/Wizard/Wizard'),
  loading: (props) => (<div>{props.error}</div>)
})

const Logout = Loadable({
  loader: () => import('./Pages/Logout'),
  loading: Loading,
})

const Course = Loadable({
  loader: () => import('./Pages/Courses/Courses'),
  loading: Loading
})

const CoursePage = Loadable({
  loader: () => import('./Pages/CoursePage/CoursePage'),
  loading: Loading
})

const CourseContent = Loadable({
  loader: () => import('./Pages/CourseContent/CourseContent'),
  loading: Loading
})

// App routes
const Routes = ({ userRefetch, userSession }) => (
  <Router>
    <Fragment>
      <MainNavbar userSession={userSession} />
      <Switch>
        <Route path="/" exact render={() => <Homepage userRefetch={userRefetch} userSession={userSession} />}  />
        <Route path="/login" render={() => <Login userRefetch={userRefetch} userSession={userSession} />} />
        <Route path="/signup" render={() => <Signup userRefetch={userRefetch} userSession={userSession} />} />
        <Route path="/wizard" render={() => <Wizard userSession={userSession} /> } />
        <Route path="/course/:path" render={() => <Course userSession={userSession} /> } />
        <Route path="/enroll/:courseTitle" render={() => <CoursePage userSession={userSession}/> } />
        <Route path="/my-course/:courseTitle" render={() => <CourseContent userSession={userSession}/> } />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Fragment>
  </Router>
)

const RoutesWithSession = withSession(Routes)

const ComposedApp = () => (
  <ApolloProvider client={client}>
    <RoutesWithSession />
  </ApolloProvider>
)

ReactDOM.render(
  <ComposedApp />, 
  document.getElementById('root')
)