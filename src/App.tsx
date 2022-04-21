import react, { useEffect } from "react";
import ReactAdmin from "./ReactAdmin";
import { Rings } from "react-loader-spinner";
import { Flex } from "@chakra-ui/react";

export default function App() {
  //call loader component then redirect to the main page page
const delay = 5;

const [show, setShow] = react.useState(false);

useEffect(
  () => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  },
  [setShow]
);
  return show ? (
    <>
    <ReactAdmin />
    </>
    ) : (
      <Flex bg="gray.50" align="center" justify="center" h="100vh">
      <Rings
        // type="Pulse"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={5000}
      />
    </Flex>
    );
   
}
