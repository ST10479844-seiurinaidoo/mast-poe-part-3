// CODE ATTRIBUTION 
// TITLE: IIE Modual Manual 2025 
// AUTHOR: The Independent Institute of Education (Pty) Ltd 
// VERSION: FIRST EDITION: 2012 
// AVAILABLE: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B2D7589E9-374B-43DE-9596-EF35D83EBD02%7D&file=WEDE5020MM.docx&action=default&mobileredirect=true 
// DATE ACCESSED: 10 November 2025 

import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/736x/b9/31/6b/b9316b4697be19cc21c69fb008f1865e.jpg",
        }}
        style={styles.bg}
      >
        <View style={styles.overlay}>
          <View style={styles.center}>
            <Text style={styles.title}>Christofells Fine Dining App</Text>
            <Text style={styles.subtitle}>Indulge in a Taste of Perfection</Text>
            <TouchableOpacity style={styles.cta} onPress={() => navigation.replace("Home")}>
              <Text style={styles.ctaText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D", // Jet Black background
  },

  bg: {
    flex: 1,
    justifyContent: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(13, 13, 13, 0.65)", // softer cinematic overlay
  },

  center: {
    alignItems: "center",
    paddingHorizontal: 28,
  },

  title: {
    color: "#D4AF37", // Antique Gold
    fontSize: 46,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 1,
    textShadowColor: "#D4AF3733",
    textShadowRadius: 10,
    marginBottom: 10,
  },

  subtitle: {
    color: "#F8F5F0", // Ivory text
    fontSize: 18,
    marginTop: 8,
    marginBottom: 32,
    textAlign: "center",
    letterSpacing: 0.5,
    lineHeight: 22,
  },

  cta: {
    backgroundColor: "#800020", // Burgundy button
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
    shadowColor: "#D4AF37", // subtle gold glow
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },

  ctaText: {
    color: "#F8F5F0", // Ivory text
    fontWeight: "900",
    fontSize: 18,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
});
