import React from "react";
import Masonry from 'react-masonry-css';
import masonry from "./../elements/masonry.css";
import { Container, Cover, Page, Content, List, Poster, Text, Title, RatingDate, Rating, Date, Review, MPage} from "../elements/main";
import { AddList, Button, Add, AddTitle, AddReview, Input, AddButton, } from "../elements/add";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { newReiviewFB } from "../redux/modules/review";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2'

const Main = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const _lists = useSelector((state) => state.review.review_list);
    const lists = _lists.sort((a, b) => {
        if (a.date > b.date)
            return -1;
        else if (a.date < b.date)
            return 1;
        else
            return 0;
    });

    // masonry
    const breakpointColumnsObj = {
        default: 4,
        1300: 3,
        1000: 2,
        500: 1
    };

    // Redux
    const title_ref = React.useRef(null);
    const date_ref = React.useRef(null);
    const rating_ref = React.useRef(null);
    const review_ref = React.useRef(null);
    const link_ref = React.useRef(null);

    const addReview = () => {
        dispatch(newReiviewFB({
            title: title_ref.current.value,
            date: date_ref.current.value,
            rating: rating_ref.current.value,
            review: review_ref.current.value,
            link: link_ref.current.value,
        }));
        history.push("/");
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '등록 완료!',
            showConfirmButton: false,
            timer: 1500
          });
    };


    // Modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '65vh',
        bgcolor: 'background.paper',
        border: '1px solid #ddd',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 


    return (
        <Container>
            <Cover>
                <img src="https://i.pinimg.com/originals/0d/b9/e3/0db9e3a73f61677779d518ca9a20e110.png"
                    style={{ width: "100vw", height: "23vh", objectFit: "cover" }} />
                <Page>신애필 아카이브</Page>
            </Cover>
            <MPage>신애필 아카이브</MPage>
            <Content>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">

                    {lists.map((review_list, index) => {
                        return (
                            <List
                                className="list_item"
                                key={index}
                                onClick={() => {
                                    history.push("/detail/" + index);
                                }}
                            >
                                <Poster><img src={review_list.link} style={{ width: "100%" }} /></Poster>
                                <Text>
                                    <Title>{review_list.title}</Title>
                                    <RatingDate>
                                        <Rating>
                                            <span style={{ color: "#ffc107" }}>★ </span>
                                            {review_list.rating}
                                        </Rating>
                                        {/* <Date>{review_list.date}</Date> */}
                                    </RatingDate>
                                    <Review>{review_list.review}</Review>
                                </Text>
                            </List>
                        );
                    })}
                </Masonry>
            </Content>

            <AddList>
                <Button onClick={handleOpen}>✏️</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Add>
                            <AddTitle>리뷰 등록하기</AddTitle>
                            <Input placeholder="title" ref={title_ref} />
                            <Input placeholder="yyyy/mm/dd" ref={date_ref} />
                            <Input placeholder="rating" ref={rating_ref} />
                            <AddReview placeholder="review" ref={review_ref} />
                            <Input placeholder="cover link" ref={link_ref} />
                            <AddButton onClick={addReview}>등록</AddButton>
                        </Add>
                    </Box>
                </Modal>
            </AddList>
        </Container>
    );
}

export default Main;