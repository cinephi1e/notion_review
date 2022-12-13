import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Component/Main";
import Detail from "./Component/Detail";
import Spinner from "./Component/Spinner";
import { db } from "./firebase";
import { collection, doc, deleteDoc, getDocs } from "firebase/firestore";
import { loadReviewFB } from "./redux/modules/review";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./Component/NotFound";

function App() {
  const dispatch = useDispatch();

  const loaded = useSelector(state => state.review.loaded);

  React.useEffect(() => {
    dispatch(loadReviewFB());
  }, []);

  // React.useEffect(async() => {
  //   const docRef = doc(db, "addreview", "6FiVTFOewzNUZk5nJC7t");
  //   await deleteDoc(docRef);
  // }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detail/:index" component={Detail} />
        <Route component={NotFound} />
        {!loaded && <Spinner />}
      </Switch>
    </div>
  );
}

export default App;
