import React from "react";
// import '../css/card.css';
import styled from 'styled-components';

const CardBackground = styled.div`
  border-radius: 16px;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 30px 20px 30px;
    margin-left: 13px;
    background-color: aqua;
    position: relative;
    height: 300px;
    width: 300px;
`;

const CardTag = styled.div`
  height: 20px;
    width: 230px;
    margin-left:0px;
    margin-top: 10px;
    background-color: blue;
    color: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #FFFFFF;
    border-radius: 0px 35px 35px 0px;

    & p {
       margin:0;
      margin-left: 55px;
    }
`;

const OfferLabel = styled.div`
 font-size: 1.063rem;
    font-style: normal;
    font-weight: bold;
    line-height: 1.313rem;
    margin-top: 27px;
    text-transform: capitalize;
    color: #000000;
`;

const OfferDesc = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 0.813rem;
    line-height: 1rem;
    color: #6B6E7B;
    margin-top: 10px;
    white-space: normal;
    height: 2rem;
`;

const TnC = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 0.563rem;
    line-height: 1.125rem;
    color: #8F8F8F;
    margin-top: 2px;
`;


const ConditionLimit = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 0.625rem;
    line-height: 0.875rem;
    margin-top: 10px;
    color: #4A4A4A;
`;

const CampaignEndDate = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 0.625rem;
    line-height: 0.875rem;
    margin-top: 2px;
    color: #8F8F8F;
`;

const ProgressBar = styled.div`
    width: 233px;
    height: 4px;
    margin-top:8px;
    background-color: #fff;
`;

const Progress = styled.div`
    height:100%;
`;

const GoalAchievement = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 0.625rem;
    line-height: 0.875rem;
    margin-top:9px;
    color: #000000;
`;

const Cta = styled.div`
    margin-top: 22px;
    width: 120px;
    height: 24px;
    border-radius: 64px;
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.5rem;
    background-color: #fff;
    text-align: center;
    float: right;
    color: #E95F62;
`;



class Card extends React.Component {

   constructor(props) {
  	super(props);
   }
   

  render () {
    return <CardBackground style={{background:this.props.cardColor}}>
                <CardTag style={{background:this.props.cardTagColor}}>
                  <p>{this.props.cardTag}</p>   
                </CardTag>
                <OfferLabel>{this.props.offerLabel}</OfferLabel>
                <OfferDesc>{this.props.offerDesc}</OfferDesc>
                <TnC>{this.props.tnc}</TnC>
                <ConditionLimit>{this.props.conditionLimit}</ConditionLimit>
                <CampaignEndDate>{this.props.campaignEndDate}</CampaignEndDate>
                <ProgressBar>
                    <Progress style={{width:this.props.progress,background:this.props.progressBarColor}}></Progress>
                </ProgressBar>
                <GoalAchievement>{this.props.goalAchievement}</GoalAchievement>
                <Cta>Show products</Cta>
           </CardBackground>
  }
}

export default Card;