import React from 'react'
import Col from './Col'
import Header from '../containers/Header'
import Comments from '../containers/Comments'
import Complaints from '../containers/Complaints'
import finn from '../static/finn.gif'

const App = () => (
  <Col w={12}>
    <Header title="Awesome Finn" src={ finn } />
    <Comments />
    <Complaints />
  </Col>
)

export default App
