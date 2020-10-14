import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { InputArea, InputArea2, ScrollViewLista } from '../../components/StyleStack'
import { TextInput, Button, FAB, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { Header } from 'react-native-elements'

export default () => {

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    class Item {
        constructor(data, quantidade, total) {
            this.data = data;
            this.lista = [];
            this.quantidade = quantidade;
            this.total = total;
        }
    }

    class Lista {
        constructor(produto, quantidade, valor) {
            this.produto = produto;
            this.quantidade = quantidade;
            this.valor = valor;

        }
    }


    /*const Card = []
    const item = new Item();
    const lista = new Lista();

    item.data = '01/01/01'
    item.lista = [[lista.produto = 'Trigo',lista.quantidade = 4,lista.valor = 34]]
    item.total = lista.valor * lista.quantidade

    Card.push(item)
    console.log(Card);*/

    const [textProduto, setProduto] = React.useState('');
    const [textQuantidade, setQuantidade] = React.useState('');
    const [textValor, setValor] = React.useState('');

    const navigation = useNavigation()

    const handleCadastroCard = () => {
        navigation.reset({
            routes: [{ name: 'MainTab' }]
        })
    }
    const handleBack = () => {
        navigation.goBack()
    }

    const styles = StyleSheet.create({
        Input: {
            margin: 5,
            marginTop: 10,
            marginBottom: 10,
        },

        Button: {
            padding: 5,
            margin: 5,
            backgroundColor: '#3D0B1F',
            marginTop: 170,
        },
        fab: {
            position: 'absolute',
            margin: 16,
            backgroundColor: '#3D0B1F',
            top: -15,
            left: -20,
        },
        fab2: {
            position: 'absolute',
            margin: 16,
            right: -20,
            bottom: 0,
            marginBottom: 80,
            backgroundColor: '#3D0B1F',
            zIndex: 3,
        },
    })

    /*<Appbar.Header theme={{ colors: { primary: '#6A1434', underlineColor: '#6A1434' } }}>
                    <Appbar.BackAction onPress={() => handleCadastroCard()} />
                    <Appbar.Content title="Cadastro" subtitle="de compras" />
                </Appbar.Header>*/

    return (

        <SafeAreaView>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <ScrollViewLista>
                <InputArea2>

                    <TextInput style={styles.Input}
                        label="Nome do produto"
                        value={textProduto}
                        onChangeText={textProduto => setProduto(textProduto)}
                        type={"flat"}
                        theme={{
                            colors: {
                                primary: '#3D0B1F',
                                underlineColor: '#3D0B1F'
                            }
                        }
                        }
                        color='#3D0B1F' />

                    <TextInput style={styles.Input}
                        label="Quantidade"
                        value={textQuantidade}
                        onChangeText={textQuantidade => setQuantidade(textQuantidade)}
                        type={"outlined"}
                        keyboardType='numeric'
                        theme={
                            {
                                colors: {
                                    primary: '#3D0B1F',
                                    underlineColor: '#3D0B1F',
                                }
                            }
                        } />

                    <TextInput style={
                        {
                            margin: 5,
                            marginTop: 10,

                        }
                    }
                        label="Valor"
                        value={textValor}
                        onChangeText={textValor => setValor(textValor)}
                        type={"outlined"}
                        keyboardType='numeric'
                        theme={
                            {
                                colors: {
                                    primary: '#3D0B1F',
                                    underlineColor: '#3D0B1F'
                                }
                            }
                        } />




                    <View style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center', backgroundColor: '#e9e9e9', padding: 10, margin: 5, marginTop: 15
                    }}>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                    </View>



                    <Button icon="check"
                        mode="contained"
                        style={styles.Button}
                        onPress={
                            () => { handleCadastroCard() }
                        }><Text>Cadastrar</Text></Button>
                </InputArea2>
                <FAB style={styles.fab2}
                    big icon="plus"
                    onPress={
                        () => handleBack()
                    }
                    color="#fff" />
            </ScrollViewLista>
        </SafeAreaView >
    );


}