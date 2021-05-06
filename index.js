/**
 * @format
 */
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './src/login';
import register from './src/register';
import {restuarant} from './src/restuarants';



AppRegistry.registerComponent(appName, () => register);
