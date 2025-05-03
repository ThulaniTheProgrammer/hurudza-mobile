import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Initial route */}
      <Stack.Screen name="index" options={{ title: "Welcome", headerShown: false,  }} />
    
      <Stack.Screen name="Home" options={{ title: "Home", headerShown: false, }}/>
      <Stack.Screen name="Marketplace" options={{ title: "Marketplace", headerShown: false, }}/>
      <Stack.Screen name="Partners" options={{ title: "Partners", headerShown: false, }}/>
    </Stack>
  );
}
