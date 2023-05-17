import { useState } from "react";
import { Text, Heading, Box } from "@chakra-ui/react";
import ModalForEdit from "./Modal/ModalForEdit";
import Skill from "../Skill/Skill";

const About = () => {
  const [about, setAbout] = useState(
    "An enthusiastic Web developer fresher who is capable to use technical skills for the betterment of the organization. The full Stack Developer course has enhanced my proficiency in developing web applications and looking forward to working in a competitive environment that enhances overall learning. To obtain a challenging position that fully utilizes my skill and provides me with suitable opportunities to grow my technical and communication skill."
  );
  return (
    <>
      <Box p={4} bg="#2E4F4F" minHeight="100%">
        <Box display={"flex"} justifyContent={"space-between"} mt={5}>
          <Heading as="h2" size="lg" color={"white"}>
            About & Skills
          </Heading>
          <ModalForEdit setAbout={setAbout} />
        </Box>

        <Text
          mt={10}
          p={8}
          borderRadius={"md"}
          resize="none"
          bg="white"
          width="100%"
          fontSize={"lg"}
          color="cyan.900"
        >
          {about}
        </Text>
        <Skill />
      </Box>
    </>
  );
};

export default About;
