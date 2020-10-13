import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Paragraph } from '../../components/StyleStack'
import { FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import {CardView} from '../../components/CardView'

export default () => {

    const navigation = useNavigation()

    const handleCadastroCard = () => {
        navigation.reset({
            routes: [{ name: 'CadastroCard' }]
        })
    }

    return (
        <Paragraph>
            <FAB
                style={styles.fab}
                big
                icon="plus"
                onPress={()=>handleCadastroCard()}
                color="#fff"
            />
            
        </Paragraph>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#3D0B1F',
    },
})