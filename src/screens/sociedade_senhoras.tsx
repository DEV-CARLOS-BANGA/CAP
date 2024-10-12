import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ItemPageInformation from '../components/item_page_information';
import Footer from '../components/Footer';
import Header from '../components/Header_2';

interface Show {
    show: Boolean
}

export default function SOCIEDADE_SENHORAS({ navigation }: any) {
    return (
        < >
            <Header navigation={navigation} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={style.jucap_container}
            >
                <Text style={style.title}>SOCIEDADE DE SENHORAS</Text>
                <ItemPageInformation title={'CULTOS'} />
                <ItemPageInformation title={'SINC'} />
                <ItemPageInformation title={'VOLUNTÁRIOS'} />
                <ItemPageInformation title={'CORAL'} />
                <ItemPageInformation title={'MULTIMÍDIA'} />
                <ItemPageInformation title={'TEATRO E DANÇA'} />
                <ItemPageInformation title={'JOGRAL'} />
                <ItemPageInformation title={'EVANGELISMO'} />
                <ItemPageInformation title={'AGENDA'} />
                <ItemPageInformation title={'PROTOCOLO'} />
                <ItemPageInformation title={'INTERSESSÃO'} />
                <ItemPageInformation title={'DECORAÇÃO'} />
                <ItemPageInformation title={'MINISTÉRIO DE LOUVOR'} />
                <ItemPageInformation title={'LOJA'} />
            </ScrollView>
        </>
    );
}

const style = StyleSheet.create({
    jucap_container: {
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