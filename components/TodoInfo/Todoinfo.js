import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";

const Todoinfo = ({ route }) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.wrap}>
          <Text style={styles.text}>{route.params.text}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Todoinfo;
