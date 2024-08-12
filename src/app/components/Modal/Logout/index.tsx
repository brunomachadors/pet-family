import React from 'react';
import {
  CancelButton,
  ConfirmButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from './style';

interface ModalLogoutProps {
  closeModal: () => void;
  handleSignOut: () => void;
}

function ModalLogout({ closeModal, handleSignOut }: ModalLogoutProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Confirmar Logout</ModalHeader>
        <ModalBody>Você realmente deseja sair?</ModalBody>
        <ModalFooter>
          <ConfirmButton onClick={handleSignOut}>Sim</ConfirmButton>
          <CancelButton onClick={closeModal}>Não</CancelButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ModalLogout;
