import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginPage from '../Components/LoginPage';
import RegisterPage from '../Components/RegisterPage';
import LoadingPage from '../Components/LoadingPage';
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

    RegisterPage : {
        screen: RegisterPage,
        navigationOptions : {
            headerShown : false,
        }
    }
}

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);