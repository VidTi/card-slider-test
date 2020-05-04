import React from "react";
// import './css/slider.css';
import Card from './components/Card';
import styled from 'styled-components'

const CardContainer = styled.div`
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  overflow-x: scroll;
  white-space: nowrap;
  max-width: 680px;
  text-align: left;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;


class SliderTest extends React.Component {
   constructor(props) {
  	super(props);
    this.state = {
        cards: {}
    }
   }

   componentDidMount() {
      fetch(`http://demo9772522.mockable.io/`)
      .then( (resp) => {
          resp.json().then( (data) => {
              console.log(data);
              this.setState({
                  cards: data.cards
              });
          });
      });
   }
   

  render () {
      const cards = this.state.cards;
        return <CardContainer>
                {Object.keys(cards).map((key) => <Card key={key} 
                                                       cardTag={cards[key].card_tag}
                                                       offerLabel={cards[key].offer_label}
                                                       offerDesc={cards[key].offer_desc}
                                                       tnc={cards[key].tnc}
                                                       conditionLimit={cards[key].cond_limit}
                                                       campaignEndDate={cards[key].campaign_end_date}
                                                       goalAchievement={cards[key].goal_achievement}
                                                       cardColor={cards[key].card_bg}
                                                       cardTagColor={cards[key].card_tag_bg}
                                                       progressBarColor={cards[key].progress_bar_bg}
                                                       progress={cards[key].progress}
                                                       />
                                                 )}
                </CardContainer> 
  }
}

export default SliderTest;

