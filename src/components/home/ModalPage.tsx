import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';

import { RegisterCard, RegisterImg, RegisterSubContainer, RegisterNick, RegisterLecture, RegisterInfo } from './style';

const ModalPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
      <Modal
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
          },
        }}
        isOpen
      >
        <button onClick={() => setModalIsOpen(false)}>Modal Open</button>
      </Modal>
    </>
  );
};

export default ModalPage;
{
  /* <RegisterCard>
<RegisterImg />
<RegisterSubContainer>
  <RegisterNick>햄찌</RegisterNick>
  <RegisterLecture>19학번 문화상품디자인연계</RegisterLecture>
  <RegisterInfo># 여행 # 맛집탐방</RegisterInfo>
</RegisterSubContainer>
</RegisterCard> */
}
