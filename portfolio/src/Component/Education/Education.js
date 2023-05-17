import React, { useState } from "react";
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

const Education = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [educations, setEducations] = useState([
    {
      institution: "Indira Gandhi National Open University , Delhi",
      degree: "Master of Computer Application",
      startDate: "2018-07-01",
      endDate: "2022-12-30",
    },
  ]);
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);

  const handleAddEducation = () => {
    onOpen();
    setInstitution("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setEditingEducationIndex(null);
  };

  const handleSaveEducation = () => {
    if (editingEducationIndex !== null) {
      const updatedEducations = [...educations];
      updatedEducations[editingEducationIndex] = {
        institution,
        degree,
        startDate,
        endDate,
      };
      setEducations(updatedEducations);
    } else {
      const newEducation = {
        institution,
        degree,
        startDate,
        endDate,
      };
      setEducations([...educations, newEducation]);
    }
    onClose();
  };

  const handleEditEducation = (index) => {
    const education = educations[index];
    setInstitution(education.institution);
    setDegree(education.degree);
    setStartDate(education.startDate);
    setEndDate(education.endDate);
    setEditingEducationIndex(index);
    onOpen();
  };

  const handleDeleteEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  return (
    <Box p={4} bg="#04293A">
      <Box display="flex" justifyContent="space-between">
        <Heading as="h2" size="lg" mb={4} color="white">
          Education
        </Heading>
        <IconButton icon={<AddIcon />} onClick={handleAddEducation} />
      </Box>

      {educations.map((education, index) => (
        <Box className="textBox" key={index} mb={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Box as="h3">
              <b>{education.institution}</b>
            </Box>
            <div>
              <IconButton
                icon={<EditIcon />}
                variant="outline"
                colorScheme="green"
                onClick={() => handleEditEducation(index)}
              />{" "}
              <IconButton
                variant="outline"
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => handleDeleteEducation(index)}
              />
            </div>
          </Box>
          <Box>
            <Box display="flex" justifyContent="space-between">
              <p>
                <b>Degree:</b> {education.degree}
              </p>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <p>
                <b>Start Date:</b> {education.startDate}
              </p>
              <p>
                <b>End Date:</b> {education.endDate}
              </p>
            </Box>
          </Box>
        </Box>
      ))}

      {/* Modal for adding/editing education */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingEducationIndex !== null
              ? "Edit Education"
              : "Add Education"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Institution</FormLabel>
                <Input
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Degree</FormLabel>
                <Input
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
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
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSaveEducation}>
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

export default Education;
