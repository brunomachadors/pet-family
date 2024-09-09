'use client';

import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ConfirmButton,
  CancelButton,
} from './style';

interface ConfirmWeightRemoveModalProps {
  $isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirWeightRemoveModal({
  $isOpen,
  onClose,
  onConfirm,
}: ConfirmWeightRemoveModalProps) {
  if (!$isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <ModalHeader>Confirmar Remoção</ModalHeader>
        <ModalBody>Deseja realmente remover este peso?</ModalBody>
        <ModalFooter>
          <ConfirmButton onClick={onConfirm}>Sim</ConfirmButton>
          <CancelButton onClick={onClose}>Não</CancelButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}
