import { ReactDatePickerProps } from 'react-datepicker';

export interface DatepickerProps extends ReactDatePickerProps {
  onChange(date: Date): void;
}
