import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    padding: 20,
    borderBottomColor: "#EFEFEF",
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 5,
  },
  profileInfo: {
    justifyContent: "center",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileLocation: {
    fontSize: 16,
    color: "#777",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 10,
    height: 50,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
