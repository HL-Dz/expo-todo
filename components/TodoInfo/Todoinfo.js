import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";

const Todoinfo = ({ route }) => {
  return (
    <ScrollView>
      <View style={styles.wrap}>
        <View>
          <Text style={styles.text}>{route.params.text}</Text>
        </View>
        <View style={styles.buttonWrap}>
          <Text>Something </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Todoinfo;
