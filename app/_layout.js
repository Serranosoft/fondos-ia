import { SplashScreen, Stack } from "expo-router";
import { View, StatusBar, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { DataContext } from "../src/DataContext";
import * as Notifications from 'expo-notifications';

SplashScreen.preventAutoHideAsync();
export default function Layout() {

    // Carga de fuentes.
    const [fontsLoaded] = useFonts({
        "Regular": require("../assets/fonts/OpenRunde-Regular.otf"),
        "Medium": require("../assets/fonts/OpenRunde-Medium.otf"),
        "Semibold": require("../assets/fonts/OpenRunde-Semibold.otf"),
        "Bold": require("../assets/fonts/OpenRunde-Bold.otf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    // Gestión de notificaciones
    useEffect(() => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
            }),
        });
    }, [])

    // Esperar hasta que las fuentes se carguen
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <DataContext.Provider value={{  }}>
                <Stack />
            </DataContext.Provider>
            <StatusBar style="light" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
    },
    wrapper: {
        flex: 1,
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
    }
})