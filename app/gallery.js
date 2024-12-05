import { FlatList, StyleSheet, View } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import LottieView from 'lottie-react-native';
import { useContext, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Image } from "expo-image";
import Header from "../src/components/header";
import { getNotificationInfo, scheduleWeeklyNotification } from "../src/utils/notifications";
import { animales, anime, comida, disney, flores, futurista, naturaleza, vehiculos } from "../src/utils/data";
import { DataContext } from "../src/DataContext";
import { bannerId } from "../src/utils/constants";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

export default function gallery() {

    const { setAdTrigger } = useContext(DataContext);
    const params = useLocalSearchParams();
    const { name } = params;

    const [images, setImages] = useState([]);

    useEffect(() => {
        if (images.length < 1) {
            switch(name.toLowerCase()) {
                case "animales":
                    setImages(animales);
                    break;
                case "anime":
                    setImages(anime);
                    break;
                case "comida":
                    setImages(comida);
                    break;
                case "disney":
                    setImages(disney);
                    break;
                case "futurista":
                    setImages(futurista);
                    break;
                case "naturaleza":
                    setImages(naturaleza);
                    break;
                case "vehiculos":
                    setImages(vehiculos);
                    break;
                case "flores":
                    setImages(flores);
                    break;
                default:
                    setImages([]);
                    break;
            }
        }
    }, [])

    useEffect(() => {
        scheduleWeeklyNotification();
        getNotificationInfo();
    }, [])

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ header: () => <Header title={`Fondos IA de ${name}`} /> }} />
            <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} />
            {
                images.length > 0 ?
                    <View style={styles.list}>
                        <FlatList
                            contentContainerStyle={{ paddingBottom: 16 }}
                            data={images}
                            numColumns={2}
                            initialNumToRender={8}
                            renderItem={({ item, index }) => {
                                return (
                                    <View key={index} style={styles.itemWrapper}>
                                        <Link asChild href={{ pathname: "/image", params: { index: index, category: name} }}>
                                            <Pressable style={styles.item} onPress={() => {
                                                setAdTrigger((adTrigger) => adTrigger + 1);
                                            }}>
                                                <Image transition={1000} style={styles.image} source={item} placeholder={"L8FOP=~UKOxt$mI9IAbGBQw[%MRk"} />
                                            </Pressable>
                                        </Link>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    :
                    <LottieView source={require("../assets/lottie/loading-animation.json")} loop={true} autoPlay={true} />

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 24,
        alignItems: "center",
    },

    title: {
        gap: 2,
    },
    list: {
        flex: 1,
        width: "100%",
    },

    itemWrapper: {
        flex: 1,
        height: 200,
        margin: 5,
    },

    item: {
        position: "relative",
        height: "100%",
    },

    image: {
        width: "100%",
        height: "100%",
    }

})