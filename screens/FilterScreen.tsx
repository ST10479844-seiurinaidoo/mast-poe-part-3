// CODE ATTRIBUTION 
// TITLE: IIE Modual Manual 2025 
// AUTHOR: The Independent Institute of Education (Pty) Ltd 
// VERSION: FIRST EDITION: 2012 
// AVAILABLE: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B2D7589E9-374B-43DE-9596-EF35D83EBD02%7D&file=WEDE5020MM.docx&action=default&mobileredirect=true 
// DATE ACCESSED: 10 November 2025 

import React, { useMemo, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CafeItem, Course, RootStackParamList } from "../../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Filter">;

const c = { 
  bg: "#0D0D0D",       // Jet Black background
  card: "#2E2E2E",     // Charcoal card
  text: "#F8F5F0",     // Ivory text
  meta: "#D4AF37",     // Antique Gold accent
  input: "#1A1A1A",    // Dark grey input
  border: "#3C3C3C"    // Muted charcoal border
};

export default function FilterScreen({ route }: Props) {
  const items: CafeItem[] = route.params?.items || [];
  const [selected, setSelected] = useState<Course>("Starter");

  const filtered = useMemo(
    () => items.filter(i => i.category === selected),
    [items, selected]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pickerWrap}>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={selected}
            onValueChange={v => setSelected(v as Course)}
            mode="dropdown"
            dropdownIconColor="#c08a5a"
            style={styles.picker}
            itemStyle={{ height: 44 }}
          >
            <Picker.Item label="Starter" value="Starter" color="#f5e9d7" />
            <Picker.Item label="Main" value="Main"  color="#f5e9d7" />
            <Picker.Item label="Dessert" value="Dessert" color="#f5e9d7" />
          </Picker>
        </View>
      </View>

      <Text style={styles.heading}>
        {selected}s ({filtered.length})
      </Text>

      <FlatList
        data={filtered}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.body}>
              <Text style={styles.title}>{item.itemName}</Text>
              <Text style={styles.meta}>
                {item.category} — R{item.price}
              </Text>
              <View style={styles.chips}>
                {item.ingredients?.map((g, idx) => (
                   <View key={idx} style={styles.chip}>
                   <Text style={styles.chipText}>{g}</Text>
                 </View>
                ))}
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c.bg,
    padding: 20,
  },

  pickerWrap: {
    alignItems: "center",
    marginBottom: 24,
  },

  pickerBox: {
    backgroundColor: c.input,
    borderRadius: 14,
    borderColor: c.border,
    borderWidth: 1,
    width: "82%",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },

  picker: {
    color: c.text,
    height: 50,
    width: "100%",
    fontSize: 16,
  },

  heading: {
    fontSize: 24,
    fontWeight: "900",
    color: c.text,
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 0.6,
    textShadowColor: "#D4AF3733", // subtle gold glow
    textShadowRadius: 8,
  },

  card: {
    backgroundColor: c.card,
    borderRadius: 16,
    marginBottom: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#2A2A2A",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },

  image: {
    width: "100%",
    height: 170,
  },

  body: {
    padding: 14,
  },

  title: {
    color: c.text,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 6,
    letterSpacing: 0.3,
  },

  meta: {
    color: c.meta,
    marginTop: 2,
    fontSize: 14,
    letterSpacing: 0.4,
  },

  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  chip: {
    backgroundColor: c.input,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: c.border,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },

  chipText: {
    color: c.text,
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});