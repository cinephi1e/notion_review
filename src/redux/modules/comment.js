// 코멘트(이름, 내용) 추가하기

// * 액션 타입
const ADD_NAME = "user/ADD_NAME";
const ADD_MESSAGE ="user/ADD_MESSAGE";

// * 액션 생성 함수
export const addName = (name) => {
    return {type: ADD_NAME, name};
}

export const addMessage = (message) => {
    return {type: ADD_MESSAGE, message};
}

// 유저 이름 넣기
const initialState = {
    comment_list: [
        {user_name: "김태형", user_message: "애필양 저와 결혼해주시겟어요?"},
        {user_name: "김남준", user_message: "킹탄리더로서 이 결혼 허락합니다."},
    ],
    user_name: "",
    user_message: "",
}

// * 수정
export default function reducer(state = initialState, action ={})
{
    switch (action.type) { 
        case "user/ADD_NAME": {
            console.log(action);
            return {...state, user_name: action.name};
        }

        case "user/ADD_MESSAGE": {
            console.log(action);
            return {...state, user_message: action.message};
        }
        
        default:
            return state;
    }
}