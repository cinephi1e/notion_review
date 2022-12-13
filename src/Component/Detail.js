import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container } from "./../elements/main";
import { Back, Content, Cover, Text, Title, RatingDate, Rating, Date, Review, Footer, DirectionFlex, DirectionText, Direction } from "../elements/detail";
import { Mobile, MobileHeader, MobileCover, MobileContents, MobileTitle, MobileRating, MobileDate, MobileBack, MobileReview, MobileFooter, MobileDirectionFlex, MobileDirectionText, MobileDirection } from "../elements/m_detail";
import { BsArrowLeftCircle } from "react-icons/bs";

const Detail = (props) => {
    const history = useHistory();
    const params = useParams();
    const index = params.index;
    const review = useSelector((state) => state.review.review_list);

    return (
        <Container>
            <Cover>
                <img src={review[index].link} style={{ width: "100vw", height: "35vh", objectFit: "cover" }} />
            </Cover>
            <Content>
                <Text>
                    <Back onClick={() => { history.push("/"); }}><BsArrowLeftCircle /></Back>
                    <Title>{review[index].title}</Title>
                    <RatingDate>
                        <Rating>
                            <span style={{ color: "#ffc107" }}>★ </span>
                            {review[index].rating}
                        </Rating>
                        <Date>{review[index].date}</Date>
                    </RatingDate>
                    <Review>{review[index].review}</Review>
                    <Footer>
                        <DirectionFlex>
                            <DirectionText>Prev</DirectionText>
                            <Direction onClick={() => {
                                history.push("/detail/" + (index - 1));
                            }}>{review[(index - 1)] ? review[(index - 1)].title : "이전 글이 없습니다."}
                            </Direction>
                        </DirectionFlex>
                        <DirectionFlex>
                            <DirectionText>Next</DirectionText>
                            <Direction onClick={() => {
                                history.push("/detail/" + (parseInt(index) + 1));
                            }}> {review[(parseInt(index)+1)] ? review[(parseInt(index)+1)].title : "다음 글이 없습니다."} 
                            </Direction>
                        </DirectionFlex>
                    </Footer>
                </Text>
            </Content>

            <Mobile>
                <MobileHeader>
                    <MobileCover>
                        <img src={review[index].link}
                            style={{ width: "100vw", height: "25vh", objectFit: "cover" }} />
                    </MobileCover>
                    <MobileContents>
                        <MobileTitle>{review[index].title}</MobileTitle>
                        <MobileRating><span style={{ color: "#ffc107" }}>★ </span>{review[index].rating}</MobileRating>
                        <MobileDate>{review[index].date}</MobileDate>
                        <MobileBack onClick={() => { history.push("/"); }}><BsArrowLeftCircle /></MobileBack>
                    </MobileContents>
                </MobileHeader>
                <MobileReview>{review[index].review}</MobileReview>
                <MobileFooter>
                    <MobileDirectionFlex>
                        <MobileDirectionText>Prev</MobileDirectionText>
                        <MobileDirection onClick={() => { history.push("/detail/" + (index - 1)); }}>
                            {review[(index - 1)] ? review[(index - 1)].title : "이전 글이 없습니다."}</MobileDirection>
                    </MobileDirectionFlex>
                    <MobileDirectionFlex>
                        <MobileDirectionText>Next</MobileDirectionText>
                        <MobileDirection onClick={() => { history.push("/detail/" + (parseInt(index) + 1)); }}>
                            {review[(parseInt(index)+1)] ? review[(parseInt(index)+1)].title : "다음 글이 없습니다."}</MobileDirection>
                    </MobileDirectionFlex>
                </MobileFooter>
            </Mobile>
        </Container>

    )
}

export default Detail;