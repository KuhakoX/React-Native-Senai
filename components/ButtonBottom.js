import { Pressable, Text, StyleSheet, View} from "react-native";

export default function ButtonBottom({ title, onPress,}) {
    return (
        <View style={styles.buttonBottomRow}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Home</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: "#0E4194",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 180,
    },

    buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    shadowColor: "#000",
    },

    buttonBottomRow: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20, 
  }
});