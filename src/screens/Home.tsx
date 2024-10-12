import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import HomeComponents from '../components/HomeComponent';
import JUCAP from './jucap';
import { useState } from 'react';

export default function Home({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Header />
            <HomeComponents navigation={navigation} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});
