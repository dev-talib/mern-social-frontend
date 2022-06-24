import { Modal, useMantineTheme } from "@mantine/core";
import UsersList from "../SearchUsers/UsersList";

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
      size="30%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    <UsersList/>
    </Modal>
  );
}

export default UserModal;
