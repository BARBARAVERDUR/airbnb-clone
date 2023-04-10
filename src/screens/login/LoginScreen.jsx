import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginScreen.styles";
import { useForm, Controller } from "react-hook-form";
import { getUsers } from "../../api/user.service";
import { UserContext } from "../../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const { setCurrentUser } = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    }
  });

  const handleLogin = ({ username, password }) => {
    getUsers()
      .then((users) => {
        const user = users[0]
        if (username === user.username && password === user.password) {
          setCurrentUser({ username, password });
          navigation.navigate(`Home`)
        }
      })
      .catch((err) => console.warn(err));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sing In</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="username"
        rules={{ required: "Please enter the user name" }}
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: "Please enter a valid password. " }}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleLogin)}
      >
        <Text style={styles.buttonText}>Go!</Text>
      </TouchableOpacity>
    </View>
  );
};
