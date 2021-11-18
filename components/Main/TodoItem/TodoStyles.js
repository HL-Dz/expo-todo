import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todo: {
    display: "flex",
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 3,
    elevation: 3,
  },
  todoInactive: {
    display: "flex",
    marginTop: 10,
    backgroundColor: "#edfced",
    borderRadius: 3,
  },
  text: {
    display: "flex",
    minWidth: "85%",
    maxWidth: "85%",
  },
  wrap: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    flexDirection: "row",
  },
  touch: {
    display: "flex",
    maxWidth: "90%",
  },
});

export { styles };
