import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from '../components/Heading';

class Markdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            markdown: '',
            arrayOfMarkups: []
        }

        this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    }

    handleMarkdownChange(event) {

        this.setState({markdown: event.target.value}, () => {

            this.setState({arrayOfMarkups: this.state.markdown.split('\n')});
        });
        
    }

    render() {

        const HEADING_FORM_1 = /#{1} \w/;
        const HEADING_FORM_2 = /#{2} \w/;

        const REMOVE_EXTRA_SPACES = /\s+/g;

        return (
            <Container>
                <Row>
                <Col className="col-6">
                    <textarea id="editor" onChange={this.handleMarkdownChange} style={{minHeight: '100vh'}} className='w-100'>

                    </textarea>
                </Col>
                <Col>
                    <div id="preview" style={{minHeight: '100vh'}} className="w-100 bg-secondary p-3">
                        {/* <code className="text-white p-1 bg-dark">Hello</code> */}
                        {
                            this.state.arrayOfMarkups.map(markup => {

                                if (markup === "") {

                                    return <br></br>
                                }
                                else if (String(markup).replace(REMOVE_EXTRA_SPACES, ' ').match(HEADING_FORM_2)) {
                                    // console.log('HEADING 2 RENDERED');
                                    return <Heading value={markup} headingType='2' />
                                }
                                else if (String(markup).replace(REMOVE_EXTRA_SPACES, ' ').match(HEADING_FORM_1)) {
                                    
                                //    console.log('HEADING 1 RENDERED');
                                   return <Heading value={markup} headingType='1' />
                                }
                                else {
                                    return <Heading value={markup} headingType='' />
                                }
                            })
                        }
                    </div>
                </Col>
                </Row>
            </Container>
        );
    }
}

export default Markdown;