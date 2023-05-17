import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const ModalForEdit = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSave = () => {
    // Logic to save the updated field values
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>
        <EditIcon />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding={"10px"}>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input
              placeholder="Paste image URL"
              // value={props.image}
              onChange={(e) => props.setImage(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              // value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              placeholder="Full Name"
              // value={props.fullName}
              onChange={(e) => props.setFullName(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              type="number"
              placeholder="Phone"
              // value={props.phone}
              onChange={(e) => props.setPhone(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              // value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>College</FormLabel>
            <Input
              placeholder="College"
              // value={props.college}
              onChange={(e) => props.setCollege(e.target.value)}
            />
          </FormControl>

          <ModalCloseButton />
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalForEdit;
