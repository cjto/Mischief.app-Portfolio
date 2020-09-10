import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

import colors from '../constants/Colors';
import Topbar from '../components/Topbar';

const RentalsScreen = ({navigation}) => {
    return (
        <View style={{backgroundColor:'black'}}>
            <Topbar navigation={navigation}/>
            <View style={styles.screen}>
                <Text style={styles.text}>Rentals Page!</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        marginTop: 5,
        height: '100%',
        alignItems: 'center',
        color: 'white',
        backgroundColor: colors.primary,
    },
    text: {
        color:'white', 
        paddingTop:5,
    },
})

export default RentalsScreen;