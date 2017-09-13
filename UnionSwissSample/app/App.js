import {
  StackNavigator,
} from 'react-navigation';
import MainView from './app/components/MainView'
import ProfileView from './app/components/ProfileView'

const App = StackNavigator({
  Main: {screen: MainView},
  Profile: {screen: ProfileView},
});