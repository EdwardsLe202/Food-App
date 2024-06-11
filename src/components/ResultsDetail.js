import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsDetail = ({ result}) => {
  return (
    <View>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text>{result.name}</Text>
      <Text>
      {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;