import React from 'react'
import { Text, TouchableOpacity, TouchableNativeFeedback, View, StyleSheet, Platform } from 'react-native'

interface Props {
    title:string,
    onPress: () => void,
    position:'bl'|'br'
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
    const ios = ()=>{
        return (
        <TouchableOpacity
            onPress={ onPress}
            activeOpacity={ 0.75 }
            style={[styles.fabLocation,
            (position === 'br') ? styles.right : styles.left]}
        >
            
                        <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
                        </View>
            
        </TouchableOpacity>
        )
    }
    const android = () => {
        return (
            <View
            style={[styles.fabLocation,
            (position === 'br') ?
            styles.right:
            styles.left]}
        >
            <TouchableNativeFeedback
        
                    background={TouchableNativeFeedback.Ripple('#28425b', true, 25)}
                    onPress={onPress}>
                        <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
                        </View>
            </TouchableNativeFeedback>
        </View>
        )
    }
    return (Platform.OS === 'ios') ? ios() : android()
}

const styles = StyleSheet.create({
    fab:{
        backgroundColor:'#5856d6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    fabText:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        alignSelf:'center',
    }
    ,fabLocation:{
        position:'absolute',
        bottom:25,
        borderRadius:100
    },
    left:{
        left:25
    },
    right:{
        right:25
    }
    
})