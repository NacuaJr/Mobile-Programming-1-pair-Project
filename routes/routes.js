import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginPage from '../Components/LoginPage';
import RegisterPage from '../Components/RegisterPage';
import LoadingPage from '../Components/LoadingPage';
import HomePage from '../Components/HomePage';
import TermsOfService from '../Components/TermsOfService';

const screens = {
    
    LoadingPage : {
        screen : LoadingPage,
        navigationOptions : {
            headerShown : false,
        }
    },
    
    LoginPage : {
        screen : LoginPage,
        navigationOptions : {
            headerShown : false,
        }
    },

    HomePage : {
        screen : HomePage,
        navigationOptions : {
            headerShown : false,
        }
    },

    RegisterPage : {
        screen: RegisterPage,
        navigationOptions : {
            headerShown : false,
        }
    },

    TermsOfService : {
        screen : TermsOfService,
        navigationOptions : {
            headerShown : false,
        }
    }
}

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);