import React from 'react';
import AppCard from './AppCard';
import {Container, Row, Col } from 'react-grid-system';
import './Home.css';
import TopAppCard from './TopAppCard';

const Home = () => (

      <Container className="justify-content-center">
      <div className="jumbo-style"></div>

      <h1 className="home-header">Top App</h1>
      <TopAppCard />
      <h1 className="home-header">Top 10 Apps</h1>
      <Row>
      <Col xl={4} className="cards">
        <AppCard />
      </Col>
      <Col xl={4} className="cards">
        <AppCard />
      </Col>
      <Col xl={4} className="cards">
        <AppCard />
      </Col>
      </Row>
      <Row>
      <Col xl={4} className="cards">
        <AppCard />
      </Col>
      <Col xl={4} className="cards">
        <AppCard />
      </Col>
      <Col xl={4} className="cards">
        <AppCard />
      </Col>
      </Row>
      <Row>
      <Col xl={4} className="cards">
        <AppCard />
      </Col>
      <Col xl={4} className="cards">
        <AppCard />
      </Col>
      <Col xl={4} className="cards">
        <AppCard />
      </Col>
      </Row>
      </Container>

)
export default Home
