import React from 'react';
import { View, StyleSheet, } from 'react-native';

import { Title, Drawer,} from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export function LeftDrawerStyling(props) {
    return (
        <View style={styles.screen}>
            <DrawerContentScrollView {...props}>
                <View style={styles.titleView}>
                    <Title style={styles.title}>
                        Mischief
                    </Title>
                </View>
                <View>
                    <Drawer.Section>
                        <DrawerItem 
                            icon={() => (
                                <Ionicons
                                    name='ios-home'
                                    color='white'
                                    size={30}
                                />
                            )}
                            label= "Newsfeed"
                            onPress={()=>{props.navigation.navigate('Newsfeed')}}
                        />
                    </Drawer.Section>
                </View>
                <View>
                    <Drawer.Section >
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name='md-book'
                                    color='white'
                                    size={30}
                                />
                            )}
                            label= "Scripts"
                            onPress={()=>{props.navigation.navigate("Scripts")}}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name='ios-film'
                                    color='white'
                                    size={30}
                                />
                            )}
                            label= "Productions"
                            onPress={()=>{props.navigation.navigate("Productions")}}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name= 'ios-briefcase'
                                    color='white'
                                    size={30}
                                />
                            )}
                            label= "Jobs"
                            onPress={()=>{props.navigation.navigate("Jobs")}}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name= 'md-globe'
                                    color='white'
                                    size={30}
                                />
                            )}
                            label= "Locations"
                            onPress={()=>{props.navigation.navigate("Locations")}}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name= 'ios-key'
                                    color='white'
                                    size={30}
                                />
                            )}
                            label= "Rentals"
                            onPress={()=>{props.navigation.navigate("Rentals")}}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name= 'logo-usd'
                                    color='white'
                                    size={30}
                                />
                            )}
                            label= "Investments"
                            onPress={()=>{props.navigation.navigate("Investments")}}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name= 'ios-people'
                                    color='white'
                                    size={30}
                                />
                            )}
                            label= "Distribution"
                            onPress={()=>{props.navigation.navigate("Distribution")}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: "80%",
        flex: 1,
        backgroundColor: colors.primary,
    },
    titleView: {
        height: 70,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        marginLeft: 20,
        fontSize: 27,
        alignItems:'center',
        fontWeight: 'bold'
    },
    drawerSection: {
        overlayColor:'white'
    },
})