import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Fab } from '../components/Fab';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10)
    return (
        <View
        style={styles.container}>
            <Text
            style={styles.title}
        >Contador: {contador}
        </Text>
            <Fab 
            title="+1"
            onPress={()=> setContador(contador + 1)}
            position="br"
            />

            <Fab 
            title="-1"
            onPress={()=> setContador(contador - 1)}
            position="bl"
            />

           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        fontSize:40,
        textAlign:'center',
        top:-15
    },
    
    
    
})
export default ContadorScreen;