import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, FlatList, SafeAreaView, Image, Text,TouchableOpacity } from 'react-native';

import DATA from '../data/Data'

import colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

function Item({ content }) {
    return (
        <View style={styles.cell}>
            <TouchableOpacity style={styles.profile}>
                <Image
                    source={content.image}
                    style={styles.image}
                />
                <View style={styles.textInfo}>
                    <Text style={styles.textName}>
                        {content.name}
                    </Text>

                    <Text style={styles.textInformation}>
                        {content.username} - {content.role}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconView}>
                <Ionicons
                    name='ios-close'
                    color='white'
                    size={32}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

const SearchScreen = ({navigation}) => {

    const [input, setInput] = useState('');
    
    function goPrevious()
    {
        navigation.goBack();
        setInput('');
    }

    return (
        <View style={styles.screen}>
            <View style={styles.topbar}>
                <View style={styles.searchBarView}>
                    <Ionicons
                        name='ios-search'
                        color='white'
                        backgroundColor={colors.secondary}
                        size={18}
                    />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search Hollywood"
                        placeholderTextColor="white"
                        autoCorrect={false} 
                        color='white'
                        onChangeText={text => setInput(text)}
                        value={input}
                        autoFocus={true}
                    />
                </View>
                <View>
                    <Button 
                        onPress={()=>{goPrevious();}}
                        title="Cancel"
                        color='white'
                    />
                </View>
            </View>
            <SafeAreaView style={styles.displayContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item content={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor:'#181818'
    },
    topbar: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBarView: {
        backgroundColor: colors.secondary,
        height: 30,
        width: '75%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 23
    },
    searchBar: {
        paddingLeft: 8,
        height: 30,
        width: '90%',
        backgroundColor: colors.secondary,
    },
    displayContainer: {
        flex:1
    },
    cell:{
        flexDirection:'row',
    },
    profile: {
        width:'90%',
        backgroundColor:'#181818',
        marginVertical: 10,
        flexDirection:'row',
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 20,
    },
    textInfo: {
        paddingLeft: 7
    },
    textName: {
        color:'white', 
        fontWeight:'bold',
        fontSize:15
    },
    textInformation: {
        color: '#898a8a',
        fontWeight:'400',
        fontSize:12
    },
    iconView:{
        width:'10%',
        height:35,
        marginVertical:10,
        alignItems:'flex-end',
        justifyContent:'center',
    },
})

export default SearchScreen;