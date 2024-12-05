import { Stack, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, ToastAndroid, View, Image, Text, Modal, TouchableOpacity } from "react-native";
import Header from "../src/components/header";
import { ui } from "../src/utils/styles";
import { useEffect, useState } from "react";
import { animales, anime, comida, disney, flores, futurista, naturaleza, vehiculos } from "../src/utils/data";
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper';
import { AntDesign } from '@expo/vector-icons';

export default function ImageWrapper() {

    const params = useLocalSearchParams();
    const { index, category } = params;
    const [img, setImg] = useState(null);

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        switch (category.toLowerCase()) {
            case "animales":
                setImg(animales[index]);
                break;
            case "anime":
                setImg(anime[index]);
                break;
            case "comida":
                setImg(comida[index]);
                break;
            case "disney":
                setImg(disney[index]);
                break;
            case "futurista":
                setImg(futurista[index]);
                break;
            case "naturaleza":
                setImg(naturaleza[index]);
                break;
            case "vehiculos":
                setImg(vehiculos[index]);
                break;
            case "flores":
                setImg(flores[index]);
                break;
            default:
                setImg(null);
                break;
        }
    }, [])
   
    function wallpaperCallback(res) {
        if (res.status === "success") {
            ToastAndroid.showWithGravityAndOffset(
                "¡Fondo de pantalla guardado!",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
        } else {
            ToastAndroid.showWithGravityAndOffset(
                "Ha ocurrido un error al cargar el fondo de pantalla",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );

        }

        setOpenModal(false);
    }

    function handleWallpaper() {
        setOpenModal(true);
    }

    function setWallpaper(type) {
        ManageWallpaper.setWallpaper(
            img, 
            wallpaperCallback, 
            type
        );
    }
  

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ header: () => <Header title={`Fondo de pantalla de ${category}`} /> }} />
            {img && <Image style={styles.image} source={img} />}

            <View style={styles.actions}>
                <Pressable style={styles.action} onPress={handleWallpaper}>
                    <AntDesign name="addfile" size={30} color="#fff" />
                    <Text style={[ui.text, { color: "#fff", fontWeight: "bold" }]}>Establecer como fondo de pantalla</Text>
                </Pressable>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={openModal}
                onRequestClose={() => setOpenModal(false)}>
                <View style={styles.center}>
                    <View style={styles.wrapper}>
                        <TouchableOpacity onPress={() => setOpenModal(false)}>
                            <Text style={[ui.h3, { alignSelf: "flex-end", color: "#fff" }]}>&#10006;</Text>
                        </TouchableOpacity>
                        <View style={styles.content}>
                            <TouchableOpacity onPress={() => setWallpaper(TYPE.LOCK)}>
                                <Text style={[ui.text, { color: "#fff" }]}>Establecer como Pantalla de bloqueo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setWallpaper(TYPE.HOME)}>
                                <Text style={[ui.text, { color: "#fff" }]}>Establecer como Pantalla de inicio</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setWallpaper(TYPE.BOTH)}>
                                <Text style={[ui.text, { color: "#fff" }]}>Establecer ambos</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },

    actions: {
        position: "absolute",
        top: "80%",
        right: 0,
        gap: 20,
        alignItems: "flex-end"
    },

    action: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: "rgba(0,0,0,0.75)",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        gap: 8,
    },

    icon: {
        width: 45,
        height: 45,
    },

    center: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.75)"
    },
    wrapper: {
        width: "90%",
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 32,
        gap: 8,
        backgroundColor: '#18192B',
        borderRadius: 20,
        marginBottom: 60
    },

    content: {
        marginTop: 16,
        gap: 24
    },
})