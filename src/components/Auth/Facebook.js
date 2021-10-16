import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { actAccFacebook } from '../../actions';
import {connect} from "react-redux"


class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    this.props.onGetinfoUser(this.state)
  };

  componentClicked = () => console.log("clicked");

  render() {
    
    let fbContent;

    console.log(this.props.loginFacebook.length)
   
    if (this.props.loginFacebook[0]) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.props.loginFacebook[0].infoUser.picture} alt={this.props.loginFacebook[0].infoUser.name} />
          <h2>Welcome {this.props.loginFacebook[0].infoUser.name}</h2>
          Email: {this.props.loginFacebook[0].infoUser.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="987590391812065"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginFacebook: state.loginFacebook
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetinfoUser: (info) => {
      dispatch(actAccFacebook(info))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps )(Facebook)
