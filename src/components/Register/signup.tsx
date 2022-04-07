import React, { useState, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';
import { useController, useForm } from 'react-hook-form';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { INTEREST } from 'src/schema';
import { CommonTag, Label } from '../shared/Filter/style';
import {
  EmailBtn,
  Input,
  LabelSmall,
  SelectBox,
  SelectDiv,
  SignUpDiv,
  SignUpLabel,
  Subject,
  ValidationLabel,
} from './style';
//import { Container, ExtendsCommonTag } from '../shared/Filter/Tab2';
import { ExtendsCommonTag, Container } from '../shared/Filter/Tab2';

interface DataForm {
  nick: string;
  email: string;
  gender: string;
  age: number;
  class: number;
  lecture: string;
  height: string;
  body: string;
  picture: File;
  favorite: string;
  name: string;
}

const HEIGHT = Array.from({ length: 41 }, (v, i) => i + 150);
const AGE = Array.from({ length: 10 }, (v, i) => i + 20);
const CLASS = Array.from({ length: 12 }, (v, i) => i + 10);

const Sign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>();

  const onSubmit = (data: DataForm) => {
    console.log(data, favorite);
  };
  return (
    <>
      <div>
        <SignUpDiv>
          <SignUpLabel>회원가입</SignUpLabel>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="email">
              <Subject htmlFor="user-email">이메일 인증</Subject>
              <div>
                <Input
                  placeholder="인증메일이 발송되니 정확히 입력해주세요."
                  {...register('email', {
                    required: true,
                    pattern: {
                      // /\d{8}+@bu.ac.kr$/
                      value: /[A-Za-z0-9]+@\w[bu]+\.\w[ac]+\.\w[kr]$/,
                      message: '이메일 형식이 틀렸습니다.',
                    },
                  })}
                  type="text"
                />
                <EmailBtn>인증번호 발송</EmailBtn>
                <div className="validation">
                  <ValidationLabel>{errors?.email?.message}</ValidationLabel>
                  <ValidationLabel>ㄴ 대학교 웹메일 계정만 웹메일이 발송 가능합니다.</ValidationLabel>
                  <ValidationLabel>ㄴ 형식: @bu.ac.kr</ValidationLabel>
                </div>
                <Input placeholder="인증번호를 입력해주세요." />
              </div>
            </div>

            <div className="nick">
              <Subject htmlFor="user-nick">닉네임</Subject>
              <Input
                placeholder="닉네임을 입력해주세요."
                {...register('nick', {
                  required: true,
                })}
                type="text"
              />
              <ValidationLabel>{errors?.nick?.message}</ValidationLabel>
            </div>

            <div className="gender&age">
              <Subject htmlFor="user-gender&age">성별 및 나이</Subject>
              <SelectDiv>
                <div>
                  <LabelSmall>성별</LabelSmall>
                  <SelectBox name="gender" {...register('gender', { required: true })}>
                    <option value="">선택해주세요</option>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                  </SelectBox>
                </div>
                <div>
                  <LabelSmall>나이</LabelSmall>
                  <SelectBox name="age" {...register('age', { required: true })}>
                    <option value="">선택해주세요</option>
                    {AGE.map((age) => (
                      <option value={age}>{age}</option>
                    ))}
                  </SelectBox>
                </div>
              </SelectDiv>
            </div>

            <div className="height&body">
              <Subject htmlFor="user-height&body">키 및 체형</Subject>
              <SelectDiv>
                <div>
                  <LabelSmall>키</LabelSmall>
                  <SelectBox name="height" {...register('height', { required: true })}>
                    <option value="">선택해주세요</option>
                    {HEIGHT.map((height) => (
                      <option value={height}>{height}</option>
                    ))}
                  </SelectBox>
                </div>
                <div>
                  <LabelSmall>체형</LabelSmall>
                  <SelectBox name="body" {...register('body', { required: true })}>
                    <option value="">선택해주세요</option>
                    <option value="탄탄">탄탄</option>
                    <option value="마른">마른</option>
                    <option value="몸매좋은">몸매 좋은</option>
                    <option value="통통한">통통한</option>
                    <option value="근육질">근육질</option>
                  </SelectBox>
                </div>
              </SelectDiv>
            </div>
            <div className="class&lecture">
              <Subject htmlFor="user-class&lecture">학번 및 학과</Subject>
              <SelectDiv>
                <div>
                  <LabelSmall>학번</LabelSmall>
                  <SelectBox name="class" {...register('class', { required: true })}>
                    <option value="">선택해주세요</option>
                    {CLASS.map((i) => (
                      <option value={i}>{i}</option>
                    ))}
                  </SelectBox>
                </div>
                <div>
                  <LabelSmall>학과</LabelSmall>
                  <SelectBox name="lecture" {...register('lecture', { required: true })}>
                    <option value="">선택해주세요</option>
                    <option value="기독교학부">기독교학부</option>
                    <option value="어문학부">어문학부</option>
                    <option value="사회복지학부">사회복지학부</option>
                    <option value="경찰학부">경찰학부</option>
                    <option value="경상학부">경상학부</option>
                    <option value="관광학부">관광학부</option>
                    <option value="사범학부">사범학부</option>
                    <option value="유아교육과">유아교육과</option>
                    <option value="특수교육과">특수교육과</option>
                    <option value="유아특수교육과">유아특수교육과</option>
                    <option value="특수체육교육과">특수체육교육과</option>
                    <option value="컴퓨터공학부">컴퓨터공학부</option>
                    <option value="보건학부">보건학부</option>
                    <option value="물리치료학과">물리치료학과</option>
                    <option value="작업치료학과">작업치료학과</option>
                    <option value="디자인영상학부">디자인영상학부</option>
                    <option value="스포츠과학부">스포츠과학부</option>
                    <option value="문화예술학부">문화예술학부</option>
                    <option value="혁신융합학부">혁신융합학부</option>
                    <option value="첨단IT학부">첨단IT학부</option>
                  </SelectBox>
                </div>
              </SelectDiv>
            </div>
            <div className="favorite">
              <Subject htmlFor="user-favorite">관심사</Subject>
              <Container>
                <input
                  {...register('favorite')}
                  style={{ display: 'none' }}
                  type="text"
                 // value={favorite}
                  // onChange={onChangefavorite}
                  //ref={checkRef}
                  //onClick={testM}
                />
                {INTEREST.map((item) => (
                  <ExtendsCommonTag key={item}>{item}</ExtendsCommonTag>
                ))}
              </Container>
            </div>
          </form>
        </SignUpDiv>
      </div>
    </>
  );
};

export default Sign;
