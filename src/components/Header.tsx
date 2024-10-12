import { View, StyleSheet, Image, Text } from 'react-native';

export default function Header() {
    return (
        <View style={style.header_container}>
            <Image style={style.logo} source={require('../../assets/logo2.png')}></Image>
        </View>
    );
}

const style = StyleSheet.create({
    header_container: {
        width: '100%',
        height: 100,
        borderBottomWidth: 1.5,
        borderBottomColor: '#c1c1c1d5',
        zIndex: 16,
        elevation: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },
    logo: {
        width: 100,
        height: 75,
        resizeMode: 'stretch',
    },
})
