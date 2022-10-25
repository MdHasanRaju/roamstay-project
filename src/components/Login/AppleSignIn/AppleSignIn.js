import React, { useState } from 'react';
import AppleLogin from 'react-apple-login';

const AppleSignIn = () => {

    

    // const callback = () => {

    // }

    return (
      <AppleLogin
        clientId={"com.stay.roam"}
        redirectURI={"https://devapi.roamstay.com/web/google-callback"}
        responseType={"code"}
        responseMode={"query"}
        usePopup={true}
        designProp={{
          height: 30,
          width: 140,
          color: "black",
          border: false,
          type: "sign-in",
          border_radius: 15,
          scale: 1,
          locale: "en_US",
        }}
      />
    );
};

export default AppleSignIn;