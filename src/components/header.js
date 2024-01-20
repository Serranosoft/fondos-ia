import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ui } from "../utils/styles";

export default function Header({ title  }) {

    const router = useRouter();

    return (
        <View style={styles.header}>
            <Pressable onPress={() => router.back()}>
                <Image style={styles.img} source={require("../../assets/back.png")} />
            </Pressable>
            { title && <Text style={[ui.text, {color: "#fff"}]}>{title}</Text> }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        width: "100%",
        height: 70,
        backgroundColor: "#18192B",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
    },
    group: {
        justifyContent: "center",
    },
    img: {
        width: 30,
        height: 30,
    }

})