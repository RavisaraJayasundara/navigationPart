import {View,StyleSheet,Text,Button} from 'react-native';

export default function Navigation({route,navigation}) {
    const {name} = route.params;
    return(
             <View style={styles.container}>
               <Text>Login page {name}</Text>

               <Button title="Update the name" onPress={()=>navigation.setParams({name:"code evalution"})}/>
             </View>
             

    );   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
  });
  