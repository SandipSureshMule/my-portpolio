import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ContactScreen() {
  const navigation = useNavigation();

  const handleEmail = () => {
    Linking.openURL('mailto:sandipmule1997@gmail.com');
  };

  const handlePhone = () => {
    Linking.openURL('tel:+91 8308903796');
  };

  const handleLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/sandip-mule-b05508172/');
  };

  const handleFacebook = () => {
    Linking.openURL('https://www.facebook.com/sandip.mule.374');
  };

  const handleInstagram = () => {
    Linking.openURL('https://www.instagram.com/master.piece.1997');
  };

  const ContactItem = ({ icon, label, value, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.info}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <Ionicons name="arrow-back" size={24} color="#fff" />
  </TouchableOpacity>
  <Text style={styles.heading}>📬 Contact Me</Text>
</View>

      <ContactItem
        icon={<Entypo name="email" size={24} color="#38bdf8" />}
        label="Email"
        value="sandipmule1997@gmail.com"
        onPress={handleEmail}
      />

      <ContactItem
        icon={<Feather name="phone-call" size={24} color="#4ade80" />}
        label="Phone"
        value="+91 8308903796"
        onPress={handlePhone}
      />

      <ContactItem
        icon={<Entypo name="linkedin" size={24} color="#0a66c2" />}
        label="LinkedIn"
        value="linkedin.com/in/sandip-mule-b05508172"
        onPress={handleLinkedIn}
      />

      <ContactItem
        icon={<Entypo name="facebook" size={24} color="#1877f2" />}
        label="Facebook"
        value="facebook.com/SandipSureshMule"
        onPress={handleFacebook}
      />

      <ContactItem
        icon={<Entypo name="instagram" size={24} color="#e1306c" />}
        label="Instagram"
        value="instagram.com/master.piece.1997"
        onPress={handleInstagram}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    paddingTop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  backButton: {
    marginRight: 10,
  },
  
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  
 
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  label: {
    color: '#38bdf8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    color: '#f1f5f9',
    fontSize: 14,
    marginTop: 2,
  },
});
