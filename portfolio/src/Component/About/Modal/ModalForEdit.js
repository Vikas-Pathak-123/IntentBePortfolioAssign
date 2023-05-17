import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";
import { FormControl, FormLabel, Button } from "@chakra-ui/react";
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
            <FormLabel>About</FormLabel>
            <Textarea
              placeholder="About"
              // value={props.college}
              onChange={(e) => props.setAbout(e.target.value)}
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
