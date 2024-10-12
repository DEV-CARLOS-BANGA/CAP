import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ItemPageInformation from '../components/item_page_information';
import Footer from '../components/Footer';
import Header from '../components/Header_2';


export default function SOBRE({ navigation }: any) {
    return (
        < >
            <Header navigation={navigation} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={style.sobre_container}
            >
                <Text style={style.title}>SOBRE</Text>
            </ScrollView>
        </>
    );
}

const style = StyleSheet.create({
    sobre_container: {
        width: '100%',
        height: 0,
        backgroundColor: '#ffffff',
        paddingBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#8f2121',
        width: '100%',
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 20,
    },
})