import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ProjectsScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.heading}>🚀 My Projects</Text>
      </View>

      {/* Project Cards */}
      <View style={styles.projectCard}>
        <Text style={styles.title}>🛒 Online Market Shop</Text>
        
        <Text style={styles.stackTitle}>📌 Features:</Text>
        <Text style={styles.stack}>  {"\n"}
        • User registration and login authentication      {"\n"}
        • Dynamic product listing with images and details  {"\n"}
        • Shopping cart functionality with quantity management   {"\n"}
        • Order placement and history tracking        
        </Text>
        <Text style={styles.stackTitle}>💻 Tech Used</Text>
        <Text style={styles.stack}> • Java • Swing • MySQL</Text>
        <Text style={styles.stackTitle}>📱 Platforms</Text>
        <Text style={styles.stack}>• Website</Text>

      </View>

      <View style={styles.projectCard}>
        <Text style={styles.title}>🌾 AgriTech Market Shop</Text>
        <Text style={styles.stackTitle}> 📌 Features:</Text>  {"\n"}
        <Text style={styles.stack}>
        • Farmers can list crops/products and set prices    {"\n"}
        • Buyers can browse and place orders                {"\n"}
        • Admin dashboard for order and inventory management {"\n"}
        • Secure user authentication        </Text>         
        <Text style={styles.stackTitle}>💻 Tech Used</Text>
        <Text style={styles.stack}>• Python • Django • SQLite • HTML/CSS</Text>
        <Text style={styles.stackTitle}>📱 Platforms</Text>
        <Text style={styles.stack}>Website </Text>

      </View>

      <View style={styles.projectCard}>
        <Text style={styles.title}>🍰 The Cake Studio</Text>
        <Text style={styles.stackTitle}>📌 Features:</Text>  {"\n"}
        <Text style={styles.stack}>
        • Browse cake categories with images and price   {"\n"}
        •  Custom cake ordering option                     {"\n"}
        •  Custom cake ordering option                    {"\n"}
        •  Real-time order updates and notifications      {"\n"}
        • User authentication and Firebase data storage       </Text> 
        <Text style={styles.stackTitle}>💻 Tech Used</Text>
        <Text style={styles.stack}>React Native • Firebase</Text>
        <Text style={styles.stackTitle}>📱 Platforms</Text>
        <Text style={styles.stack}>• Website • Android App • iOS App</Text>

      </View>

      <View style={styles.projectCard}>
  <Text style={styles.title}>🧪 Gurukrupa Online Pathology Laboratory</Text>
  <Text style={styles.stackTitle}>📌 Features:</Text>  {"\n"}
        <Text style={styles.stack}>
        • Online appointment/test booking         {"\n"}
        • Upload and access lab reports in PDF     {"\n"}
        • Real-time notification of report availability   {"\n"}
        • Admin panel to manage test data and patient records       </Text> 
  <Text style={styles.stackTitle}>💻 Tech Used</Text>
  <Text style={styles.stack}>React Native • Firebase</Text>
  <Text style={styles.stackTitle}>📱 Platforms</Text>
  <Text style={styles.stack}>• Website • Android App • iOS App</Text>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0f172a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 12,
    textShadowColor: '#1e293b',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  projectCard: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: '#f1f5f9',
    marginBottom: 10,
  },
  stackTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#facc15',
    marginTop: 10,
    marginBottom: 4,
  },
  stack: {
    fontSize: 13,
    color: '#94a3b8',
    fontStyle: 'italic',
  },
});
