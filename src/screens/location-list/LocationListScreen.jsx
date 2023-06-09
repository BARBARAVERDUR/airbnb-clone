import React, { useState,useEffect } from "react";
import { Text, View, SafeAreaView , FlatList, Image} from "react-native";
import { styles } from "./LocationListScreen.styles";
import { data } from "../../api/data";
import { Pressable } from "react-native";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { getLocationList } from './../../api/location.services';

export const LocationListScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationList, setLocationList] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  //funcion para filtrar string de busqueda
 const filteredLocations = locationList.filter((location) =>
   location.title.toLowerCase().includes(searchQuery.toLowerCase())
 );

 useEffect(() =>{
  getLocationList()
  .then(data =>{
    setLocationList(data)
  })
  .catch(err => console.log(err))
 },[])

  const location = ({ item }) => (
    <Pressable onPress={() => navigation.navigate(`LocationDetail`, { item })}>
      <View style={styles.itemContainer}>
        <Image
          source={{uri :`http://drive.google.com/uc?id=${item.images[0]}`}}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar  handleSearch={handleSearch} searchQuery={searchQuery}/>
      <FlatList
        data={filteredLocations}
        renderItem={location}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  );
}

