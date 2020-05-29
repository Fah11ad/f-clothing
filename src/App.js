import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils"; //ADD SHOP DATA to Firebase - 2 - import addCollectioAndDocuments

import { createStructuredSelector } from "reselect";
import { selectCurrenUser } from "./redux/user/user.selector";

//ADD SHOP DATA to Firebase - 2 - import shop selector

// REDUX 6 //
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  //REDUX 6 - f remove constructor with state

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props; //ADD SHOP DATA to Firebase - 4 - destructure  collectionsArray

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          //REDUX 6 - g replace setState with setCurrentUser action
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // console.log(this.state);
        });
      }
      //REDUX 6 - g replace setState with setCurrentUser action
      setCurrentUser(userAuth);
      //ADD SHOP DATA to Firebase - 5 - add SHOP firebase function and pass the key which is "collections" & "collectionsArray"
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    //REDUX 6 - h remove currentUser from the  <Header ... />
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// to access signed in user to helps to redirect after sgined in to home page
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenUser,
   //ADD SHOP DATA to Firebase - 3 - add it to mapStateToProps
});

//REDUX 6 - b //
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
//REDUX 6 - a //
export default connect(mapStateToProps, mapDispatchToProps)(App);
