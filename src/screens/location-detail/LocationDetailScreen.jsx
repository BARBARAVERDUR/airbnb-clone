import React from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import  MapView , {Marker} from "react-native-maps";
import { styles } from "./LocationDetailScreen.styles";
import { Image } from "react-native";
import { COLORS } from "../../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

export const LocationDetailScreen = ({route}) => {

  const { item } = route.params

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image
              key={idx}
              source={{uri :`http://drive.google.com/uc?id=${image}`}}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View>
          <Ionicons name="star" size={20} color={COLORS.primary} />
          <Text style={styles.rating}> {item.rating}</Text>
        </View>
        <Link
          style={styles.webButton}
          to={{ screen: "LocationDetailWeb", params: { url: item.url } }}
        >
          Open WebSite
        </Link>

        <Text style={styles.description}> {item.description}</Text>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: item.locationCoordinates.latitude,
          longitude: item.locationCoordinates.longitude,
          longitudeDelta: 0.002,
          latitudeDelta: 0.002,
        }}
      >
        <Marker
          coordinate={{
            latitude: item.locationCoordinates.latitude,
            longitude: item.locationCoordinates.longitude,
          }}
          title={item.title}
        />
      </MapView>
    </ScrollView>
  );
};
