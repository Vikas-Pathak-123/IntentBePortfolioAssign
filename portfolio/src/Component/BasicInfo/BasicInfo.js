import { Box, Image, Text, VStack, Heading } from "@chakra-ui/react";
import ModalForEdit from "./Modal/ModalForEdit";
import React, { useState } from "react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";


function BasicInfo() {
  const [title, setTitle] = useState(["Software Developer", "MERN Stack","Vikas Pathak"]);
  const [fullName, setFullName] = useState("Vikas Pathak");
  const [phone, setPhone] = useState("8574259050");
  const [email, setEmail] = useState("123vikas.vp79@gmail.com");
  const [college, setCollege] = useState(
    "Indira Gandhi National Open University"
  );
  const [image, setImage] = useState(
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
  );

  return (
    <Box p={4} bg="green.100" minHeight={"100%"} >
      <VStack spacing={4} align="center" mt={5}>
        <Image
          // border={"1px solid #04293A"}
          boxShadow={"5px 5px 30px black"}
          borderRadius="full"
          boxSize="150px"
          src={image}
          alt={fullName}
        />

        <Heading as="h2" size="lg">
          <Typewriter
            options={{
              strings: title,
              autoStart: true,
              loop: true,
            }}
          />
          {/* {title} */}
        </Heading>
        <Text fontSize={"20px"}>{fullName}</Text>
        <Text>
          <PhoneIcon />
          &nbsp;&nbsp;{phone}
        </Text>
        <Text>
          <EmailIcon />
          &nbsp;&nbsp;{email}
        </Text>
        <Text>{college}</Text>
        <ModalForEdit
          title={title}
          setTitle={setTitle}
          phone={phone}
          setPhone={setPhone}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          college={college}
          setCollege={setCollege}
          image={image}
          setImage={setImage}
        />
      </VStack>
    </Box>
  );
}

export default BasicInfo;
