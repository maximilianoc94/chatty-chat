import React, { useState, useContext, useEffect } from 'react';
import { navigate } from '@reach/router';
import Particles from 'react-particles-js';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import GoogleBtn from '../../components/shared/google-btn';
import ParticlesConfig from './particlesjs-config';
import { Store } from '../../store';
import { login } from '../../store/actions';
import {
  base,
  halfBlock,
  loginWrapper,
  particlesWrapper,
  displayError,
  activeError,
} from './login.module.scss';

const propTypes = {};
function Login() {
  const [store, dispatch] = useContext(Store);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState([false, '']);

  useEffect(() => {
    firebase.auth().useDeviceLanguage();
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        onSuccess(currentUser);
      } else {
        setLoading(false);
        setShowError([true, 'Failed to authenticate']);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  /** Google Login Click Handler */
  function HandleGoogleLogin() {
    setLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    firebase.auth().signInWithRedirect(provider);
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        if (result.user) {
          onSuccess(result.user);
        }
      })
      .catch((error) => setShowError([true, error.message]));
  }

  const onSuccess = async (currentUser) => {
    try {
      const tokenId = await currentUser.getIdToken(true);
      // const userResponse = await LoginService.loginWithAccessToken(tokenId);
      // dispatch(login(userResponse));
      // navigate('/');
    } catch (error) {
      setShowError([true, error.message]);
    }
  };

  const [hasError, errorMessage] = showError;
  return (
    <div className={base}>
      <div className={particlesWrapper}>
        <Particles width="100vw" height="100vh" params={ParticlesConfig} />
      </div>
      <div className={loginWrapper}>
        <p className={[displayError, hasError && activeError].join(' ')}>
          {errorMessage}
        </p>
        <GoogleBtn onLogin={HandleGoogleLogin} />
      </div>
      <div className={halfBlock} />
    </div>
  );
}

Login.propTypes = propTypes;
export default Login;
