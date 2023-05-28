import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider, Center } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box height={"600px"} bgColor={"blue.100"}>

      <Center>Hello world hehe</Center>
      </Box>
    </NativeBaseProvider>
  );
}