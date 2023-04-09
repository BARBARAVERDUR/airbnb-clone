import React from "react";
import { Text, View, SafeAreaView , FlatList, Image} from "react-native";
import { styles } from "./LocationListScreen.styles";
import { data } from "../../api/data";
import { Pressable } from "react-native";


export const LocationListScreen = ({navigation}) => {
 
  const location = ({ item }) => (
    <Pressable onPress={() => navigation.navigate(`Detail`, { item })}>
      <View style={styles.itemContainer}>
        <Image source={item.images[0]} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </Pressable>
  );


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data = {data}
        renderItem={location}
        keyExtractor={item => item.id}
        style ={styles.itemList}
      />
    </SafeAreaView>
  );
}

