import React from "react";
import BasicInfo from "./BasicInfo/BasicInfo";
import About from "./About/About";
import { Box, Button, Flex } from "@chakra-ui/react";
import Experience from "./Experience/Experience";
import CoActivities from "./CoActivities/CoActivities";
import ProjectComponent from "./Project/ProjectComponent";
import Education from "./Education/Education";

const PortfolioForm = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <Box border={"solid 8px #041C32"} borderRadius={"md"} m={5}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box width={{ base: "100%", md: "50%" }}>
            <BasicInfo />
          </Box>
          <Box width={{ base: "100%", md: "50%" }}>
            <About />
          </Box>
        </Flex>
        <Education />
        <Experience />
        <ProjectComponent />
        <CoActivities />
      </Box>
      <Flex justify="center" mb={5}>
        <Button
          mt={4}
          colorScheme="blue"
          variant={"outline"}
          onClick={handlePrint}
        >
          Print
        </Button>
      </Flex>
    </>
  );
};

export default PortfolioForm;
