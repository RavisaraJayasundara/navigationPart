import {View,StyleSheet,Text,Button} from 'react-native';

export default function Navigation() {
    return(
             <View style={styles.container}>
               <Text>Login page</Text>
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
  