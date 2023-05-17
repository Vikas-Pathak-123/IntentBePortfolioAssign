import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import ModalForEdit from "./Modal/ModalForEdit";
import parse from "html-react-parser";
import "../../App.css";

const CoActivities = () => {
  const [activity, setActivity] = useState(
    `<ul><li>Newton Coding Contests have a global rank of 484 for Mar 2023</li><li>Leetcode Coding Contests have a global rank of 1450 for Mar 2023</li><li>Participation in coding contests like Hackathon at Newton School</li><li>Playing guitar, Listening podcast, Volunteering.</li></ul><p><br></p>`
  );
  return (
    <>
      <Box p={4} bg="#04293A">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Heading as="h2" size="lg" mb={4} color={"white"}>
            Co Curricular Activites
          </Heading>
          <ModalForEdit setActivity={setActivity} />
        </Box>

        <div className="textBox">{parse(activity)}</div>
      </Box>
    </>
  );
};




export default CoActivities;