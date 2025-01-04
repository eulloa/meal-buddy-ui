export interface IAction {
  type: string;
  value?: any;
}

export interface IField {
  name: string;
  placeholder: string;
  required: boolean;
  value: any;
}

export interface IState {
  fields: IField[];
}

export interface ISubmit {
  isFormValid: boolean;
}
