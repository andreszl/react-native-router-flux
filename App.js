import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View 
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux'
import ScarletScreen from './src/components/ScarletScreen'
import GrayScreen from './src/components/GrayScreen';

import BlueScreen from './src/components/BlueScreen';
import MaizeScreen from './src/components/MaizeScreen';
import GoldScreen from './src/components/GoldScreen';
import BlackScreen from './src/components/BlackScreen';

import ModalScreen from './src/components/ModalScreen';

const TabIcon = ({selected, title}) => {
  return (
    <Text style={{ color: selected ? 'red': 'black'}}> {title}</Text>
  )
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
            tabBarPosition="bottom"
            title="React Native Router Flux"
          >
            {/* Tab and it's scenes */}
            <Scene key="osu" title="Scarlet/Gray" icon={TabIcon}>
              <Scene key="scarlet"
                component={ScarletScreen}
                title="Scarlet"
              />
              <Scene
                key="gray"
                component={GrayScreen}
                title="Gray"
              />
            </Scene>
  
            {/* Tab and it's scenes */}
            <Scene key="um" title="Blue/Maizen" icon={TabIcon}>
              <Scene
                key="blue"
                component={BlueScreen}
                title="Blue"
              />
              <Scene
                key="maize"
                component={MaizeScreen}
                title="Maize"
              />
            </Scene>
  
            {/* Tab and it's scenes */}
            <Scene key="vu" title="Gold/Black" icon={TabIcon}>
              <Scene
                key="gold"
                component={GoldScreen}
                title="Gold"
              />
              <Scene
                key="black"
                component={BlackScreen}
                title="Black"
              />
            </Scene>
          </Scene>
          <Scene
            key="modal"
            direction="vertical"
            component={ModalScreen}
            title="Modal"
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  }
});
