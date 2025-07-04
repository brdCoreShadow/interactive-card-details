import styled from "@emotion/styled";

import bgCon from "../../assets/images/bg-main-mobile.png"

import backCard from "../../assets/images/bg-card-back.png"
import frontCard from "../../assets/images/bg-card-front.png"

export const CardResultCon = styled.div`
position: relative;

height: 240px;

padding-top: 32px;
padding-right: 16px;

text-align: right;

background-image: url(${bgCon});
`

export const BackCard = styled.div`
padding-top: 72px;
padding-right: 38px;

display: inline-block;

width: 286px;
height: 157px;

font-size: 9px;
font-weight: 500;

background-image: url(${backCard});
background-size: cover;

color: #fff;

border-radius: 8px;
`

export const FrontCard = styled.div`
position: absolute;

bottom: 0;
left: 0;

transform: translate(16px, 42px);

display: inline-block;

width: 286px;
height: 157px;

padding-top: 18px;
padding-bottom: 18px;
padding-left: 18px;
padding-right: 20px;


background-image: url(${frontCard});

border-radius: 8px;
`

export const CardThumbLogo = styled.div`
width: 54px;
height: 30px;
`

export const CardNumberList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

margin-top: 38px;

font-size: 18px;
font-weight: 500;
letter-spacing: 2.2px;

color: #fff;
`

export const CardDateAndOWnerCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

margin-top: 18px;

font-size: 9px;
font-weight: 500;
letter-spacing: 1.29px;

color: #fff;
`