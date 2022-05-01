import React, { SetStateAction } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface ActiveCheckBoxOrRadioColor {
  activeColor: boolean;
}

export interface HomeFilterInput {
  area?: string[];
  drink?: string;
  smoke?: string;
  military?: string;
  interest?: string[];
}

export interface MeetingFilterInput {
  area?: string[];
  participant?: number;
}

export interface FilterSetOpen {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  setNoMenu: React.Dispatch<SetStateAction<boolean>>;
}

export interface HomeFilterProps extends FilterSetOpen {
  register?: UseFormRegister<HomeFilterInput>;
  handleSubmit: UseFormHandleSubmit<HomeFilterInput>;
}

export interface MeetingFilterProps extends FilterSetOpen {
  register?: UseFormRegister<MeetingFilterInput>;
  handleSubmit: UseFormHandleSubmit<MeetingFilterInput>;
}
