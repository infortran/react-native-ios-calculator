import React from 'react'
import { Text, View } from 'react-native'
import { CalcBtn } from '../components/CalcBtn'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'



export const CalculadoraScreen = () => {
    
    const {numeroAnterior, 
        numero, clean, posNeg, 
        btnDel, btnDividir, btnRestar, 
        btnMultiplicar, btnSumar, calculate, buildNumber} = useCalculator()

    return (
        <View style={styles.calcContainer}>
            {
                ( numeroAnterior !== '0') && (
                    <Text style={ styles.lilResult }>{ numeroAnterior }</Text>
                )
            }
            
            <Text style={ styles.result }
                numberOfLines={ 1 }
                adjustsFontSizeToFit={ true }
            >{ numero }</Text>
            <View style={styles.row}>
                
                <CalcBtn text="C" color="#9b9b9b" action={ clean }/>
                <CalcBtn text="+/-" color="#9b9b9b" action={ posNeg }/>
                <CalcBtn text="Del" color="#9b9b9b" action={ btnDel } />
                <CalcBtn text="/" color="#ff9427" action={ btnDividir } />
            </View>
            <View style={styles.row}>
                <CalcBtn text="7" action={ buildNumber } />
                <CalcBtn text="8"  action={ buildNumber } />
                <CalcBtn text="9" action={ buildNumber } />
                <CalcBtn text="x" color="#ff9427" action={btnMultiplicar} />
            </View>
            <View style={styles.row}>
                <CalcBtn text="4" action={ buildNumber } />
                <CalcBtn text="5" action={ buildNumber } />
                <CalcBtn text="6" action={ buildNumber } />
                <CalcBtn text="-" color="#ff9427" action={ btnRestar } />
            </View>
            <View style={styles.row}>
                <CalcBtn text="1" action={ buildNumber }/>
                <CalcBtn text="2" action={ buildNumber } />
                <CalcBtn text="3" action={ buildNumber } />
                <CalcBtn text="+" color="#ff9427" action={ btnSumar } />
            </View>
            <View style={styles.row}>
               
                <CalcBtn text="0" action={ buildNumber } large/>
                <CalcBtn text="." action={ buildNumber } />
                <CalcBtn text="=" color="#ff9427" action={ calculate }/>
            </View>
        </View>
    )
}
