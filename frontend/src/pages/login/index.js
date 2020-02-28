import React, { useState, useContext, useEffect } from 'react';
import { navigate } from '@reach/router';
import Particles from 'react-particles-js';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import GoogleBtn from '../../components/shared/google-btn';
import ParticlesConfig from './particlesjs-config';
import { Store } from '../../store';
import { login } from '../../store/actions';
import shiwibMain from '../../images/shiwib_main.png';
import UserService from '../../services/user';
import {
  base,
  halfBlock,
  logoWrapper,
  loginWrapper,
  loginTitle,
  particlesWrapper,
  displayError,
  activeError,
} from './login.module.scss';

const propTypes = {};
function Login() {
  const [, dispatch] = useContext(Store);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState([false, '']);

  useEffect(() => {
    firebase.auth().useDeviceLanguage();
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        onSuccess(currentUser);
      } else {
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  const onSuccess = async (currentUser) => {
    try {
      const tokenId = await currentUser.getIdToken(true);
      const userResponse = await UserService.loginWithAccessToken(tokenId);
      dispatch(login(userResponse));
      navigate('/');
    } catch (error) {
      setShowError([true, 'Failed to authenticate. Check your ']);
    }
  };

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

  const [hasError, errorMessage] = showError;
  return (
    <div className={base}>
      <div className={particlesWrapper}>
        <Particles width="100vw" height="100vh" params={ParticlesConfig} />
      </div>
      <div className={logoWrapper}>
        <img src={shiwibMain} alt="shiwib logo" />
      </div>
      <div className={loginWrapper}>
        <h4 className={loginTitle}>{"Start doodling your friends' face"}</h4>
        {!loading && (
          <>
            <GoogleBtn onLogin={HandleGoogleLogin} />
            <p className={[displayError, hasError && activeError].join(' ')}>
              {errorMessage}
            </p>
          </>
        )}
      </div>
      <div className={halfBlock} />
    </div>
  );
}

Login.propTypes = propTypes;
export default Login;
