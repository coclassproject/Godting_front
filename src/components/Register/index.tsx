import React, { useState, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import { lightTheme } from 'src/theme';
import { useController, useForm } from 'react-hook-form';
import { INTEREST } from 'src/schema';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { CommonTag, Label } from '../shared/Filter/style';
import {
  SignUpDiv,
  SignUpLabel,
  Subject,
  EmailDiv,
  Input,
  EmailBtn,
  ValidationLabel,
  MarginDiv,
  SelectDiv,
  LabelSmall,
  SelectBox,
  Category,
  CategoryContainer,
  RegisterBtn,
} from './style';

const ImageBtn = styled.button`
  width: 130px;
  height: 140px;
  border: none;
  border-radius: 10%;
`;

interface DataForm {
  nick: string;
  email: string;
  gender: string;
  age: number;
  class: string;
  lecture: string;
  height: string;
  body: string;
  picture: File;
  favorite: string;
  name: string;
}

const HEIGHT = Array.from({ length: 41 }, (v, i) => i + 150);

const Register = () => {
  const imageRef = useRef(null);
  const checkRef = useRef(null);
  const [favorite, setFavorite] = useState('');

  // const onChangefavorite = useCallback((e) => {
  //   setFavorite(favorite);
  //   console.log(e.target.value);
  // }, []);

  const onChangeFavorite = (e: React.MouseEvent<HTMLElement>) => {
    const tmp = e.target as HTMLElement;
    checkRef.current.click();
  };
  // const onClickFavorite = useCallback((e) => {
  //   checkRef.current.click();
  //   console.log(e.target.value);
  // }, []);
  // const favoriteData = [];
  // const interest = INTEREST.forEach((item) => {
  //   favoriteData.push(item);
  // });
  // console.log(favoriteData);

  // const [favorite, onChangeNick] = useInput('');
  // const [email, onChangeEmail] = useInput('');
  /*
  
  
  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const emailCheck = (e) => {
    const regExp = /\d{8}@\w[bu]+\.\w[ac]+\.\w[kr]/i;
    // 이메일 형식 : 숫자 8개@bu.ac.kr
    console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value));
  };
  */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>();

  const onSubmit = (data: any) => {
    console.log(data, favorite);
  };

  const testM = (e) => {
    console.log(e);
    console.log('gasg', e.target.value);
    setFavorite(e.target.value);
  };

  const onClickInterest = (e) => {
    const target = e.target as HTMLElement;
    setFavorite(target.innerText);
  };

  return (
    <>
      <div>
        <SignUpDiv>
          <Background>
            <SignUpLabel>회원가입</SignUpLabel>
            <br /> <br /> <br /> <br /> <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Subject htmlFor="user-email">이메일</Subject>
                <EmailDiv>
                  <Input
                    // name="email"
                    // required
                    // onChange={onChangeEmail}
                    // value={email}
                    placeholder="인증메일이 발송되니 정확히 입력해주세요."
                    // onBlur={emailCheck}
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
                </EmailDiv>
                <ValidationLabel>{errors?.email?.message}</ValidationLabel>
                <br />
                <ValidationLabel>ㄴ 대학교 웹메일 계정만 웹메일이 발송 가능합니다.</ValidationLabel>
                <br />
                <ValidationLabel>ㄴ 형식: @bu.ac.kr</ValidationLabel>
              </div>
              <br /> <br />
              <Input placeholder="인증번호를 입력해주세요." />
              <br /> <br /> <br />
              <MarginDiv>
                <Subject htmlFor="user-nick">닉네임</Subject>
                <Input
                  // name="user-nick"
                  // required
                  // onChange={onChangeNick}
                  // value={nick}
                  placeholder="닉네임을 입력해주세요."
                  {...register('nick', {
                    required: true,
                  })}
                  type="text"
                />
                <ValidationLabel>{errors?.nick?.message}</ValidationLabel>
              </MarginDiv>
              <div>
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
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                    </SelectBox>
                  </div>
                </SelectDiv>
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
                <br /> <br />
                <Subject htmlFor="user-class&lecture">학번 및 학과</Subject>
                <SelectDiv>
                  <div>
                    <LabelSmall>학번</LabelSmall>
                    <SelectBox name="class" {...register('class', { required: true })}>
                      <option value="">선택해주세요</option>
                      <option value="22">22</option>
                      <option value="21">21</option>
                      <option value="20">20</option>
                      <option value="19">19</option>
                      <option value="18">18</option>
                      <option value="17">17</option>
                      <option value="16">16</option>
                      <option value="15">15</option>
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
                <br />
              </div>
              <div>
                <Subject htmlFor="user-favorite">관심사</Subject>
                <Container>
                  <input
                    {...register('favorite')}
                    style={{ display: 'none' }}
                    type="text"
                    value={favorite}
                    // onChange={onChangefavorite}
                    ref={checkRef}
                    onClick={testM}
                  />
                  {INTEREST.map((item) => (
                    <ExtendsCommonTag onClick={onClickInterest} key={item}>
                      {item}
                    </ExtendsCommonTag>
                  ))}
                </Container>
              </div>
              <Category>
                <Label>군필여부</Label>
                <CommonTag lang="zh-CN" activeColor={false}>
                  有
                </CommonTag>
                <CommonTag lang="zh-CN" activeColor={false}>
                  無
                </CommonTag>
              </Category>
              <CategoryContainer>
                <div>
                  <Label>흡연</Label>
                  <CommonTag activeColor={false}>&#26377;</CommonTag>
                  <CommonTag lang="zh-CN" activeColor={false}>
                    無
                  </CommonTag>
                </div>
                <div style={{ marginLeft: '30px' }}>
                  <Label>주량</Label>
                  <CommonTag activeColor={false}>술찌</CommonTag>
                  <CommonTag activeColor={false}>잘마심</CommonTag>
                </div>
              </CategoryContainer>
              <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Subject htmlFor="user-favorite">사진 등록(필수 아님)</Subject>
                <input {...register('picture')} type="file" ref={imageRef} style={{ display: 'none' }} />
                <ImageBtn onClick={() => imageRef.current.click()}>
                  <BsFillPlusCircleFill size="25" color="#9E9E9E" />
                </ImageBtn>
              </div>
              <RegisterBtn>가입하기</RegisterBtn>
            </form>
          </Background>
        </SignUpDiv>
      </div>
    </>
  );
};

export default Register;
// 버튼 Padding 넣기
