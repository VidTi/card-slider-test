import React from "react";
import Card from './components/Card';
import styled from 'styled-components'


class SliderTest extends React.Component {
   constructor(props) {
  	super(props);
    this.state = {
        cards: {}
    };
   }

  componentDidMount() {
      fetch('http://localhost:8000/getData')
      .then( (resp) => {
          resp.text().then((textData) => {
            let data = JSON.parse(textData) ;
              console.log("data", data);
              this.setState({
                  cards: {body: data.bodyContent, script: data.scriptContent, style: data.styleContent}
              },
              () => {
                let scriptTag = document.createElement('script');
                scriptTag.type = 'text/javascript';
                scriptTag.async = true;
                scriptTag.innerHTML = this.state.cards.script;
                scriptTag.setAttribute("id", "offer-script");
                document.body.appendChild(scriptTag);

                let styles = document.createElement('style');
                styles.type = 'text/css';
                styles.appendChild(document.createTextNode(this.state.cards.style));
                document.head.appendChild(styles);

              });
          });
      });
   }
  
  render () {
      const cards = this.state.cards;
      return <div className="slider" dangerouslySetInnerHTML={{__html: this.state.cards.body}}></div>      
  }
}

export default SliderTest;

