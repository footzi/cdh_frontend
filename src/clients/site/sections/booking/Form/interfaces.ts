export interface Fields {
  start: string;
  end: string;
  name: string;
  phone: string;
  comment: string;
  room: string;
  email: string;
}

export interface UseSendFormProps {
  onSuccess(): void;
}

export interface UseSendFormResult {
  isLoading: boolean;
  sendForm(fields: Fields): void;
}

export interface FormProps {
  sendForm(fields: Fields): void;
  isLoadingSend: boolean;
}
