import React, { useRef } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Box,
} from "@chakra-ui/react";


const Skill = () => {
  const skillsRef = useRef(["HTML", "CSS", "JavaScript", "React", "Node"]);

  return (
    <Box
      p={4}
      //   bg="#2E4F4F"
      display={"flex"}
      justifyContent={"center"}
      flexWrap={"wrap"}
    >
    
      {skillsRef.current.map((skill, index) => (
        <Box
          className="textBox"
          maxWidth={"fit-content"}
          margin={2}
          pr={6}
          key={index}
        >
          <Editable defaultValue={skill}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Box>
      ))}
    </Box>
  );
};

export default Skill;
