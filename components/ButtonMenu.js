import { Pressable, Text, StyleSheet} from "react-native";

export default function ButtonMenu({ title, onPress}) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: "#0E4194",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 12,
    margin: 6,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    },

    buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    shadowColor: "#000",
    }
});