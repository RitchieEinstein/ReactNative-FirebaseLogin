import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import { LoginForm } from "./components/LoginForm";

class App extends Component {
  state = {
    loggedIn: null
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "xxxxx",
      authDomain: "xxxxxx",
      databaseURL: "https://axxxxx.com",
      projectId: "xxxxxx",
      storageBucket: "xxxxxxx",
      messagingSenderId: "xxxxxxx"
    });
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPressed={() => firebase.auth().signOut()}>LogOut</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    console.log("text");
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
