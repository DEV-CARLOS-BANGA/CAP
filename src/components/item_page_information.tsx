import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

interface Requesits {
    title: String
}

export default function ItemPageInformation({ title }: Requesits) {
    const [hide, setHide] = useState<Boolean>(false);

    return (
        <View style={style.item_page_information_container}>
            <Text allowFontScaling={false} style={style.title}>{title}</Text>
            <Pressable
                onPress={() => setHide(prevValue => !prevValue)}
            >
                {hide === true && <Image
                    style={style.icon}
                    source={require('../../assets/eye-off.png')}

                ></Image>}

                {hide === false && <Image
                    style={style.icon}
                    source={require('../../assets/eye.png')}

                ></Image>}
            </Pressable>

            {hide && <View style={style.information}>

            </View>}
        </View>
    );
}

const style = StyleSheet.create({
    item_page_information_container: {
        width: '98%',
        height: 'auto',
        padding: 5,
        backgroundColor: '#620b00',
        borderRadius: 5,
        marginLeft: '1%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        flexWrap: 'wrap',
    },
    title: {
        color: '#620b00',
        fontWeight: 'bold',
        fontSize: 12,
        paddingLeft: 14,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingRight: 14,
    },
    icon: {
        paddingRight: 4,
        paddingLeft: 4,
        width: 22,
        height: 22,
    },
    information: {
        width: '100%',
        height: 350,
        backgroundColor: '#cccccc4b',
        borderRadius: 5,
    }
})