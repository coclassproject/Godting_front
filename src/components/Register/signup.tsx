import React, { useState, useRef, useEffect } from 'react';
import { lightTheme } from 'src/theme';
import { useForm } from 'react-hook-form';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { INTEREST, REGION } from 'src/schema';
import { CheckBoxOrRadioNone } from 'src/theme/CommonStyle';
import {
  EmailBtn,
  Input,
  SelectBox,
  SelectDiv,
  SignUpDiv,
  Subject,
  ValidationLabel,
  Container,
  ExtendsCommonTag,
  RegisterBtn,
  ImageBtn,
  IntroInput,
  LittleSubject,
  Img,
} from './style';

interface DataForm {
  nick: string;
  email: string;
  gender: string;
  age: number;
  class: number;
  lecture: string;
  height: string;
  region: string;
  picture: File;
  interest: string;
  name: string;
  army: string;
  drink: string;
  smoke: string;
  introduce: string;
}

type activeRadioType = '유' | '무' | '상관없음' | '못마심' | '잘마심';

const HEIGHT = Array.from({ length: 41 }, (v, i) => i + 150);
const AGE = Array.from({ length: 10 }, (v, i) => i + 20);
const CLASS = Array.from({ length: 12 }, (v, i) => i + 10);

const Sign = () => {
  /* 라디오 타입 state */
  const [activeDrink, setActiveDrink] = useState('');
  const onClickDrink = (value: activeRadioType) => {
    setActiveDrink(value);
  };

  const [activeArmy, setActiveArmy] = useState('');
  const onClickArmy = (value: activeRadioType) => {
    setActiveArmy(value);
  };

  const [activeSmoke, setActiveSmoke] = useState('');
  const onClickSmoke = (value: activeRadioType) => {
    setActiveSmoke(value);
  };

  const [interestActive, setInterestActive] = useState([]);

  const onClickInterest = (i) => {
    const te = i.target.innerText;
    if (interestActive.indexOf(te) === -1) {
      setInterestActive((prev) => [...prev, te]);
    } else {
      setInterestActive((prev) => prev.filter((v) => v !== te));
    }
  };

  /* 이미지 state */
  const imageRef = useRef(null);
  const [image, setImage] = useState('');

  /* REACT-HOOK-FORM */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>();

  const convert2base64 = (file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result.toString());
    };
  };

  const onSubmit = (data: DataForm) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <SignUpDiv>
          <label className="subject">회원가입</label>
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
              </div>
              <div className="validation">
                <ValidationLabel>{errors?.email?.message}</ValidationLabel>
                <ValidationLabel>ㄴ 대학교 웹메일 계정만 웹메일이 발송 가능합니다.</ValidationLabel>
                <ValidationLabel>ㄴ 형식: @bu.ac.kr</ValidationLabel>
              </div>
              <Input placeholder="인증번호를 입력해주세요." />
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

            <div className="gender">
              <Subject htmlFor="user-gender&age">성별 및 나이</Subject>
              <SelectDiv>
                <div>
                  <LittleSubject>성별</LittleSubject>
                  <SelectBox name="gender" {...register('gender', { required: true })}>
                    <option value="">선택해주세요</option>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                  </SelectBox>
                </div>
                <div>
                  <LittleSubject>나이</LittleSubject>
                  <SelectBox name="age" {...register('age', { required: true })}>
                    <option value="">선택해주세요</option>
                    {AGE.map((age) => (
                      <option value={age}>{age}</option>
                    ))}
                  </SelectBox>
                </div>
              </SelectDiv>
            </div>

            <div className="height">
              <Subject htmlFor="user-height&body">키 및 지역</Subject>
              <SelectDiv>
                <div>
                  <LittleSubject>키</LittleSubject>
                  <SelectBox name="height" {...register('height', { required: true })}>
                    <option value="">선택해주세요</option>
                    {HEIGHT.map((height) => (
                      <option value={height}>{height}</option>
                    ))}
                  </SelectBox>
                </div>
                <div>
                  <LittleSubject>지역</LittleSubject>
                  <SelectBox name="body" {...register('region', { required: true })}>
                    <option value="">선택해주세요</option>
                    {REGION.map((i) => (
                      <option value={i}>{i}</option>
                    ))}
                  </SelectBox>
                </div>
              </SelectDiv>
            </div>
            <div className="class">
              <Subject htmlFor="user-class&lecture">학번 및 학과</Subject>
              <SelectDiv>
                <div>
                  <LittleSubject>학번</LittleSubject>
                  <SelectBox name="class" {...register('class', { required: true })}>
                    <option value="">선택해주세요</option>
                    {CLASS.map((i) => (
                      <option value={i}>{i}</option>
                    ))}
                  </SelectBox>
                </div>
                <div>
                  <LittleSubject>학과</LittleSubject>
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
            <div className="interest">
              <Subject htmlFor="user-interest">관심사</Subject>
              <Container>
                {INTEREST.map((item, i) => (
                  <>
                    <ExtendsCommonTag
                      activeColor={interestActive.indexOf(item) !== -1}
                      htmlFor={`interest-${i}`}
                      key={item}
                      onClick={(sx) => onClickInterest(sx)}
                    >
                      {item}
                    </ExtendsCommonTag>
                    <CheckBoxOrRadioNone type="checkbox" {...register('interest')} value={item} id={`interest-${i}`} />
                  </>
                ))}
              </Container>
            </div>
            <div>
              <LittleSubject>군필여부</LittleSubject>
              <Container>
                <ExtendsCommonTag
                  htmlFor="만기전역"
                  activeColor={activeArmy === '유'}
                  onClick={() => onClickArmy('유')}
                  lang="zh-CN"
                >
                  有
                </ExtendsCommonTag>
                <CheckBoxOrRadioNone {...register('army')} type="radio" value="유" id="만기전역" name="army" />
                <ExtendsCommonTag
                  htmlFor="미필"
                  activeColor={activeArmy === '무'}
                  onClick={() => onClickArmy('무')}
                  lang="zh-CN"
                >
                  無
                </ExtendsCommonTag>
                <CheckBoxOrRadioNone {...register('army')} type="radio" value="무" id="미필" name="army" />
              </Container>
            </div>
            <SelectDiv>
              <div>
                <LittleSubject>흡연</LittleSubject>
                <Container>
                  <ExtendsCommonTag
                    htmlFor="유"
                    activeColor={activeSmoke === '유'}
                    onClick={() => onClickSmoke('유')}
                    lang="zh-CN"
                  >
                    &#26377;
                  </ExtendsCommonTag>
                  <CheckBoxOrRadioNone {...register('smoke')} type="radio" value="유" id="유" name="smoke" />
                  <ExtendsCommonTag
                    htmlFor="무"
                    activeColor={activeSmoke === '무'}
                    onClick={() => onClickSmoke('무')}
                    lang="zh-CN"
                  >
                    無
                  </ExtendsCommonTag>
                  <CheckBoxOrRadioNone {...register('smoke')} type="radio" value="무" id="무" name="smoke" />
                </Container>
              </div>
              <div>
                <LittleSubject>주량</LittleSubject>
                <Container>
                  <ExtendsCommonTag
                    htmlFor="못마심"
                    activeColor={activeDrink === '못마심'}
                    onClick={() => onClickDrink('못마심')}
                  >
                    못마심
                  </ExtendsCommonTag>
                  <CheckBoxOrRadioNone {...register('drink')} type="radio" value="못마심" id="못마심" name="drink" />
                  <ExtendsCommonTag
                    htmlFor="잘마심"
                    activeColor={activeDrink === '잘마심'}
                    onClick={() => onClickDrink('잘마심')}
                  >
                    잘마심
                  </ExtendsCommonTag>
                  <CheckBoxOrRadioNone {...register('drink')} type="radio" value="잘마심" id="잘마심" name="drink" />
                </Container>
              </div>
            </SelectDiv>
            <div className="img">
              <Subject>사진 등록(필수 아님)</Subject>
              <CheckBoxOrRadioNone {...register('picture')} type="file" ref={imageRef} />
              <ImageBtn onClick={() => imageRef.current.click()}>
                <BsFillPlusCircleFill size="25" color="#9E9E9E" />
              </ImageBtn>
              {image ? <Img src={image} /> : null}
            </div>
            <div>
              <Subject>인사말 적기</Subject>
              <IntroInput
                placeholder="내용을 입력해주세요(최대25자)"
                {...register('introduce', {
                  required: true,
                  maxLength: {
                    value: 25,
                    message: '최대 25자로 입력할 수 있습니다',
                  },
                })}
                type="text"
              />
            </div>
            <ValidationLabel>{errors?.introduce?.message}</ValidationLabel>
            <RegisterBtn>가입하기</RegisterBtn>
          </form>
        </SignUpDiv>
      </div>
    </>
  );
};

export default Sign;
