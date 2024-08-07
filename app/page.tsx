import Image from "next/image";
import styles from "./page.module.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function Home() {
  return (
    <MantineProvider>
      <App />
    </MantineProvider>
  );
}
