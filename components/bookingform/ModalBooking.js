import { Text, Modal, useModal } from "@nextui-org/react";

import { BridalPackage, HandsPackage, LegsPackage, BodyPackage, Events } from "./Packages";

export default function ModalBooking({ setVisible, bindings, modalData }) {

  const packages = ['Bridal package', 'Hands package', 'Legs package', 'Body package', 'Events'];
  const justifyContent = 'flex justify-center py-5'
  return (
    <Modal
      scroll
      fullScreen
      closeButton
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...bindings}
    >
      <Modal.Header>
        <Text id="modal-title" h1>
          {modalData.name}
        </Text>
      </Modal.Header>
      <Modal.Body>
        {modalData.name === packages[0] ? (
          <BridalPackage justifyContent={justifyContent} />
        ) : modalData.name === packages[1] ? (
          <HandsPackage justifyContent={justifyContent} />
        ) : modalData.name === packages[2] ? (
          <LegsPackage justifyContent={justifyContent} />
        ) : modalData.name === packages[3] ? (
          <BodyPackage justifyContent={justifyContent} />
        ) : (
          <Events justifyContent={justifyContent} />
        )}
      </Modal.Body>
    </Modal>
  )
}