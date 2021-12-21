import React from "react";
import Unsplash from 'unsplash-js';
import { setBearerToken } from "../actions/actions";

class Auth extends React.Component {

constructor(props) {
    super(props);

  
}

componentDidMount() {

if (localStorage.getItem('bearerToken')) {
    setBearerToken(localStorage.getItem('bearerToken'));
}
else {
    const unsplash = new Unsplash({
        accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
        secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
        callbackUrl: "https://bekfola.github.io/skillbox-js"
    });

    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
    ]);

    location.assign(authenticationUrl);
}

}
    

    render() {
        
        return (
            <div>
                <div>Auth</div>
                <div></div>
            </div>
            )
    }
}


export default Auth;