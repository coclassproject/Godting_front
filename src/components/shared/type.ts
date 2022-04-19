import React, { SetStateAction } from 'react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface ActiveCheckBoxOrRadioColor {
  activeColor: boolean;
}

export interface FilterInput {
  area?: string[];
  drink?: string;
  smoke?: string;
  military?: string;
  interest?: string[];
}

export interface FilterSetOpen {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface FilterProps extends FilterSetOpen {
  register?: UseFormRegister<FilterInput>;
  handleSubmit: UseFormHandleSubmit<FilterInput>;
}
