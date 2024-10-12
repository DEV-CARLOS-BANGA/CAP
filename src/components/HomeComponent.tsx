import { View, StyleSheet, ScrollView, Text, Pressable, ColorValue } from 'react-native';
import { useState } from 'react';



export default function HomeComponents({ navigation }: any) {
    const [back1, setBack1] = useState<ColorValue>('#620b00')
    const [back2, setBack2] = useState<ColorValue>('#620b00')
    const [back3, setBack3] = useState<ColorValue>('#620b00')
    const [back4, setBack4] = useState<ColorValue>('#620b00')
    const [back5, setBack5] = useState<ColorValue>('#620b00')
    const [back6, setBack6] = useState<ColorValue>('#620b00')
    const [back7, setBack7] = useState<ColorValue>('#620b00')
    const [back8, setBack8] = useState<ColorValue>('#620b00')
    const [back9, setBack9] = useState<ColorValue>('#620b00')
    const [back10, setBack10] = useState<ColorValue>('#620b00')
    const [back11, setBack11] = useState<ColorValue>('#620b00')
    const [back12, setBack12] = useState<ColorValue>('#620b00')
    const [back13, setBack13] = useState<ColorValue>('#620b00')
    const [back14, setBack14] = useState<ColorValue>('#620b00')
    const [back15, setBack15] = useState<ColorValue>('#620b00')
    const [back16, setBack16] = useState<ColorValue>('#620b00')

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={style.home_component_container}>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    gap: 15,
                    marginBottom: 20,
                    marginTop: '5%',
                    width: '100%',
                    height: '100%',
                }}>
                    <Text allowFontScaling={false} style={style.welcome_text}>Seja bem-vindo(a)</Text>

                    <Text allowFontScaling={false} style={style.simple_text}>Actualize-se acerca das actividades do seu departamento(e não só) em qualquer lugar, e a qualquer hora apartir de um clique!!</Text>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back1
                        }]}
                        onPressOut={() => {
                            setBack1('#620b00');
                            navigation.navigate('Jucap');
                        }}
                        onPressIn={() => {
                            setBack1('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>JUCAP</Text>
                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back2
                        }]}
                        onPress={() => {
                            navigation.navigate('Sociedade_senhoras');
                        }}
                        onPressOut={() => {
                            setBack2('#620b00');
                        }}
                        onPressIn={() => {
                            setBack2('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>SOCIEDADE DE SENHORAS</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back3
                        }]}
                        onPress={() => {
                            navigation.navigate('Sociedade_senhores');
                        }}
                        onPressOut={() => {
                            setBack3('#620b00');
                        }}
                        onPressIn={() => {
                            setBack3('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>SOCIEDADE DE SENHORES</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back4
                        }]}
                        onPress={() => {
                            navigation.navigate('Casa_Paz');
                        }}
                        onPressOut={() => {
                            setBack4('#620b00');
                        }}
                        onPressIn={() => {
                            setBack4('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>CASA DE PAZ</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back5
                        }]}
                        onPress={() => {
                            navigation.navigate('Congregacoes');
                        }}
                        onPressOut={() => {
                            setBack5('#620b00');
                        }}
                        onPressIn={() => {
                            setBack5('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>CONGREGAÇÕES</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back6
                        }]}
                        onPress={() => {
                            navigation.navigate('familias_casais');
                        }}
                        onPressOut={() => {
                            setBack6('#620b00');
                        }}
                        onPressIn={() => {
                            setBack6('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>FAMÍLIAS E </Text>
                        <Text style={[style.text, { fontSize: 9 }]}>ACOMPANHAMENTO</Text>
                        <Text style={style.text}>DE CASAIS</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back7
                        }]}
                        onPress={() => {
                            navigation.navigate('protocolo');
                        }}
                        onPressOut={() => {
                            setBack7('#620b00');
                        }}
                        onPressIn={() => {
                            setBack7('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>PROTOCOLOS</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back8
                        }]}
                        onPress={() => {
                            navigation.navigate('multimidia');
                        }}
                        onPressOut={() => {
                            setBack8('#620b00');
                        }}
                        onPressIn={() => {
                            setBack8('#6b2a21');
                        }}

                    >
                        <Text style={style.text}>MULTIMÍDIAS</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back9
                        }]}
                        onPress={() => {
                            navigation.navigate('voluntarios');
                        }}
                        onPressOut={() => {
                            setBack9('#620b00');
                        }}
                        onPressIn={() => {
                            setBack9('#6b2a21');
                        }}

                    >
                        <Text style={style.text}>VOLUNTÁRIOS</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back10
                        }]}
                        onPress={() => {
                            navigation.navigate('accao_social');
                        }}
                        onPressOut={() => {
                            setBack10('#620b00');
                        }}
                        onPressIn={() => {
                            setBack10('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>ACÇÃO SOCIAL</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back11
                        }]}
                        onPress={() => {
                            navigation.navigate('ministerio_louvor');
                        }}
                        onPressOut={() => {
                            setBack11('#620b00');
                        }}
                        onPressIn={() => {
                            setBack11('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>MINISTÉRIO DE LOUVOR</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back12
                        }]}
                        onPress={() => {
                            navigation.navigate('programas_actividades');
                        }}
                        onPressOut={() => {
                            setBack12('#620b00');
                        }}
                        onPressIn={() => {
                            setBack12('#6b2a21');
                        }}

                    >
                        <Text style={style.text}>PROGRAMAS E ACTIVIDADES</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back13
                        }]}
                        onPress={() => {
                            navigation.navigate('corais');
                        }}
                        onPressOut={() => {
                            setBack13('#620b00');
                        }}
                        onPressIn={() => {
                            setBack13('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>CORAIS</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back14
                        }]}
                        onPress={() => {
                            navigation.navigate('contactos');
                        }}
                        onPressOut={() => {
                            setBack14('#620b00');
                        }}
                        onPressIn={() => {
                            setBack14('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>CONTACTOS</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back15
                        }]}
                        onPress={() => {
                            navigation.navigate('loja');
                        }}
                        onPressOut={() => {
                            setBack15('#620b00');
                        }}
                        onPressIn={() => {
                            setBack15('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>LOJA</Text>

                    </Pressable>

                    <Pressable
                        style={[style.navigate, {
                            backgroundColor: back16,
                            marginBottom: 50,
                        }]}
                        onPress={() => {
                            navigation.navigate('sobre');
                        }}
                        onPressOut={() => {
                            setBack16('#620b00');
                        }}
                        onPressIn={() => {
                            setBack16('#6b2a21');
                        }}
                    >
                        <Text style={style.text}>SOBRE</Text>

                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    home_component_container: {
        width: '100%',
        height: '100%',
        padding: 0.5,
    },
    navigate: {
        width: '30%',
        height: 85,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 5, height: 5 },
        shadowColor: '#620b00',
        shadowRadius: 6,
        shadowOpacity: 0.8,
    },
    text: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
        width: '100%',
    },
    welcome_text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#620b00',
        width: '100%',
        textAlign: 'center',
    },
    simple_text: {
        textAlign: 'center',
        width: '100%',
        fontSize: 14,
        color: '#ba9174',
        paddingBottom: 17,
        marginLeft: 16,
        marginRight: 16,
    }
})