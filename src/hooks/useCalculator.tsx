import { useRef, useState } from "react"


enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculator = () => {
    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const clean = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const buildNumber = (num : string) =>{
        if( numero.includes('.') && num === '.') return;

        if( numero.startsWith('0') || numero.startsWith('-0')){
            if (num === '.'){
                setNumero(numero + num)
            }else if(num === '0' && numero.includes('.')){
                setNumero(numero + num )
            }else if(num !== '0' && !numero.includes('.')){
                setNumero(num)
            }else if(num === '0' && !numero.includes('.')){
                setNumero(numero)
            }else{
                setNumero( numero + num)
            }
        }else{
            setNumero(numero + num)
        } 
    }

    const posNeg = () => {
        if ( numero.includes('-')){
            setNumero(numero.replace('-', ''))
        }else{
            setNumero( '-' + numero)
        }
    }

    const btnDel = () =>{
        let negative = ''
        let numTemp = numero
        if (numero.includes('-')){
            negative = '-'
            numTemp = numero.substr(1)
        }

        if(numTemp.length > 1){
            setNumero(negative + numTemp.slice(0, -1))
        }else{
            setNumero('0')
        }
    }

    const changeNumPrevious = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0, -1))
        }else{
            setNumeroAnterior(numero)
        }
        
        setNumero('0')
    }

    const btnDividir = () => {
        changeNumPrevious()
        ultimaOperacion.current = Operadores.dividir
    }
    const btnMultiplicar = () => {
        changeNumPrevious()
        ultimaOperacion.current = Operadores.multiplicar
    }
    const btnSumar = () => {
        changeNumPrevious()
        ultimaOperacion.current = Operadores.sumar
    }
    const btnRestar = () => {
        changeNumPrevious()
        ultimaOperacion.current = Operadores.restar
    }

    const calculate = () => {
        const num1 = Number( numero )
        const num2 = Number( numeroAnterior )
        switch( ultimaOperacion.current){
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.dividir:
            setNumero(`${num2 / num1}`)
                break;
            default:
                break;
            setNumeroAnterior('0')
        }
    }

    return {
        numeroAnterior,
        numero,
        clean,
        posNeg,
        btnDel,
        btnDividir,
        buildNumber,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calculate
    }
}
