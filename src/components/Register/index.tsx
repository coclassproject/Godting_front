import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { INTEREST, REGION } from 'src/schema';
import { CheckBoxOrRadioNone } from 'src/theme/CommonStyle';
import Major from '../shared/Major';
import {
  Container,
  EmailBtn,
  ExtendsCommonTag,
  ImageBtn,
  Img,
  Input,
  IntroInput,
  LittleSubject,
  RegisterBtn,
  SelectBox,
  SelectDiv,
  SignUpDiv,
  Subject,
  ValidationLabel,
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

const Register = () => {
  const [activeDrink, setActiveDrink] = useState('');
  const [activeArmy, setActiveArmy] = useState('');
  const [activeSmoke, setActiveSmoke] = useState('');
  const [interestActive, setInterestActive] = useState([]);
  const [choiceMajor, setChoiceMajor] = useState<string[]>([null]);
  const imageRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>();

  const onClickDrink = (value: activeRadioType) => {
    setActiveDrink(value);
  };
  const onClickArmy = (value: activeRadioType) => {
    setActiveArmy(value);
  };
  const onClickSmoke = (value: activeRadioType) => {
    setActiveSmoke(value);
  };

  const onClickInterest = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const text = target.innerText;
    if (interestActive.indexOf(text) === -1) {
      setInterestActive((prev) => [...prev, text]);
    } else {
      setInterestActive((prev) => prev.filter((v) => v !== text));
    }
  };

  const onChangeImageUpload = (e) => {
    console.log('fasf', e.target.files[0]);
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    setImage(e.target.files[0].name);
  };

  const onSubmit = (data: DataForm) => {
    const values = { ...data, major: choiceMajor, image };
    console.log(values);
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
                      value: /[A-Za-z0-9]+@\w[bu]+\.\w[ac]+\.\w[kr]$/,
                      message: '대학교 웹메일 계정만 인증이 가능합니다.',
                    },
                  })}
                  type="text"
                />
                <EmailBtn>인증번호 발송</EmailBtn>
              </div>
              {errors?.email?.message && (
                <div className="validation">
                  <ValidationLabel>{errors?.email?.message}</ValidationLabel>
                </div>
              )}
              <Input className="auth" placeholder="인증번호를 입력해주세요." />
            </div>

            <div className="nick">
              <Subject htmlFor="user-nick">닉네임</Subject>
              <Input
                placeholder="닉네임을 입력해주세요.(최대12자)"
                {...register('nick', {
                  required: true,
                  maxLength: {
                    value: 12,
                    message: '최대 12자로 입력할 수 있습니다',
                  },
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
                    {REGION.map((region) => (
                      <option value={region}>{region}</option>
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
                    {CLASS.map((classNum) => (
                      <option value={classNum}>{classNum}</option>
                    ))}
                  </SelectBox>
                </div>
              </SelectDiv>
              <Major choiceMajor={choiceMajor} setChoiceMajor={setChoiceMajor} />
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
                      onClick={(e) => onClickInterest(e)}
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
              <div className="smoke">
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
              <div className="drink">
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
              <CheckBoxOrRadioNone onChange={onChangeImageUpload} accept="image/*" type="file" ref={imageRef} />
              <ImageBtn onClick={() => imageRef.current.click()}>
                <BsFillPlusCircleFill size="25" color="#9E9E9E" />
              </ImageBtn>
              {image && <Img src={image} />}
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

export default Register;
