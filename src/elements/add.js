import styled from "styled-components";

export const AddList = styled.div`
width: 40px;
height: 40px;
background: white;
border: 1px solid #ccc;
border-radius: 100px;
padding: 30px;
display: flex;
align-items: center;
position: fixed;
bottom: 70px;
right: 70px;
font-size: 70px;
color: #999;
&: hover {
    background: #eee;
}
@media screen and (max-width: 1024px) {     
    display: none;
}
`;

export const Button = styled.button`
border: none;
background: none;
font-size: 40px;
margin-left: -5px;
transform: scaleX(-1);
`;

export const Add = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
padding: 20px;
margin: 0 auto;
`;

export const AddTitle = styled.h1`
margin-top: 0;
`;

export const AddReview = styled.textarea`
height: 40vh;
white-space: pre-wrap;
font-size: 15px;
outline: none;
border: 1px solid #ddd;
color: #777;
padding: 5px;
margin-bottom: 10px;
font-size: 16px;
&:focus {
    border: 1px solid #bbb;
}
@media screen and (max-width: 600px) {     
    height: 65vh;
}
`;

export const Input = styled.textarea`
display: flex;
border: 1px solid #ddd;
margin-bottom: 10px;
height: 20px;
padding: 5px;
font-size: 16px;
&:focus {
    border: 1px solid #bbb;
}
`;

export const Rating = styled.ul``;

export const Star = styled.li``;

export const AddButton = styled.button`
margin-left: auto;
width: 70px;
height: 30px;
border: 1px solid #ddd;
background: #f6f6f6;
border-radius: 3px;
&:hover {
    background: #eee;
}
`;