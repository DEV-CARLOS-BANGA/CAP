import { View, StyleSheet, Text, DimensionValue, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'



export default function Footer() {

    return (
        <View style={[style.footer, {
            position: 'relative',
            top: 100,
        }]} >
            <MaterialCommunityIcons name='copyright' size={18} color={'#cccccce6'}></MaterialCommunityIcons>
            <Text allowFontScaling={false} style={{ textAlign: 'center', color: '#cccccccf' }}>BangaSoft, Inc.</Text>
        </View>
    );
}

const style = StyleSheet.create({
    footer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})