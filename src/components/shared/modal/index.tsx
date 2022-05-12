import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { BsTrash } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ModalCard, ModalImg, ModalComment, ModalBtn } from './style';

interface CustomModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: '소개팅' | '미팅';
  requestOrAceept?: boolean;
}

const CustomModal = ({ modalIsOpen, setModalIsOpen, type, requestOrAceept = false }: CustomModalProps) => (
  <>
    <Modal
      isOpen={modalIsOpen}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 100,
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#FFFFFF',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '5px',
          outline: 'none',
          padding: '20px',
          width: '350px',
          height: '550px',
        },
      }}
    >
      <ModalCard>
        <div className="exit">
          <VscChromeClose color="#666666" size="24px" onClick={() => setModalIsOpen(false)} />
        </div>
        <div className="meetingImg">
          {type === '미팅' && <IoIosArrowBack size="1.7rem" color="#9E9E9E" />}
          <ModalImg type={type} />
          {type === '미팅' && <IoIosArrowForward size="1.7rem" color="#9E9E9E" />}
        </div>
        {type === '소개팅' && (
          <div className="all">
            <span className="nick">햄찌</span>
            <div className="lectureHeart">
              <div className="heart hidden">
                <AiFillHeart color="#FF00FF" size="18px" />
                <span>12</span>
              </div>
              <span className="lecture">19학번 문화상품디자인연계학과</span>
              <div className="heart">
                <AiFillHeart color="#FF00FF" size="18px" />
                <span>12</span>
              </div>
            </div>
          </div>
        )}
        {type === '소개팅' ? (
          <div className="info">
            <div className="container">
              <div className="infoDetail">
                <span className="subject">나이</span>
                <span className="detail">21세</span>
              </div>
            </div>
            <div className="container">
              <div className="infoDetail">
                <span className="subject">키</span>
                <span className="detail">165cm</span>
              </div>
            </div>
            <div className="container">
              <div className="infoDetail">
                <span className="subject">관심사</span>
                <span className="detail">#맛집탐방, #운동</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="info">
            <div className="container">
              <div className="infoDetail">
                <span className="subject">지역</span>
                <span className="detail">경기</span>
              </div>
            </div>
            <div className="container">
              <div className="infoDetail">
                <span className="subject">날짜</span>
                <span className="detail">11월 14일</span>
              </div>
            </div>
            <div className="container">
              <div className="infoDetail">
                <span className="subject">시간</span>
                <span className="detail">13:00</span>
              </div>
            </div>
            <div className="container">
              <div className="infoDetail">
                <span className="subject">평균나이</span>
                <span className="detail">23세</span>
              </div>
            </div>
          </div>
        )}
        {type === '소개팅' && (
          <ModalComment>
            <span className="comment">comments</span>
            <span className="commentDetail">재미있게 놀아요! 대학와서 미팅해보고 싶었습니다</span>
          </ModalComment>
        )}
        {requestOrAceept ? (
          <div className="btnContainer">
            <ModalBtn>수락하기</ModalBtn>
            <button>
              <BsTrash size="1.2rem" />
            </button>
          </div>
        ) : (
          <ModalBtn>{type === '미팅' ? '미팅 신청하기' : '소개팅 신청하기'}</ModalBtn>
        )}
      </ModalCard>
    </Modal>
  </>
);

export default CustomModal;
