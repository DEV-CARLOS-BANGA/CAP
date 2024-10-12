import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ItemPageInformation from '../components/item_page_information';
import Footer from '../components/Footer';
import Header from '../components/Header_2';


export default function FAMILAS_ACOMPANHAMENTO({ navigation }: any) {
    return (
        <>
            <Header navigation={navigation} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={style.jucap_container}
            >
                <Text style={style.title}>FAMÍLIAS E ACOMPANHAMENTO DE CASAIS</Text>
                <ItemPageInformation title={'ACTIVIDADES'} />
                <ItemPageInformation title={'VOLUNTÁRIOS'} />
                <ItemPageInformation title={'EVANGELISMO'} />
                <ItemPageInformation title={'AGENDAS'} />
                <ItemPageInformation title={'INTERCESSÃO'} />
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