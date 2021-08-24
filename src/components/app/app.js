import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import Error from '../error';
import CharacterPage from '../charachterPage/characterPage';

import './app.css';

export default class App extends Component {

    state = {
        showRandomChar: true,   
        error: false
    };

    componentDidCatch() {
        console.log('ERrRRRRRRRrp');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        if (this.state.error) {
            return <Error/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;
            return (
            <> 
                <Container>
                        <Header />
                </Container>
                <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button 
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Focus
                                </button>
                            </Col>
                        </Row>
                    <CharacterPage />
                </Container>
            </>
        );
    }
};