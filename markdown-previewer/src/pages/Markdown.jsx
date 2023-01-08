import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from '../components/Heading';
import {marked} from 'marked';

class Markdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            markdown: '# Heading 1\n## Heading 2\n\n`inline-code`\n**bold**\n*italics*\n\n[freeCodeCamp Logo](twitter.com)\n\n```\nconsole.log(\"Hello, World\");\n```\n- fdf\n- dfadf\n- dfdfdf\n\n> Block Quotes!',
            renderedHtml : '',
            arrayOfMarkups: []
        }

        this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
    }

    componentDidMount() {
        document.getElementById('preview').innerHTML = marked.parse(this.state.markdown);
    }

    handleMarkdownChange(event) {

        let lineBrRegex = /[\n]+/g
        this.setState({markdown: event.target.value}, () => {

            // let withBR = marked.parse(this.state.markdown).replace(lineBrRegex, "<br>");

            // this.setState({renderedHtml: withBR}, () => {
            //     document.getElementById('preview').innerHTML = this.state.renderedHtml;
            // })
            document.getElementById('preview').innerHTML = marked.parse(this.state.markdown);
            // this.setState({arrayOfMarkups: this.state.markdown.split('\n')});
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
                    <textarea value={this.state.markdown} id="editor" onChange={this.handleMarkdownChange} style={{minHeight: '100vh'}} className='w-100'>

                    </textarea>
                </Col>
                <Col>
                    <div id="preview" style={{minHeight: '100vh'}} className="w-100 bg-light p-3"></div>
                
                </Col>
                </Row>
            </Container>
        );
    }
}

export default Markdown;