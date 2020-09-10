import React, {useEffect} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Title, Drawer, Text } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerActions} from '@react-navigation/native';

import colors from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

export function RightDrawerStyling(props) {

    return (
        <View style={styles.screen}>
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={styles.header}>
                        <View style={styles.icon}>
                            <TouchableOpacity onPress={() => { props.navigation.closeDrawer(); }}>
                                <Ionicons
                                    name='ios-close'
                                    color='white'
                                    size={45}
                                />
                            </TouchableOpacity>
                        </View>
                        <Title style={styles.titleText}>
                            Mischief Account
                        </Title>
                    </View>
                    <TouchableOpacity
                        style={styles.profilePic}
                        onPress={() => { props.navigation.navigate('NewsfeedHome'); }}
                    >
                        <Image
                            source={require('../assets/max-wiederholt.png')}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100,
                            }}
                        />
                    </TouchableOpacity>
                    <View style={styles.nameInfo}>
                        <Text style={styles.nameText}>Max Wiederholt</Text>
                        <Text style={styles.emailText}>max@mischief.app</Text>
                    </View>
                </View>
                <View style={styles.drawerSection}>
                    <Drawer.Section>
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name='ios-mail'
                                    color='white'
                                    size={29}
                                />
                            )}
                            label="Messages"
                            onPress={() => { props.navigation.navigate('Messages') }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name='ios-notifications'
                                    color='white'
                                    size={29}
                                />
                            )}
                            label="Notifications"
                            onPress={() => { props.navigation.navigate('Notifications') }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name='ios-stats'
                                    color='white'
                                    size={29}
                                />
                            )}
                            label="Offers"
                            onPress={() => { props.navigation.navigate('Offers') }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name='md-calendar'
                                    color='white'
                                    size={29}
                                />
                            )}
                            label="Calendar"
                            onPress={() => { props.navigation.navigate('Calendar') }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name='md-contact'
                                    color='white'
                                    size={29}
                                />
                            )}
                            label="Edit Profile"
                            onPress={() => { props.navigation.navigate('Edit Profile') }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Ionicons
                                    name='ios-settings'
                                    color='white'
                                    size={29}
                                />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('Settings') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.regularBackground,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
    },
    titleText: {
        color: 'white',
        fontSize: 26,
        paddingLeft: 1
    },
    profilePic: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameInfo: {
        paddingTop: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameText: {
        color: 'white',
        fontSize: 26,
        fontWeight: "700"
    },
    emailText: {
        paddingTop: 0,
        color: 'white',
        fontSize: 12,
        fontWeight: "500"
    },
    drawerSection: {
        paddingTop: 20,
    }
})