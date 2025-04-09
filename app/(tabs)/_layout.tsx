// app/_layout.tsx
import { Stack, useRouter, usePathname } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  const pathname = usePathname();

  // Sidebar is hidden on the initial home screen
  const hideSidebarOn = ["@/(tabs)/index"];

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {/* Show sidebar only if not on /home */}

      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}
