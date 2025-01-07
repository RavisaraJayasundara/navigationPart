import { View, StyleSheet, Text, Button } from "react-native";
//import { useNavigation } from "@react-navigation/native";

export default function Home({ navigation }) {
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Button
        title="Go to Form page"
        onPress={() => navigation.navigate("Form")}
      />

      <Button
        title="Go to Login page"
        style={styles.button}
        onPress={() => navigation.navigate("Navigation", { name: "message 1" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginBottom: 4,
  },
});
