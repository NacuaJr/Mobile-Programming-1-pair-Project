import { StyleSheet} from 'react-native';
import LoginPage from './Components/LoginPage.js'
import RegisterPage from './Components/RegisterPage.js';
import Routes from './routes/routes.js';
import LoadingPage from './Components/LoadingPage.js';
export default function App() {

  return (
    <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25242B',
  },

});
