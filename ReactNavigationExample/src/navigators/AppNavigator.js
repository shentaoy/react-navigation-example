import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createDrawerNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createDrawerNavigator(
    {
      Login: { screen: LoginScreen },
      Main: { screen: MainScreen },
      Profile: { screen: ProfileScreen },
    },
    {
        initialRouteName: 'Login',
        contentOptions: {
            activeTintColor: '#e91e63',
        },
    }
    );

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
