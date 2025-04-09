// app/(tabs)/pdf.tsx
import React from "react";
import { View,TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native";
import * as Print from "expo-print";




export default function ResumeScreen() {


    const handlePrint = async () => {
        await Print.printAsync({
          html: `
            <html>
              <head>
                <meta charset="utf-8" />
                <style>
                  body { font-family: Arial; padding: 40px; }
                  h1 { text-align: center; color: #111827; }
                  h2 { margin-top: 30px; color: #1f2937; }
                  p { font-size: 14px; line-height: 1.6; color: #374151; }
                  .section { margin-bottom: 30px; }
                </style>
              </head>
              <body>
                <h1>Sandip Suresh Mule</h1>
                <p style="text-align:center;">Pune, Maharashtra | sandipmule1997@gmail.com | +91 8308903796</p>
      
                <div class="section">
                  <h2>Professional Summary</h2>
                  <p>Enthusiastic and dedicated software developer with expertise in Java, Python, Django, React Native, and web/mobile application development. Proven ability to build full-stack solutions, manage databases, and deliver intuitive user interfaces. Passionate about problem-solving and continuous learning.</p>
                </div>
      
                <div class="section">
                  <h2>Skills</h2>
                  <p>• Java, Python, JavaScript<br/>
                  • Django, React Native, XAMPP, Android Studio<br/>
                  • SQL, SQLite, Firebase</p>
                </div>
      
                <div class="section">
                  <h2>Projects</h2>
                  <p><strong>Online Market Shop (Java):</strong> Desktop app for browsing and purchasing with customer and admin modules.</p>
                  <p><strong>AgriTech Market Shop (Django):</strong> Web platform for agriculture product transactions with admin panel.</p>
                  <p><strong>The Cake Studio (React Native):</strong> Mobile app for a cake shop with Firebase backend and admin dashboard.</p>
                </div>
      
                <div class="section">
                  <h2>Education</h2>
                  <p>• MCA<br/>• B.Sc in Chemistry<br/>• Higher Secondary (12th)<br/>• Secondary Education (10th)</p>
                </div>
      
                <div class="section">
                  <h2>Certifications</h2>
                  <p>• HTML5<br/>
                  • Programming Fundamentals using Python<br/>
                  • Jira Project Management<br/>
                  • Basics of Scrum<br/>
                  • Basics of Microsoft PowerBI<br/>
                  • BootCamp on Artificial Intelligence</p>
                </div>
              </body>
            </html>
          `,
        });
      };
      

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.name}>Sandip Suresh Mule</Text>
      <Text style={styles.contact}>
        Pune, Maharashtra  |  sandipmule1997@gmail.com  |  +91 8308903796
      </Text>

      {/* Summary */}
      <Text style={styles.sectionTitle}>Professional Summary</Text>
      <Text style={styles.paragraph}>
        Enthusiastic and dedicated software developer with expertise in Java,
        Python, Django, React Native, and web/mobile application development.
        Proven ability to build full-stack solutions, manage databases, and
        deliver intuitive user interfaces. Passionate about problem-solving and
        continuous learning.
      </Text>

      {/* Skills */}
      <Text style={styles.sectionTitle}>Skills</Text>
      <Text style={styles.paragraph}>
      • Programming Languages: Java, Python, JavaScript                    {"\n"}
      • Frameworks & Tools: Django, React Native, XAMPP, Android Studio    {"\n"}
      • Databases: SQL, SQLite, Firebase                                   {"\n"}
      </Text>

      {/* Projects */}
      <Text style={styles.sectionTitle}>Projects</Text>
      <Text style={styles.projectTitle}>1. Online Market Shop (Java)</Text>
      <Text style={styles.projectDesc}>
        Desktop application for browsing and purchasing products with customer and admin modules.

      </Text>

      <Text style={styles.projectTitle}>2. AgriTech Market Shop (Django)</Text>
      <Text style={styles.projectDesc}>
        Web-based agriculture product platform for farmers and buyers. Role-based access and admin panel included.
      </Text>

      <Text style={styles.projectTitle}>3. The Cake Studio (React Native)</Text>
      <Text style={styles.projectDesc}>
        Mobile app for a cake shop including customer ordering and admin dashboard with Firebase backend.
      </Text>

      {/* Education */}
      <Text style={styles.sectionTitle}>Education</Text>
      <Text style={styles.paragraph}>
     
      • MCA (Master of Computer Applications) {"\n"}
      • B.Sc in Chemistry                    {"\n"}
      • Higher Secondary (12th)              {"\n"}
      • Secondary Education (10th)           {"\n"}
      </Text>


        {/* Certification */}
      <Text style={styles.sectionTitle}>Certification</Text>
      <Text style={styles.paragraph}>
     
      • HTML5         {"\n"}
      • Programming Fundamentals using Python     {"\n"}
      • Jira Project Management           {"\n"}
      • Basics of Scrum                  {"\n"}
      • Basics of Microsoft PowerBI        {"\n"}
      • BootCamp on Artificial Intelligence {"\n"}
      </Text>
      
      <TouchableOpacity style={styles.printButton} onPress={handlePrint}>
  <Text style={styles.printButtonText}>Print</Text>
</TouchableOpacity>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width:800,
    alignSelf:"center",
    backgroundColor: "#fff",
    padding: 60,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 4,
  },
  contact: {
    fontSize: 14,
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    color: "#1f2937",
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
    color: "#374151",
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 12,
    color: "#111827",
  },
  projectDesc: {
    fontSize: 14,
    color: "#4b5563",
    marginTop: 4,
  },
  printButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 6,
    marginTop:30,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: "center",
    marginBottom: 12,
  },
  
  printButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  
});
