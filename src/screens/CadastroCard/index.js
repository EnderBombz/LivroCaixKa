import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { InputArea } from '../../components/StyleStack'
import { TextInput, Button, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

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
        ''
    }
}

export default () => {

    const Card = []
    const item = new Item()

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
            right: 0,
            bottom: 0,
            backgroundColor: '#3D0B1F',
        },
    })



    return (

        <
        InputArea >
        <
        FAB style = { styles.fab }
        small icon = "arrow-left-thick"
        onPress = {
            () => handleBack() }
        color = "#fff" /
        >
        <
        TextInput style = { styles.Input }
        label = "Nome do produto"
        value = { textProduto }
        onChangeText = { textProduto => setProduto(textProduto) }
        type = { "flat" }
        theme = {
            {
                colors: {
                    primary: '#3D0B1F',
                    underlineColor: '#3D0B1F'
                }
            }
        }

        color = '#3D0B1F' /
        >
        <
        TextInput style = { styles.Input }
        label = "Quantidade"
        value = { textQuantidade }
        onChangeText = { textQuantidade => setQuantidade(textQuantidade) }
        type = { "outlined" }
        keyboardType = 'numeric'
        theme = {
            {
                colors: {
                    primary: '#3D0B1F',
                    underlineColor: '#3D0B1F',
                }
            }
        }
        /> <
        TextInput style = {
            {
                margin: 5,
                marginTop: 10,
                marginBottom: 150,
            }
        }
        label = "Valor"
        value = { textValor }
        onChangeText = { textValor => setValor(textValor) }
        type = { "outlined" }
        keyboardType = 'numeric'
        theme = {
            {
                colors: {
                    primary: '#3D0B1F',
                    underlineColor: '#3D0B1F'
                }
            }
        }
        /> <
        FAB style = { styles.fab2 }
        small icon = "arrow-left-thick"
        onPress = {
            () => handleBack() }
        color = "#fff" /
        >
        <
        Button icon = "check"
        mode = "contained"
        style = { styles.Button }
        onPress = {
            () => { handleCadastroCard() } } >
        Cadastrar <
        /Button>

        <
        /InputArea>
    );


}