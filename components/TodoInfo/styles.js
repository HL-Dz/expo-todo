import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrap: {
    flex: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column',
    width: "100%",
    padding: 10,
  },
  text: {
    fontSize: 16,
    minWidth: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 3,
    elevation: 5,
  },
  buttonWrap: {
    color: 'red',
  },
});

export { styles };
