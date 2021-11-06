import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    mainBackground:{
        flex:1,
        backgroundColor:'black',
        
    },
    result:{
        color:'white',
        textAlign:'right',
        fontSize:70,
        marginBottom:10
    },
    lilResult:{
        color:'rgba(255,255,255,.5)',
        fontSize:30,
        textAlign:'right'
    },
    calcContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'
    },
    btn:{
        width:70,
        height:70,
        backgroundColor:'#2d2d2d',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:5

    },
    btnText:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    }
})