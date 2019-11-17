import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {
  HomePage,
  LoginPage,
  LogoutPage,
  LoadingPage,
  SignupPageOne,
  SignupPageTwo,
  SignupPageThree,
  Menu
} from '../../pages';

const AppStackNavigator = createStackNavigator({
  Home: HomePage
});

const AuthStackNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      header: null
    }
  }
});
const MenuNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null
    }
  }
});
const SignupOneStackNavigator = createStackNavigator({
  SignUpOne: {
    screen: SignupPageOne,
    navigationOptions: {
      header: null
    }
  }
});
const SignupTwoStackNavigator = createStackNavigator({
  SignupTwo: {
    screen: SignupPageTwo,
    navigationOptions: {
      header: null
    }
  }
});
const SignupThreeStackNavigator = createStackNavigator({
  SignupThree: {
    screen: SignupPageThree,
    navigationOptions: {
      header: null
    }
  }
});

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingPage,
    App: AppStackNavigator,
    Auth: AuthStackNavigator,
    SignupOne: SignupOneStackNavigator,
    SignupTwo: SignupTwoStackNavigator,
    SignupThree: SignupThreeStackNavigator,
    Menu: MenuNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
export { SwitchNavigator };
