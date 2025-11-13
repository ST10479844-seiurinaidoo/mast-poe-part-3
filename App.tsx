// CODE ATTRIBUTION 
// TITLE: IIE Modual Manual 2025 
// AUTHOR: The Independent Institute of Education (Pty) Ltd 
// VERSION: FIRST EDITION: 2012 
// AVAILABLE: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B2D7589E9-374B-43DE-9596-EF35D83EBD02%7D&file=WEDE5020MM.docx&action=default&mobileredirect=true //
// DATE ACCESSED: 10 November 2025 

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CafeItem, Course, RootStackParamList } from "../type";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemsScreen";
import FilterScreen from "./screens/FilterScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

//Predefined Items
const predefined: CafeItem[] = [
  //Item 1
  {
    id: "1",
    itemName: "Caprese Skewers",
    description:"Fresh mozzarella, cherry tomatoes, and basil leaves drizzled with balsamic glaze.",
    category: "Starter",
    price: 48,
    intensity: "Balanced",
    image:"https://images.pexels.com/photos/33691783/pexels-photo-33691783.jpeg?_gl=1*1ljd7yp*_ga*MTEyMDQxODY0Ni4xNzU4NTUwMTM5*_ga_8JE65Q40S6*czE3NjA4MTI1MTAkbzYkZzEkdDE3NjA4MTI3MzEkajU2JGwwJGgw",
    ingredients: ["Mozzarella", "Cherry Tomatoes", "Basil", "Balsamic Glaze"],
  },
  //Item 2
  {
    id: "2",
    itemName: "Spicy Chicken Bites",
    description:"Crispy chicken pieces tossed in a tangy, spicy glaze served with a cooling dip.",
    category: "Starter",
    price: 52,
    intensity: "Strong",
    image:"https://i.pinimg.com/736x/9b/d8/a9/9bd8a95f250850b8aade2d6f55a4dc9b.jpg",
    ingredients: ["Chicken", "Spicy Glaze", "Garlic"],
  },
  //Item 3
  {
    id: "3",
    itemName: "Garlic Butter Pita Dippers",
    description:"Warm pita triangles brushed with garlic butter and served with sambals.",
    category: "Starter",
    price: 45,
    intensity: "Mild",
    image:"https://i.pinimg.com/1200x/e9/f0/bd/e9f0bd222c97e1e594fe144ba551bbeb.jpg",
    ingredients: ["Pita Bread", "Garlic Butter", "Onions", "Hummus"],
  },
  //Item 4
  {
    id: "4",
    itemName: "Grilled Lemon Herb Chicken",
    description:"Tender grilled chicken breast marinated in zesty lemon and aromatic herbs, served with roasted vegetables.",
    category: "Main",
    price: 38,
    intensity: "Mild",
    image:"https://i.pinimg.com/1200x/71/48/f7/7148f7516531d213ac0766f2451b38fa.jpg",
    ingredients: ["Chicken Breast","Lemon","Rosemary","Olive Oil","Roasted Vegetables"],
  },
  //Item 5
  {
    id: "5",
    itemName: "Creamy Chicken Alfredo Pasta",
    description:"Rich and creamy Alfredo sauce tossed with fettuccine and sautéed mushrooms, topped with Parmesan cheese.",
    category: "Main",
    price: 42,
    intensity: "Mild",
    image:"https://i.pinimg.com/1200x/a5/75/f1/a575f13ab529fb4e10adddee9bcb4890.jpg",
    ingredients: ["Fettuccine", "Chicken", "Cream", "Parmesan", "Garlic"],
  },
  //Item 6
  {
    id: "6",
    itemName: "Spicy Beef Stir-Fry",
    description:"Sliced beef and colorful vegetables wok-tossed in a spicy soy-ginger sauce, served with jasmine rice.",
    category: "Main",
    price: 40,
    intensity: "Mild",
    image:"http://i.pinimg.com/1200x/10/eb/77/10eb77f66e3d91fcff68a43be257c905.jpg",
    ingredients: ["Beef Strips","Bell Peppers","Soy Sauce","Ginger","Jasmine Rice"],
  },
  //Item 7
  {
    id: "7",
    itemName: "Lavender Honey Panna Cotta",
    description: "Silky panna cotta infused with lavender and drizzled with golden honey.",
    category: "Dessert",
    price: 62,
    intensity: "Balanced",
    image:"https://i.pinimg.com/1200x/0b/0a/bf/0b0abf2fe9d5704bf246416c632aba31.jpg",
    ingredients: ["Cream", "Milk", "Sugar", "Lavender", "Honey"],
  },
  //Item 8
  {
    id: "8",
    itemName: "Chocolate Lava Cake",
    description:"Warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream.",
    category: "Dessert",
    price: 64,
    intensity: "Mild",
    image:"https://i.pinimg.com/1200x/ff/c9/92/ffc99259bbf15b9b88d6469c147d4701.jpg",
    ingredients: ["Dark Chocolate","Butter","Flour","Sugar","Vanilla Ice Cream"],
  },
  //Item 9
  {
    id: "9",
    itemName: "Berry Cheesecake Parfait",
    description:"Layers of creamy cheesecake filling, crushed biscuits, and mixed berries in a chilled glass.",
    category: "Dessert",
    price: 60,
    intensity: "Strong",
    image:"https://i.pinimg.com/736x/64/51/be/6451befda0420e13f4aaeb3601290f4c.jpg",
    ingredients: ["Cream Cheese","Biscuits","Strawberries","Blueberries","Whipped Cream"],
  },
];

export default function App() {
  const [items, setItems] = useState<CafeItem[]>(predefined);

  const addItem = (item: CafeItem) => setItems((prev) => [...prev, item]);

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

 // CODE ATTRIBUTION 
 // Average in typecript
 // AUTHOR: Alex Ziskind on YouTube 
 // DATE: Accessed on 10 November 2025
 // VERSION: Video posted on 8 March 2023 
 // AVAILABLE: https://youtu.be/4zdBk6wisxc?si=PEP6w6Has0P0ZTQo

  const avg = (course: Course) => {
    const list = items.filter((i) => i.category === course);
    if (!list.length) return "0.00";
    const total = list.reduce((s, i) => s + i.price, 0);
    return (total / list.length).toFixed(2);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1b1513" },
          headerTintColor: "#f5e9d7",
          headerTitleStyle: { fontWeight: "800" },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" options={{ title: "Christofells App" }}>
          {(props) => (
             <HomeScreen
              {...props}
              items={items}
              removeItem={removeItem}
              averages={{
              Starters: avg("Starter" as Course),
              Mains: avg("Main" as Course),
              Desserts: avg("Dessert" as Course),
              } as any} 
            />
           )}
        </Stack.Screen>
        <Stack.Screen name="AddItem" options={{ title: "Add New Item" }}>
          {(props) => <AddItemScreen {...props} addItem={addItem} />}
        </Stack.Screen>
        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={{ title: "Filter Menu" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { StyleSheet } from "react-native";

const c = {
  bg: "#0D0D0D",         // Jet Black background
  text: "#000000ff",       // Black text
  input: "#2E2E2E",      // Charcoal Grey input fields
  border: "#3A3A3A",     // Slightly lighter charcoal border
  meta: "#B3B3B3",       // Muted neutral grey for labels
  accent: "#D4AF37",     // Antique Gold accent
  cta: "#800020",        // Burgundy CTA
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: c.bg,
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  header: {
    color: c.text,
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 0.8,
  },
  input: {
    backgroundColor: c.input,
    color: c.text,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: c.border,
    height: 52,
    paddingHorizontal: 14,
    marginVertical: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  pickerWrap: { marginVertical: 10 },
  label: {
    color: c.meta,
    marginLeft: 6,
    marginBottom: 6,
    fontWeight: "700",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  pickerBox: {
    backgroundColor: c.input,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: c.border,
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
  preview: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginTop: 14,
    borderWidth: 1,
    borderColor: c.border,
  },
  save: {
    backgroundColor: c.cta,      // Burgundy button
    padding: 16,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center",
    shadowColor: c.accent,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  saveText: {
    color: c.text,              // Ivory text on Burgundy
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.3,
  },
  cancel: {
    alignItems: "center",
    marginTop: 12,
  },
  cancelText: {
    color: c.accent,           // Antique Gold for cancel link
    fontWeight: "700",
    fontSize: 15,
  },
});
