import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FormControl,  Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const ModalForEdit = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const handleSave = () => {
    // Logic to save the updated field values
    props.setActivity(value);
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
            <ReactQuill theme="snow" value={value} onChange={setValue} />;
          </FormControl>

          <ModalCloseButton />
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSave}
            >
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
