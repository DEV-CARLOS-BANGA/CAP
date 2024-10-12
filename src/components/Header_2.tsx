import { View, StyleSheet, Image, Pressable, ColorValue } from 'react-native';
import { useState } from 'react';

export default function Header({ navigation }: any) {

    const [back, setBack] = useState<ColorValue>('');

    return (
        <View style={style.header_container}>
            <Pressable
                style={
                    [style.btn_back,
                    {
                        backgroundColor: back,
                    }
                    ]
                }
                onPressIn={() => {
                    setBack('#cccccc7a');
                }}
                onPressOut={() => {
                    setBack('');
                    navigation.navigate('Home');
                }}

            >
                <Image style={style.logo_back} source={require('../../assets/arrow-left_2.png')} />
            </Pressable>
            <Image style={style.logo} source={require('../../assets/logo1.png')}></Image>
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
        resizeMode: 'stretch'
    },
    btn_back: {
        width: 45,
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 27.5,
        left: 10,
        borderRadius: 6,
    },
    logo_back: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        paddingLeft: 4,
        paddingRight: 4,
    }
})