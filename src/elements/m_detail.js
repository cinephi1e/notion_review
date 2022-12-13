import styled from "styled-components";

export const Mobile = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: flex;
    flex-direction: column;
}
`;

export const MobileHeader = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: flex;
    flex-direction: column;
}
`;

export const MobileCover = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: block;   
    width: 100vw;
    overflow: hidden;
}
`;

export const MobileContents = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: flex;
    flex-direction: column;
    text-align: left;
    overflow: hidden;
    margin: -80px 15px 0;
    color: white;
    font-weight: bold;  
    text-shadow: 1px 1px 3px #000;
}
`;

export const MobileTitle = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: block;
    font-size: 5vw;
    line-height: 1.0em;
}
`;

export const MobileRating = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: block; 
    margin: 3px 0 2px;
}
`;

export const MobileDate = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: block;   
}
`;

export const MobileBack = styled.h1`
display: none;
@media screen and (max-width: 1024px) {  
    display: flex;
    font-size: 30px;
    color: white;
    margin: -30px 0px 0 0;
    margin-left: auto;
}
`;


export const MobileReview = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: block;
    overflow: auto;
    height: 60vh;
    width: 85vw;
    margin: 40px auto;
    margin-bottom: 10px;
}
`;

export const MobileFooter = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: block;
    border-top: 1px solid #ddd;
    margin: 10px auto;
    padding-top: 10px;
    width: 85vw;
}
`;

export const MobileDirectionFlex = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: flex;
}
`;

export const MobileDirectionText = styled.span`
display: none;
@media screen and (max-width: 1024px) {  
    display: block;
    font-weight: bold;
    margin-right: 10px; 
}
`;

export const MobileDirection = styled.div`
display: none;
@media screen and (max-width: 1024px) {  
    display: block;
    width: 100vw;
}
&:first-child {
    margin-left: 0;
}
`;
