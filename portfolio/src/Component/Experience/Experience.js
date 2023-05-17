import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Experience = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [experience, setExperience] = useState([
    {
      experienceName: "Newton School",
      startDate: "2022-03-29",
      endDate: "2023-05-18",
      experienceDetail: `<ul><li>Full Stack Web Development and Problem-Solving Technical Stack.</li><li>Technical Stack Learned: HTML, CSS, JavaScript, React, Java, Node.js, MongoDB.</li><li>Participated in various coding competitions held by Newton School.</li><li>Worked on various projects.</li></ul><p><br></p>`,
    },
  ]);
  const [experienceName, setExperienceName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [experienceDetail, setExperienceDetail] = useState("");
  const [editingExperienceIndex, setEditingExperienceIndex] = useState(null);

  const handleAddProject = () => {
    onOpen();
    setExperienceName("");
    setStartDate("");
    setEndDate("");
    setExperienceDetail("");
    setEditingExperienceIndex(null);
  };

  const handleSaveProject = () => {
    if (editingExperienceIndex !== null) {
      const updatedexperience = [...experience];
      updatedexperience[editingExperienceIndex] = {
        experienceName,
        startDate,
        endDate,
        experienceDetail,
      };
      setExperience(updatedexperience);
    } else {
      const newExperience = {
        experienceName,
        startDate,
        endDate,
        experienceDetail,
      };
      setExperience([...experience, newExperience]);
    }
    onClose();
  };

  const handleEditProject = (index) => {
    const exp = experience[index];
    setExperienceName(exp.experienceName);
    setStartDate(exp.startDate);
    setEndDate(exp.endDate);
    setExperienceDetail(exp.experienceDetail);
    setEditingExperienceIndex(index);
    onOpen();
  };

  const handleDeleteProject = (index) => {
    const updatedexperience = [...experience];
    updatedexperience.splice(index, 1);
    setExperience(updatedexperience);
  };

  return (
    <Box p={4} bg="#04293A">
      <Box display={"flex"} justifyContent={"space-between"}>
        <Heading as="h2" size="lg" mb={4} color={"white"}>
          Experience
        </Heading>
        <IconButton icon={<AddIcon />} onClick={handleAddProject} />
      </Box>

      {experience.map((experience, index) => (
        <Box className="textBox" key={index} mb={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Box as="h3">
              <b>{experience.experienceName}</b>
            </Box>
            <div>
              <IconButton
                icon={<EditIcon />}
                variant="outline"
                colorScheme="green"
                onClick={() => handleEditProject(index)}
              />{" "}
              {/* Add a delete button */}
              <IconButton
                variant="outline"
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => handleDeleteProject(index)}
              />
            </div>
          </Box>
          {/* Display project details */}
          <Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <p>
                <b>Start:</b> {experience.startDate}
              </p>
              <br />
              <p>
                <b>End:</b> {experience.endDate}
              </p>
            </Box>
            <div
              dangerouslySetInnerHTML={{ __html: experience.experienceDetail }}
            ></div>
          </Box>
        </Box>
      ))}

      {/* Modal for adding/editing experience */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingExperienceIndex !== null ? "Edit Project" : "Add Project"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Input
                  value={experienceName}
                  onChange={(e) => setExperienceName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Start Date</FormLabel>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Experience Details</FormLabel>
                <ReactQuill
                  value={experienceDetail}
                  onChange={setExperienceDetail}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSaveProject}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Experience;
