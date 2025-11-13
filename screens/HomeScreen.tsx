// CODE ATTRIBUTION 
// TITLE: IIE Modual Manual 2025 
// AUTHOR: The Independent Institute of Education (Pty) Ltd 
// VERSION: FIRST EDITION: 2012 
// AVAILABLE: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B2D7589E9-374B-43DE-9596-EF35D83EBD02%7D&file=WEDE5020MM.docx&action=default&mobileredirect=true //
// DATE ACCESSED: 10 November 2025 

import React from "react";
import { Alert,FlatList,Image,SafeAreaView,StyleSheet,Text,TouchableOpacity,View,} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CafeItem, RootStackParamList } from "../../type";

type Props = NativeStackScreenProps<RootStackParamList, "Home"> & {
  items: CafeItem[];
  removeItem: (id: string) => void;
  averages: { Beverages: string; Starters: string; Desserts: string; Mains: string };
};

export default function HomeScreen({ navigation, items, removeItem, averages }: Props) {
  const confirmRemove = (id: string) => {
    Alert.alert("Remove Item", "Do you want to remove this item?", [
      { text: "Cancel", style: "cancel" },
      { text: "Remove", style: "destructive", onPress: () => removeItem(id) },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Our Menu ({items.length})</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Mains</Text>
          <Text style={styles.statValue}>R {averages.Mains}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Desserts</Text>
          <Text style={styles.statValue}>R {averages.Desserts}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Starters</Text>
          <Text style={styles.statValue}>R {averages.Starters}</Text>
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.body}>
              <Text style={styles.title}>{item.itemName}</Text>
              <Text style={styles.desc}>{item.description}</Text>
              <Text style={styles.cata}>{item.category}</Text>
              <TouchableOpacity
                style={styles.remove}
                onPress={() => confirmRemove(item.id)}
              >
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      <View style={styles.fabs}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate("AddItem")}
        >
          <Text style={styles.fabText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate("Filter", { items })}
        >
          <Text style={styles.fabText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const c = {
  bg: "#0D0D0D",        // Jet Black background
  card: "#2E2E2E",       // Charcoal card
  accent: "#D4AF37",     // Antique Gold accent
  text: "#F8F5F0",       // Ivory text
  border: "#3C3C3C",     // Charcoal border
  soft: "#BFA760",       // Softer gold highlights
  remove: "#800020",      // Burgundy for remove / CTA
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c.bg,
    paddingHorizontal: 22,
    paddingTop: 10,
  },

  heading: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    color: c.accent,
    marginVertical: 24,
    letterSpacing: 0.6,
    textShadowColor: "#BFA76040",
    textShadowRadius: 6,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  statBox: {
    backgroundColor: c.card,
    borderRadius: 16,
    paddingVertical: 14,
    width: "30%",
    alignItems: "center",
    shadowColor: "#BFA76050",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#3C3C3C",
  },
  statLabel: {
    fontSize: 14,
    color: c.text,
    marginBottom: 4,
    opacity: 0.8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "900",
    color: c.soft,
  },

  card: {
    backgroundColor: c.card,
    borderRadius: 18,
    marginVertical: 12,
    overflow: "hidden",
    shadowColor: "#BFA76070",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#3C3C3C",
  },
  image: {
    width: "100%",
    height: 190,
  },
  body: {
    padding: 16,
  },
  title: {
    fontSize: 19,
    fontWeight: "800",
    color: c.accent,
    marginBottom: 8,
  },
  desc: {
    fontSize: 15,
    color: c.text,
    marginBottom: 6,
    lineHeight: 20,
  },
  cata: {
    fontSize: 13,
    fontStyle: "italic",
    color: c.border,
    marginBottom: 10,
  },

  remove: {
    backgroundColor: c.remove,
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: "center",
    shadowColor: c.remove,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  removeText: {
    color: "#F8F5F0",
    fontWeight: "800",
    fontSize: 15,
    letterSpacing: 0.4,
  },

  fabs: {
    position: "absolute",
    bottom: 36,
    right: 24,
    flexDirection: "column",
    gap: 14,
  },
  fab: {
    backgroundColor: c.accent,
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 26,
    elevation: 7,
    shadowColor: c.accent,
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  fabText: {
    color: "#0D0D0D", // Jet Black text on gold
    fontWeight: "900",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 0.3,
  },
});
