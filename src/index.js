import React from "react";
// import './css/slider.css';
import Card from './components/Card';
import styled from 'styled-components'

// const CardContainer = styled.div`
//   font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
//   width: 100%;
//   margin: 0 auto;
//   overflow-x: scroll;
//   white-space: nowrap;
//   max-width: 680px;
//   text-align: left;
//   -ms-overflow-style: none;

//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;


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

  // handleCardClick = () => (event) => {
  //   console.log("In card click!")
  //   console.log("event ", event);
  // }

  handleCardClick(event) {
    console.log("In card click!")
    console.log("event ", event);
  }

  handleTestClick = () => (e) => {
    console.log("event ", e.target);
  }

  
  render () {
      const cards = this.state.cards;
      return <div className="slider" dangerouslySetInnerHTML={{__html: this.state.cards.body}}></div>
        // return <div className="abc">
        //   <CardContainer dangerouslySetInnerHTML={{__html: this.state.cards.body}}></CardContainer>
        // </div>
        // return <div> 
        //   <div className="abc" dangerouslySetInnerHTML={{__html: this.state.cards.body}}></div>
        //   <div onClick={this.handleTestClick()}>abcdef</div>
        //   <div dangerouslySetInnerHTML={this.createMarkup()} />
        // </div>
       
  }
}

export default SliderTest;

