import React from "react";
import Modal from "react-modal";
import { AppInput } from "../AppInput/AppInput";
import { AppButton } from "../AppButton/AppButton";
import { Icon } from "../Icon/Icon";
import { IconWrapper, ModalHeader, ContentBox } from "./AppModal.style";
import { AppHeader } from "../AppHeader/AppHeader";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
};

interface AppModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  onCommentInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddComment: () => void;
}

export const AppModal = ({
  modalIsOpen,
  closeModal,
  onCommentInputChange,
  onAddComment,
}: AppModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Добавление комментариев"
    >
      <IconWrapper onClick={() => closeModal()}>
        <Icon name="plus-button" />
      </IconWrapper>
      <ModalHeader>
        <AppHeader type="h1" headerText="Новый комментарий" />
      </ModalHeader>
      <ContentBox>
        <AppInput
          type="text"
          inputPlaceholder="Новый комментарий"
          onChange={onCommentInputChange}
        />
        <AppButton
          isDisabled={false}
          buttonText="Добавить коммент"
          onClick={() => onAddComment()}
        />
      </ContentBox>
    </Modal>
  );
};
