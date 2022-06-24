import { Modal, useMantineTheme } from "@mantine/core";
import NewPost from "../NewPost/NewPost";

function UserModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="80%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    <NewPost/>
    </Modal>
  );
}

export default UserModal;
