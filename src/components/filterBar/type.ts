import { FormInstance } from "antd";

export interface FilterBarProps {
  categories: string[];
  form: FormInstance;
  onFinish: (values: any) => void;
}
