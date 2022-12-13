import react from "react";
import { Container, Cover, Page, Content, MPage } from "../elements/main";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const NotFound = (props) => {

    const history = useHistory();
    return (
        <Container>
            <Cover>
                <img src="https://i.pinimg.com/originals/0d/b9/e3/0db9e3a73f61677779d518ca9a20e110.png"
                    style={{ width: "100vw", height: "23vh", objectFit: "cover" }} />
                <Page>신애필 아카이브</Page>
            </Cover>
            <MPage>신애필 아카이브</MPage>
            <Content>
                <h1 style={{textAlign: "left", width: "85vw"}}>잘못된 접근입니다.</h1>
                <h1 onClick={() => { history.push("/"); }}><BsArrowLeftCircle /></h1>
            </Content>
        </Container>

    );
}

export default NotFound;
