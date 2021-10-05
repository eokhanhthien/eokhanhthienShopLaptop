import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { actGetUserFacebook } from '../../actions';



 class Facebook extends Component {
    //.env
    // REACT_APP_ROUTER_BASE_NAME=987590391812065
    // HTTPS=true

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log("data cua toi:" ,response);
        
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        });
        
    }

    componentClicked = () => {
        // console.log('Facebook btn clicked');
    }

    render(){
        let facebookData;

        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}!</h2>
                </div>
            ) : 
            facebookData = (<FacebookLogin
                appId="987590391812065"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // onGetUserFacebook: (product) => {
        //     dispatch(actGetUserFacebook(product))
        // }
    }
}

export default connect(null, mapDispatchToProps)(Facebook)
