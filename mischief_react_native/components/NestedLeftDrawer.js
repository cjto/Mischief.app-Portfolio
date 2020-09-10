
import React, { } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LeftDrawerStyling } from '../drawerStyling/LeftDrawerStyling';

import NewsfeedScreen from '../screens/NewsfeedScreen';
import ScriptsScreen from '../screens/ScriptsScreen';
import ProductionsScreen from '../screens/ProductionsScreen';
import JobsScreen from '../screens/JobsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import RentalsScreen from '../screens/RentalsScreen';
import InvestmentsScreen from '../screens/InvestmentsScreen';
import DistributionScreen from '../screens/DistributionScreen';

const DrawerLeft = createDrawerNavigator();

function NewsfeedHome() {
    return (
      <DrawerLeft.Navigator 
        drawerPosition="left"
        drawerContent={props => <LeftDrawerStyling { ...props} />}
      >
        <DrawerLeft.Screen name="Newsfeed" component={NewsfeedScreen} />
        <DrawerLeft.Screen name="Scripts" component={ScriptsScreen} />
        <DrawerLeft.Screen name="Productions" component={ProductionsScreen} />
        <DrawerLeft.Screen name="Jobs" component={JobsScreen} />
        <DrawerLeft.Screen name="Locations" component={LocationsScreen} />
        <DrawerLeft.Screen name="Rentals" component={RentalsScreen} />
        <DrawerLeft.Screen name="Investments" component={InvestmentsScreen} />
        <DrawerLeft.Screen name="Distribution" component={DistributionScreen} />
      </DrawerLeft.Navigator>
    );
  }

  export default NewsfeedHome;