import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Tabs,
  TabScreen,
} from 'react-native-paper-tabs';
import ServicesScreen from '../ServicesScreen';
import NewsDashboardScreen from './NewsDashboardScreen';
import { theme } from '../../../components/LoginComponents/theme';
import ServiceDashboardScreen from './ServiceDashboardScreen';

const SupportUsScreen = () => {
  const navigation = useNavigation();

  
  
  return (
    <Tabs
        defaultIndex={0} // default = 0
        theme={{colors:{primary:theme.colors.primary}}}
        style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
      >
        <TabScreen label="News" icon="compass">
           <NewsDashboardScreen/>
        </TabScreen>
      
        <TabScreen label="Services" icon="compass">
          <ServiceDashboardScreen/>
        </TabScreen>

        <TabScreen label="Donation" icon="compass">
          <ServiceDashboardScreen/>
        </TabScreen>
      </Tabs>
  );
};

export default SupportUsScreen;
