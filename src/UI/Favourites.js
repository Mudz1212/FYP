import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import useStore from "../Store/useStore.js";

const Favourites = () => {
  const navigation = useNavigation();
  const [favorites, saveFavorites] = useStore("favoriteDuas", []);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    setFavList(favorites);
  }, [favorites]);

  const handleRemoveFavorite = (dua) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== dua.id);
    saveFavorites(updatedFavorites);
    setFavList(updatedFavorites);
  };

  const handleSelectDua = (dua) => {
    if (dua.screen) {
      navigation.navigate(dua.screen, { dua });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Favourite Duas</Text>

      {favList.length === 0 ? (
        <Text style={styles.noFavoritesText}>No favorites added yet.</Text>
      ) : (
        <FlatList
          data={favList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => handleSelectDua(item)}
            >
              <Text style={styles.listTitle}>{item.Title}</Text>
              <TouchableOpacity onPress={() => handleRemoveFavorite(item)}>
                <Ionicons name="heart" size={24} color="red" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fffbea", padding: 20 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
  noFavoritesText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Favourites;
