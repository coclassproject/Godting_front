import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import CustomRange from 'src/components/shared/CustomRange';
import { ButtonContainer, ExtendsButtonContainer, Tab1Container } from 'src/components/shared/Filter/style';
import { MeetingFilterInput, MeetingFilterProps } from 'src/components/shared/type';
import { PARTICIPANT, REGION } from 'src/schema';
import { CheckBoxOrRadioNone, CommonTag, LabelContainer, RangeContainer } from 'src/theme/CommonStyle';

const AGE_OPTION = {
  step: 1,
  min: 20,
  max: 39,
};

const MeetingTab1 = ({ register, handleSubmit, setOpen, setNoMenu }: MeetingFilterProps) => {
  const [activeArea, setActiveArea] = useState([]);
  const [ageValue, setAgeValue] = useState([20, 27]);
  const [activeParticipant, setActiveParticipant] = useState<number>(null);

  const onClickArea = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const value = target.innerText;
    if (activeArea.indexOf(value) === -1) {
      setActiveArea((prev) => [...prev, value]);
    } else {
      setActiveArea((prev) => prev.filter((v) => v !== value));
    }
  };

  const onClickParticipant = (value: number) => setActiveParticipant(value);

  const onSubmit: SubmitHandler<MeetingFilterInput> = (data) => {
    const values = { ...data, age: ageValue };
    console.log(values);
    setOpen(false);
    setNoMenu(false);
  };

  return (
    <Tab1Container>
      <LabelContainer>
        <label className="title">지역</label>
        {REGION.map((area, index) => (
          <>
            <CommonTag
              activeColor={activeArea.indexOf(area) !== -1}
              onClick={onClickArea}
              htmlFor={`area-${index}`}
              key={area}
            >
              {area}
            </CommonTag>
            <CheckBoxOrRadioNone {...register('area')} id={`area-${index}`} value={area} type="checkbox" />
          </>
        ))}
      </LabelContainer>
      <RangeContainer>
        <div className="labelContainer">
          <label>나이</label>
          <span>{`${ageValue[0]}세~${ageValue[1]}세`}</span>
        </div>
        <CustomRange value={ageValue} onChangeValue={setAgeValue} option={AGE_OPTION} />
      </RangeContainer>
      <LabelContainer>
        <label className="title">인원</label>
        {PARTICIPANT.map((person, index) => (
          <>
            <CommonTag
              onClick={() => onClickParticipant(person)}
              activeColor={activeParticipant === person}
              htmlFor={`participant-${index}`}
              key={person}
            >
              {person}
            </CommonTag>
            <CheckBoxOrRadioNone name="participant" type="radio" value={person} id={`participant-${index}`} />
          </>
        ))}
      </LabelContainer>
      <ExtendsButtonContainer>
        <button onClick={handleSubmit(onSubmit)}>등록하기</button>
      </ExtendsButtonContainer>
    </Tab1Container>
  );
};

export default MeetingTab1;
