// CODE ATTRIBUTION 
// TITLE: IIE Modual Manual 2025 
// AUTHOR: The Independent Institute of Education (Pty) Ltd 
// VERSION: FIRST EDITION: 2012 
// AVAILABLE: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B2D7589E9-374B-43DE-9596-EF35D83EBD02%7D&file=WEDE5020MM.docx&action=default&mobileredirect=true 
// DATE ACCESSED: 10 November 2025 

import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CafeItem, Course, RootStackParamList } from "../../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "AddItem"> & {
  addItem: (item: CafeItem) => void;
};

const c = {
  bg: "#0D0D0D",        // Jet Black background
  card: "#2E2E2E",      // Charcoal overlay
  text: "#F8F5F0",      // Ivory text
  meta: "#D4AF37",      // Antique Gold accent
  accent: "#800020",    // Burgundy CTA
  input: "#1A1A1A",     // Deep grey input field
  border: "#3C3C3C",    // Muted charcoal border
};

function wld() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export default function AddItemScreen({ navigation, addItem }: Props) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Course | "">("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
 
  //Error Handling
  const onSave = () => {
    if (!itemName || !description || !price || !image || !category) {
      Alert.alert("Missing Fields", "Please fill in all fields");
      return;
    }

    //Error Handling
    const p = parseFloat(price);
    if (isNaN(p) || p <= 0) {
      Alert.alert("Invalid Price", "Please enter a valid positive price");
      return;
    }

    const intensity: CafeItem["intensity"] =
      p < 45 ? "Mild" : p < 60 ? "Balanced" : "Strong";

    const payload: CafeItem = {
      id: wld(),
      itemName,
      description,
      category,
      price: p,
      intensity,
      image,
      ingredients: ingredients
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    addItem(payload);
    navigation.goBack();
  };

  const onCategoryChange = (value: string) => setCategory(value as Course);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: c.bg }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.header}>Add New Item</Text>

          <TextInput
            style={styles.input}
            placeholder="Item Name"
            placeholderTextColor={c.meta}
            value={itemName}
            onChangeText={setItemName}
          />

          <TextInput
            style={styles.input}
            placeholder="Description"
            placeholderTextColor={c.meta}
            value={description}
            onChangeText={setDescription}
          />

         
          <View style={styles.pickerWrap}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.pickerBox}>
              <Picker
                selectedValue={category}
                onValueChange={onCategoryChange}
                mode="dropdown"
                dropdownIconColor="#c06a5a"
                style={styles.picker}
              >
                <Picker.Item
                  label="Select a category..."
                  value="Select a category..."
                  color={c.meta}
                />
                <Picker.Item label="Starter" value="Starter" color={c.text} />
                <Picker.Item label="Main" value="Main" color={c.text} />
                <Picker.Item label="Dessert" value="Dessert" color={c.text} />
              </Picker>
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Price"
            placeholderTextColor={c.meta}
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />

          <TextInput
            style={styles.input}
            placeholder="Ingredients (comma separated)"
            placeholderTextColor={c.meta}
            value={ingredients}
            onChangeText={setIngredients}
          />

          <TextInput
            style={styles.input}
            placeholder="Image URL"
            placeholderTextColor={c.meta}
            value={image}
            onChangeText={setImage}
          />

          <TouchableOpacity style={styles.save} onPress={onSave}>
            <Text style={styles.saveText}>Save Item</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancel}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexGrow: 1,
    backgroundColor: c.bg,
    padding: 24,
  },
  header: {
    color: c.text, 
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 22,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  input: {
    backgroundColor: c.input,
    color: c.text,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: c.border,
    height: 52,
    paddingHorizontal: 14,
    marginBottom: 14,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  pickerWrap: {
    marginBottom: 14,
  },
  label: {
    color: c.meta,
    marginBottom: 6,
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: c.border,
    borderRadius: 14,
    backgroundColor: c.card,
    overflow: "hidden",
    height: 52,
    justifyContent: "center",
  },
  picker: {
    color: c.text,
    height: 52,
    width: "100%",
    fontSize: 16,
  },
  save: {
    backgroundColor: c.accent,   // Burgundy button
    padding: 16,
    borderRadius: 14,
    marginTop: 18,
    alignItems: "center",
    shadowColor: c.meta,         // Soft gold glow
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  saveText: {
    color: c.text,               // Ivory on Burgundy
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  cancel: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: c.border,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  cancelText: {
    color: c.meta,               // Gold accent for subtle contrast
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 0.4,
  },
});