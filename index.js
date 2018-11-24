/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import { Routers } from './src/router/router'


AppRegistry.registerComponent(appName, () => Routers);
