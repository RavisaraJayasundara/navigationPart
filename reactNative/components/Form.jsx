import {View,StyleSheet,Text,Button} from 'react-native';
import { TextInput } from 'react-native-paper';
import {useState} from "react";

export default function Form() {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    return(
         <View style={styles.container}>
            <Text  style={styles.text}>Welcome!!!</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Username:</Text>
                <TextInput style={styles.input} placeholder='Enter your username' value={username} onChangeText={setUsername}/>
                <Text style={styles.label}>Password:</Text>
                <TextInput  style={styles.input} placeholder='Enter your password'value={password} onChangeText={setPassword}/>
                <Button title="Login"  onPress={()=>{}}></Button>
            </View>
         </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgrountColor:"#FFF",
       
    },
    form:{
        backgrountColor:"white",
        padding:20,
        borderRadius:20,
        shadowColor:"black"

    },
    label:{
        fontSize:20,
        marginBottom:7,
        fontWeight:"bold",
        paddingBottom:5
    },
    text:{
        fontSize:36,
        fontWeight:"bold",
        paddingBottom:50,
         justifyContent:'center'
    },
    input:{
        fontSize:16,
         justifyContent:'center',
        
    }
});