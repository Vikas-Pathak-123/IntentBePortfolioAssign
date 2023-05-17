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

const ProjectComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projects, setProjects] = useState([
    {
      projectName: "VibeChat",
      startDate: "2023-05-16",
      endDate: "2023-05-18",
      projectDetails:
        `<p><strong>Features:</strong></p><ul><li>Real-time chat, Typing indicators, One-to-one chat, Group chat, User search, Notifications, User profile viewing.</li></ul><p><strong>Tech Stack:</strong>&nbsp;React, Node.js, MongoDB</p><p><strong>Contribution:</strong></p><ul><li>Developed and deployed the project to production</li><li>Implemented real-time chat using Socket.io</li><li>Encrypted user data in MongoDB</li><li>Implemented user search and notifications</li><li>Designed and implemented the user interface</li></ul><p><a href="https://github.com/Vikas-Pathak-123/VibeChat" rel="noopener noreferrer" target="_blank"><strong>Code</strong></a> <a href="https://vibechat-177v.onrender.com/" rel="noopener noreferrer" target="_blank"><strong>Run</strong></a></p>`,
    },
  ]);
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [editingProjectIndex, setEditingProjectIndex] = useState(null);

  const handleAddProject = () => {
    onOpen();
    setProjectName("");
    setStartDate("");
    setEndDate("");
    setProjectDetails("");
    setEditingProjectIndex(null);
  };

  const handleSaveProject = () => {
    if (editingProjectIndex !== null) {
      const updatedProjects = [...projects];
      updatedProjects[editingProjectIndex] = {
        projectName,
        startDate,
        endDate,
        projectDetails,
      };
      setProjects(updatedProjects);
    } else {
      const newProject = {
        projectName,
        startDate,
        endDate,
        projectDetails,
      };
      setProjects([...projects, newProject]);
    }
    onClose();
  };

  const handleEditProject = (index) => {
    const project = projects[index];
    setProjectName(project.projectName);
    setStartDate(project.startDate);
    setEndDate(project.endDate);
    setProjectDetails(project.projectDetails);
    setEditingProjectIndex(index);
    onOpen();
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <Box p={4} bg="#04293A">
      <Box display={"flex"} justifyContent={"space-between"}>
        <Heading as="h2" size="lg" mb={4} color={"white"}>
          Project & Portfolio
        </Heading>
        <IconButton icon={<AddIcon />} onClick={handleAddProject} />
      </Box>

      {projects.map((project, index) => (
        <Box className="textBox" key={index} mb={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Box as="h3">
              <b>{project.projectName}</b>
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
                <b>Start:</b> {project.startDate}
              </p>
              <br />
              <p>
                <b>End:</b> {project.endDate}
              </p>
            </Box>
            <div
              dangerouslySetInnerHTML={{ __html: project.projectDetails }}
            ></div>
          </Box>
        </Box>
      ))}

      {/* Modal for adding/editing projects */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingProjectIndex !== null ? "Edit Project" : "Add Project"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Project Name</FormLabel>
                <Input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
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
                <FormLabel>Project Details</FormLabel>
                <ReactQuill
                  value={projectDetails}
                  onChange={setProjectDetails}
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

export default ProjectComponent;
