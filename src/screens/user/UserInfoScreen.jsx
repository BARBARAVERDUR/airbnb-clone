import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./UserInfoScreen.styles";
import { UserContext } from "../../contexts/UserContext";

export const UserInfoScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require("../../../assets/images/avatar.png")}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{currentUser.username}</Text>
          <Text style={styles.profileLocation}>Florianópolis, Brasil</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>LougOut</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus
          eu nisi tincidunt ultrices. Morbi id dictum ipsum. Nunc nec lacus
          massa. Integer eget elit non elit sodales maximus.
        </Text>
        <Text style={styles.sectionTitle}>Interests</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus
          eu nisi tincidunt ultrices. Morbi id dictum ipsum. Nunc nec lacus
          massa. Integer eget elit non elit sodales maximus.
        </Text>
      </View>
    </ScrollView>
  );
};
