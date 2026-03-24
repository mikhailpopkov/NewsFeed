type SortField = "title" | "createdAt";

export interface SelectProps {
  defaulValue: string;
  value: SortField | "";
  options: SelectValue[];
  onChangeSort: (value: SortField) => void;
}

export interface SelectValue {
  value: SortField;
  name: string;
}
