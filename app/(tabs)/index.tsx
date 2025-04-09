import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/(tabs)/projects");
  };

  const handleOpenPdf = () => {
    router.push("/(tabs)/pdf");
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logo}>Sandip Suresh Mule</Text>
          <Text style={styles.logoHeader}>
            HTML | CSS | REACT JS | ORACLE | NODE JS | FIREBASE | DBA{"\n"}
            JS | PYTHON | JAVA | SQL | NOSQL | LINUX | POWER BI | PHP
          </Text>
        </View>

        <View style={styles.navMenu}>
          <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)/about")}>
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)/projects")}>
            <Text style={styles.navText}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)/contacts")}>
            <Text style={styles.navText}>Contacts</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Section */}
      <View style={styles.main}>
        {/* Image on the Left now */}
        <View style={styles.leftContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={require("@/assets/images/Profile.png")}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Text on the Right now */}
        <View style={styles.rightContainer}>
          <Text style={styles.hello}>
            Hello <Text>!</Text>
          </Text>
          <Text style={styles.name}>I'm Sandip</Text>
          <Text style={styles.title}>
            I am a passionate and hardworking software developer with a strong
            interest in building useful and creative applications. I have
            completed my Master’s in Computer Applications and have hands-on
            experience working with technologies like Java, Python, Django, and
            React Native.

            I enjoy solving problems through code and have created projects like
            an online market shop, an agriculture-based platform, and a mobile
            app for a cake shop. I am also familiar with tools like XAMPP,
            Android Studio, and databases like SQL, SQLite, and Firebase.

            I am always eager to learn new things and improve my skills. I work
            well in a team and want to use my knowledge to help build real-world
            software solutions that make a difference.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.projectButton} onPress={handleStart}>
              <Text style={styles.projectText}>My Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resumeButton} onPress={handleOpenPdf}>
              <Text style={styles.resumeText}>Download Resume</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 50,
    paddingRight: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },

  logoWrapper: {
    marginLeft: 20,
    marginRight: 10,
  },

  logo: {
    color: "#fff",
    fontSize: 34,
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 1.2,
    textShadowColor: "#ef4444",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 0,
  },

  logoHeader: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 18,
    marginTop: 2,
  },

  navMenu: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  navText: {
    color: "#cbd5e1",
    fontSize: 14,
    textAlign: "center",
    textAlignVertical: "center",
  },

  main: {
    flex: 1,
    flexDirection: width > 768 ? "row" : "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  imageWrapper: {
    borderRadius: 170,
    padding: 10,
    borderWidth: 6,
    borderColor: "rgba(239, 68, 68, 0.5)",
    backgroundColor: "#0f172a",
    shadowColor: "#ef4444",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },

  profileImage: {
    width: 280,
    height: 280,
    borderRadius: 140,
  },

  leftContainer: {
    flex: 1,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  rightContainer: {
    flex: 1,
    alignItems: width > 768 ? "flex-start" : "center",
    justifyContent: "center",
    marginRight: 30,
  },

  hello: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  name: {
    color: "#e2e8f0",
    fontSize: 24,
    marginTop: 8,
  },

  title: {
    color: "#fff",
    fontSize: 15,
    fontStyle: "italic",
    marginTop: 10,
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 16,
  },

  projectButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  projectText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },

  resumeButton: {
    borderColor: "#ef4444",
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  resumeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
