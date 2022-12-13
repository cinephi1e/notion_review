import styled from "styled-components";

export const Back = styled.h1`
font-size: 40px;
text-shadow: 1px 1px 3px #333;
margin: -20px 0 0 0;
margin-left: auto;
transition: 0.3s;
width: 45px;
&:hover {
    color: #888;
}
`;

export const Content = styled.div`
display: flex;
width: 95vw;
height: 68vh;
margin: 0 auto;
overflow: auto;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const Cover = styled.div`
width: 100vw;
overflow: hidden;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const Text = styled.div`
width: 100%;
padding: 50px;
display: flex;
flex-direction: column;
margin: 0 auto;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const Title = styled.h1`
margin: 0;
font-size: 50px;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const RatingDate = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid #ddd;
padding-bottom: 10px;
margin-top: -10px;
@media screen and (max-width: 1024px) {
    display: none;
}
`;

export const Rating = styled.p`
font-size: 25px;
font-weight: bold;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const Date = styled.span`
font-weight: bold;
font-size: 20px;
margin-left: auto;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const Review = styled.p`
margin: 30px 0;
padding-bottom: 30px;
line-height: 1.8em;
border-bottom: 1px solid #ddd;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const Footer = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const DirectionFlex = styled.div`
display: flex;
align-items: center;
font-size: 18px;
margin: 5px 0;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const DirectionText = styled.div`
margin-right: 5px;
font-weight: bold;
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const Direction = styled.button`
font-size: 18px;
border-radius: 3px;
background: none;
border: none;
text-align: left;
padding-top: 4px;
&:hover {
    color: #777;
}
@media screen and (max-width: 1024px) {     
    display: none;
}
`;
