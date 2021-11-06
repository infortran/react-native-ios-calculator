import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text:string,
    color?:string,
    large?:boolean,
    action:(text: string) => void
}

export const CalcBtn = ({text, color = '#2d2d2d', large = false, action}: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action( text ) }
        >
            <View style={{...styles.btn, backgroundColor:color, 
                width: large ? 150 : 70
            }}>
            <Text style={{...styles.btnText, 
                color: (color === '#9b9b9b') ? 'black' : 'white'
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
        
    )
}
