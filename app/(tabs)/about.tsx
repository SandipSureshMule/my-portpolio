import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import { LinearGradient } from "expo-linear-gradient"; // if using Expo
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function AboutMeScreen() {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}> 
      <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#fff" />
           </TouchableOpacity>
             <Text style={styles.pageHeader}>About Me</Text>
          </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>👨‍💻 About Me</Text>
        <Text style={styles.description}>
        Hi, I'm Sandip Suresh Mule, {"\n"}
        I'm a passionate and dedicated software developer based in Pune, India. I recently completed my Master's in Computer Applications (MCA) and have been actively exploring the world of programming and technology.
With hands-on experience in Java, Python, Django, JavaScript, and React Native, I enjoy creating intuitive and impactful software solutions. My journey includes developing projects like an Online Market Shop, an AgriTech platform, and a mobile app for The Cake Studio, each showcasing my love for building practical applications. 
I'm also familiar with tools and platforms like Firebase, Android Studio, XAMPP, and databases like SQL and SQLite. I'm always curious and love learning new technologies — whether it's building backend logic or designing clean mobile interfaces.
Beyond coding, I value teamwork, continuous learning, and solving real-world problems through tech. I aim to be part of projects that make a difference and allow me to grow as a developer and as a person.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>🎯 Goals</Text>
        <Text style={styles.description}>
       
         
        <Text style={{ fontWeight: "bold",  color:"#ff9999" }}> 🖥️ Become a Full-Stack Developer :</Text> {"\n"}
          Enhance my skills in both frontend and backend development using technologies like React, Node.js, Django, and Firebase to build complete and scalable applications.
          {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}> 🌍 Contribute to Open Source Projects: </Text> {"\n"}
          Start contributing to meaningful open-source projects on GitHub to collaborate with the global developer community and improve my coding standards.
          {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}> 📱 Build Real-World Applications: </Text> {"\n"}
         Create software solutions that solve real-life problems, especially in areas like education, healthcare, agriculture, and local businesses.
         {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}> 🏅 Earn Industry Certifications: </Text> {"\n"}
         Obtain certifications in cloud platforms (like AWS or Google Cloud), advanced JavaScript frameworks, and database management to validate and expand my expertise.
         {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}> 🤝 Work with a Collaborative Development Team: </Text> {"\n"}
         Join a tech-driven organization where I can work with experienced developers, learn industry best practices, and grow in a team-oriented environment.
         {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}> ⚙️ Stay Updated with Emerging Technologies: </Text> {"\n"}
         Keep learning new trends like AI, machine learning, data analytics, and DevOps to stay ahead in the fast-evolving tech landscape.
         {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}> 🚀 Launch a Personal Product or App: </Text> {"\n"}
         Bring one of my ideas to life by designing, building, and launching a fully functional mobile or web application under my own brand.
         {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}> 🤗 Mentor or Guide Aspiring Developers: </Text> {"\n"}
          Share my knowledge through blogs, videos, or community events and help others start their journey into programming.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>🎓 Courses and Certifications </Text>
        <Text style={styles.description}>
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}>📄 HTML5 : </Text> {"\n"}
        This course laid the groundwork for my journey into web development. I learned how to:{"\n"}
        • Structure web content using semantic HTML tags.         {"\n"}
        • Enhance accessibility and SEO using proper HTML5 elements.  {"\n"}
        • Integrate multimedia (audio, video) effectively into web pages.  {"\n"}
        • Work with form elements, validations, and basic input types. {"\n"}
        • This foundation allows me to build well-structured, standards-compliant websites.{"\n"}
        
        <Text>
        {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}>🐍 Programming Fundamentals Using Python : </Text> {"\n"}
        This course sharpened my problem-solving skills using Python. Key areas covered: {"\n"}
        • Syntax, variables, data types, and control flow.{"\n"}
        • Functions, loops, and error handling.{"\n"}
        • List, tuple, dictionary, and set manipulation.{"\n"}
        • Writing efficient, readable, and modular code. It enhanced my ability to quickly prototype and test small applications or algorithms using Python. {"\n"}  {"\n"}
       
       
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}>🛠️ Jira Project Management  : </Text> {"\n"}
        Through this course, I explored agile project management using Jira. I gained:   {"\n"}
        • Hands-on experience with Jira boards, backlog grooming, and sprint planning         {"\n"}
        • Insights into creating and managing tasks, epics, user stories, and bug tracking.  {"\n"}
        • Experience in managing workflows and permissions for better collaboration. This helps me stay organized and manage development timelines efficiently in team projects.  {"\n"}
       

        {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}>🔁 Basics of Scrum  : </Text> {"\n"}
        This course introduced me to Scrum methodologies and their real-world applications. I learned: {"\n"}
        • The roles of Product Owner, Scrum Master, and Development Team.         {"\n"}
        • Agile practices such as Sprint Planning, Daily Stand-ups, Sprint Reviews, and Retrospectives.  {"\n"}
        • The importance of iterative development and feedback loops. This training helps me work effectively in agile teams and contribute to product delivery cycles.  {"\n"}
        
        
        {"\n"}
        <Text style={{ fontWeight: "bold", color:"#ff9999" }}>🤖 BootCamp on Artificial Intelligence  : </Text> {"\n"}
        This was an exciting introductory bootcamp into the world of AI. I explored:         {"\n"}
        • The basics of AI, Machine Learning, and Deep Learning.  {"\n"}
        • Real-world applications like AI in healthcare, agriculture, and finance.{"\n"}
        • Tools like Python libraries for data analysis and machine learning (NumPy, Pandas, Scikit-learn).  {"\n"}
        • It sparked my interest in AI and motivated me to keep learning about intelligent systems.{"\n"}
        </Text>
        </Text>
        
        
        
        
        
      </View>

      <View style={styles.hobbySection}>
  <Text style={styles.sectionTitle}>🎯 My Hobbies</Text>
  <Text style={styles.hobbyText}>• Coding & exploring new technologies</Text>
  <Text style={styles.hobbyText}>• Playing chess for strategic thinking</Text>
  <Text style={styles.hobbyText}>• Reading books on tech and motivation</Text>
  <Text style={styles.hobbyText}>• Watching technology related YouTube channels</Text>
  <Text style={styles.hobbyText}>• Designing UI/UX interfaces creatively</Text>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  header: {
    alignItems: "flex-start",
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft:20,
  },
  pageHeader: {
    color: "#fff",
    marginLeft:20,
    fontWeight: "bold",
    fontSize: 24, // optional: makes it look more like a header
  },
  backButton: {
    marginRight: 12,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 1,
  },
  tagline: {
    color: "#f1f5f9",
    fontSize: 14,
    marginTop: 4,
  },
  section: {
    backgroundColor: "#1e293b",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    color: "#38bdf8",
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontStyle: 'italic',
    color: "#f1f5f9",
    lineHeight: 22,
    
  },

  hobbySection: {
    backgroundColor: "#1e293b",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 12,
  },
  hobbyText: {
    fontSize: 14,
    color: "#f1f5f9",
    marginBottom: 6,
    fontStyle: 'italic',
  },
  

});
