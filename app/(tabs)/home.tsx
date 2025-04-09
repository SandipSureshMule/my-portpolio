import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const skills = [
  {
    name: "Java",
    description: "Used for building object-oriented desktop and Android apps.",
    logo: require("../../assets/logos/java.png"),
  },
  {
    name: "Python",
    description: "Simple and versatile language, great for automation and AI.",
    logo: require("../../assets/logos/python.png"),
  },
  {
    name: "JavaScript",
    description: "Used for building interactive websites and web apps.",
    logo: require("../../assets/logos/js.png"),
  },
  {
    name: "Django",
    description: "Python-based framework for fast and secure web development.",
    logo: require("../../assets/logos/django.png"),
  },
  {
    name: "React Native",
    description: "Cross-platform mobile development using JavaScript.",
    logo: require("../../assets/logos/react.png"),
  },
  {
    name: "Firebase",
    description: "Real-time database, authentication, and hosting service.",
    logo: require("../../assets/logos/firebase.png"),
  },
  {
    name: "SQLite",
    description: "Lightweight database for mobile and embedded systems.",
    logo: require("../../assets/logos/mysql.png"),
  },
  {
    name: "Oracle PL sql",
    description: "Structured query language for managing Oracle databases.",
    logo: require("../../assets/logos/oracle.png"),
  },
];

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen() {


  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
           <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#fff" />
           </TouchableOpacity>
             <Text style={styles.pageHeader}>Home Page</Text>
          </View>

      <View style={styles.eduSection}>
  <Text style={styles.cardTitle}>🎓 Education</Text>

  <View style={styles.eduCard}>
    <Text style={styles.eduDegree}>MCA - Master of Computer Applications</Text>
    <Text style={styles.eduInstitute}>Savitribai Phule Pune University</Text>
    <Text style={styles.eduYear}>2022 - 2024</Text>
  </View>

  <View style={styles.eduCard}>
    <Text style={styles.eduDegree}>B.Sc in Chemistry</Text>
    <Text style={styles.eduInstitute}>Pune University</Text>
    <Text style={styles.eduYear}>2019 - 2022</Text>
  </View>

  <View style={styles.eduCard}>
    <Text style={styles.eduDegree}>Higher Secondary (12th)</Text>
    <Text style={styles.eduInstitute}>Maharashtra State Board</Text>
    <Text style={styles.eduYear}>2017 - 2019</Text>
  </View>

  <View style={styles.eduCard}>
    <Text style={styles.eduDegree}>Secondary Education (10th)</Text>
    <Text style={styles.eduInstitute}>Maharashtra State Board</Text>
    <Text style={styles.eduYear}>2016 - 2017</Text>
  </View>
</View>

      <Text style={styles.skillsSectionTitle}>🛠️ My Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.skillCard,
              pressed && styles.skillCardPressed,
            ]}
          >
            <View style={styles.skillRow}>
              <Image source={item.logo} style={styles.skillLogo} />
              <View style={{ flex: 1 }}>
                <Text style={styles.skillName}>{item.name}</Text>
                <Text style={styles.skillDesc}>{item.description}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 16,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft:20,
    marginBottom: 20,
  },
  
  backButton: {
    marginRight: 12,
  },
  
  pageHeader: {
    color: "#fff",
    marginLeft:20,

    fontWeight: "bold",
    fontSize: 24, // optional: makes it look more like a header
  },
  

  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#facc15",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 12,
  },
  cardContent: {
    fontSize: 14,
    color: "#f1f5f9",
    marginBottom: 6,
  },
  eduSection: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  
  eduCard: {
    backgroundColor: "#0f172a",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#38bdf8",
  },
  
  eduDegree: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#facc15",
    marginBottom: 4,
  },
  
  eduInstitute: {
    fontSize: 14,
    color: "#f1f5f9",
  },
  
  eduYear: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 2,
  },
  




  skillsSectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 12,
    marginTop: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  skillCard: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 20,
    width: (windowWidth - 48) / 2, // 16 left + 16 right padding + 8 gap
    marginBottom: 16,
    margin:10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  skillCardPressed: {
    backgroundColor: "#334155",
  },
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  skillLogo: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#facc15",
  },
  skillDesc: {
    fontSize: 12,
    color: "#f1f5f9",
    marginTop: 4,
  },
});
