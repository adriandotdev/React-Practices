import Button from 'react-bootstrap/Button'
import {Container, Row, Col, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css'

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      quote: '',
      author: ''
    }

    this.generateQuote = this.generateQuote.bind(this);
  }

  componentWillMount() {
    document.title = 'Random Quote Generator';
  }

  componentDidMount() {
    this.generateQuote();
  }

  generateQuote() {

    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
      this.setState({quote: data.content, author: data.author})
    })
  }

  render() {
    return (
      <div>
        <Container style={{minHeight: '100vh'}} className="d-flex justify-content-center align-items-center flex-column gap-3">
          <Row className="justify-content-center">
            <Col className='col-12 col-md-12'>
              <Card id="quote-box" className='bg-dark'>
                <Card.Body>
                  <Card.Title className="text-center text-white display-6">
                    Random Quote Generator
                  </Card.Title>
                  <blockquote className="blockquote">
                    <Card.Text id="text" className="text-light text-center mt-4 p-3 display-6 fs-4">
                      <i className="bi bi-quote">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                      </svg>
                      </i>
                      {this.state.quote}
                    </Card.Text>

                    <footer className="text-end">
                      <Card.Text id="author" className="text-white-50 blockquote-footer px-5">
                        {this.state.author}
                      </Card.Text>
                    </footer>
                  </blockquote>
                  <Container className="">
                  
                    <Row className="align-items-center justify-content-between">
                      <Col className="">
                        <a id="tweet-quote" href="www.twitter.com/intent/tweet" target="_top" role="button" className='btn btn-primary'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                        </a>
                      </Col>

                      <Col className="d-flex justify-content-end align-self-end">
                        <Button onClick={this.generateQuote} className="text-nowrap" id="new-quote" variant="primary">New Quote</Button>
                      </Col>
                      
                    </Row>
                  </Container>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='text-muted'>Created by <span className="text-black fw-bold">Adrian Nads</span></p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default App;
