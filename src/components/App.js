import React, { Component } from 'react';

import logo from './rasa.svg';
import EntityHighlighter from './EntityHighlighter';

const styles = {
  app: {
    textAlign: 'center',
    padding: '2em',
    width: '60%',
    margin: '0 auto',
    color: 'black',
    maxWidth: 750,
    minWidth: 250,
  },
  logo: {
    height: '5vmin',
  },
};

class App extends Component {
  state = {
    text: 'Venture first mover advantage learning curve market ecosystem funding stealth disruptive social proof scrum project growth hacking niche market user experience graphical user interface.',
    entities: [
      { start: 160, end: 184, label: 'very important'},
      { start: 144, end: 159, label: 'very important'},
      { start: 62, end: 69, label: 'important' },
      { start: 116, end: 130, label: 'nonsense' },
      { start: 8, end: 29, label: 'nonsense' },
    ],
  }

  render() {
    return (
      <div style={styles.app}>
        <header>
          <img src={logo} style={styles.logo} alt="Rasa" />
          <h1>
            Entity Highlighting
          </h1>
        </header>
        <section>
          <p>
            Rasa is writing a new natural language classifier to sort useful concepts in tech from meaningless jargon.
            One of the parts of it is what we call the EntityHighlighter, which allows the user to highlight and 
            identify parts of a string.
            Try clicking existing highlights, or adding some of your own by selecting some text and filling the form.
          </p>
          <p>
            However, the code is in a bit of a mess <span role="img" aria-label="Oh no">😱</span>
            We want you to highlight the existing problems of <code>EntityHighlighter</code> component.
            It's not about fixing or rewriting it — let's assume this code was written by another developer,
            and you're working on reviewing it.
          </p>
        </section>
        <section>
          <EntityHighlighter
            text={this.state.text}
            entities={this.state.entities}
            onChange={(text, entities) => this.setState({ text, entities })}
          />
        </section>
      </div>
    );
  }
}

export default App;
