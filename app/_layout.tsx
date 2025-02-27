// app/_layout.tsx
import { Stack } from "expo-router";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Stack />
    </>
  );
}
