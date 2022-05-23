import { Text, Modal } from "@nextui-org/react";

import { BridalPackage, HandsPackage, LegsPackage, BodyPackage, Events } from "./Packages";
import MyStyles from '../../styles/MyStyles.module.css'

export default function ModalBooking({ setBookingData,setVisible, bindings, modalData }) {

  const packages = ['Bridal package', 'Hands package', 'Legs package', 'Body package', 'Events'];
  const justifyContent = `${MyStyles.all} md:m-auto md:w-6/12 py-4`
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
          <BridalPackage setBookingData={setBookingData} setVisible={setVisible} justifyContent={justifyContent} />
        ) : modalData.name === packages[1] ? (
          <HandsPackage setVisible={setVisible} justifyContent={justifyContent} />
        ) : modalData.name === packages[2] ? (
          <LegsPackage setVisible={setVisible} justifyContent={justifyContent} />
        ) : modalData.name === packages[3] ? (
          <BodyPackage setVisible={setVisible} justifyContent={justifyContent} />
        ) : (
          <Events setVisible={setVisible} justifyContent={justifyContent} />
        )}
      </Modal.Body>
    </Modal>
  )
}