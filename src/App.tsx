import { useState } from "react";
import { useFormik } from "formik";
import Axios from "axios";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import ReactAdmin from "./ReactAdmin";
export default function App() {
  
  // const formik = useFormik({
  //   initialValues: {
  //     website_name: "",
  //     website_url: "",
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values));
  //     Axios.post("http://localhost:3002/api/insert",{website_name:values.website_name, website_url:values.website_url})
  //     .then(res => {
  //       alert(res.data.message);
  //     })
  //   },
  // });
  return (
    <>
    <ReactAdmin />    
    {/* <Flex bg="gray.50" align="center" justify="center" h="100vh">
      <Box boxShadow="md" width={500} bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="website">Website's Name:</FormLabel>
              <Input
                id="website_name"
                name="website_name"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.website_name}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="website">Website's URL:</FormLabel>
              <Input
                id="website_url"
                name="website_url"
                type="url"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.website_url}
              />
            </FormControl>
            <Button type="submit" colorScheme="purple">
              Add new record
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex> */}
    </>

  );
}
