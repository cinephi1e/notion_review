import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Cover = styled.div`
width: 100vw;
overflow: hidden;
@media screen and (max-width: 1024px) {  
    margin: 0;
    height: 15vh;
}
`;

export const Page = styled.button`
font-size: 70px;
font-weight: bold;
margin: -50px 0 0 2vw;
text-shadow: 3px 3px 3px #555;
color: white;
background: none;
border: none;
transition: 0.2s;
&:hover {
    text-shadow: 3px 3px 3px #000;
}
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const MPage = styled.button`
display: none;
@media screen and (max-width: 1024px) {     
    display: block;
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-shadow: 3px 3px 3px #555;
    border: none;
    background: none;
    margin: -25px 0 0 -100px;
}
`;

export const Content = styled.div`
margin: 20px auto;
display: block;
@media screen and (max-width: 1024px) {     
    margin: 10px auto;
}
`;

export const List = styled.div`
border: 1px solid #ccc;
border-radius: 5px;
box-shadow: 2px 2px 1px #eee;
width: 22vw;
height: auto;
margin: 10px;
display: flex;
flex-direction: column;
&:hover {
    background: #eee;
    opacity: 90%
}
@media screen and (max-width: 1300px) {     
    width:30vw;
}
@media screen and (max-width: 1024px) {     
    width:45vw;
}
@media screen and (max-width: 600px) {     
    width:90vw;
}
`;

export const Poster = styled.div`
width: 22vw;
height: auto;
@media screen and (max-width: 1300px) {     
    width:30vw;
}
@media screen and (max-width: 1024px) {     
    width:45vw;
}
@media screen and (max-width: 600px) {     
    width:90vw;
}
`;

export const Text = styled.div`
padding: 20px;
border-top: 1px solid #ccc;
margin-top: -4px;
`;

export const Title = styled.p`
font-size: 25px;
font-weight: bold;
margin: 5px 0 0 0;
`;

export const RatingDate = styled.div`
display: flex;
margin: 5px 0;
`;

export const Rating = styled.div`
font-size: 15px;
font-weight: bold;
`;

export const Date = styled.div`
font-weight: bold;
margin-left: auto;
color: #666;
`;

export const Review = styled.span`
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 6;
-webkit-box-orient: vertical;

@media screen and (max-width: 1024px) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
@media screen and (max-width: 600px) {     
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
`;