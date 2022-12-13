import { db } from '../../firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";

const LOAD_REVIEW = "review/LOAD_REVIEW";
const NEW_REVIEW = "review/NEW_REVIEW";

const initialState = {
    loaded : false,
    review_list: [],
};

export function loadReview(review_list) {
    return { type: LOAD_REVIEW, review_list };
}

export const newReview = (title, date, rating, review, link) => {
    return { type: NEW_REVIEW, title, date, rating, review, link };
}


export const loadReviewFB = () => {
    return async function (dispatch) {
        const review_data = await getDocs(collection(db, "addreview"));

        let review_list = [];

        review_data.forEach((r) => {
            console.log(r.data());
            review_list.push({ ...r.data() });
        });

        console.log(review_list);

        dispatch(loadReview(review_list));
        console.log("review/loadReviewFB");

    }
}
export const newReiviewFB = (title, date, rating, review, link) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "addreview"), title, date, rating, review, link);
    }
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "review/LOAD_REVIEW": {
            return { ...state, review_list: action.review_list, loaded: true, };
        }

        case "review/NEW_REVIEW": {
            console.log(action);
            return {...state};
        }

        default:
            return state;
    }
}