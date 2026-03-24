import { SortField } from "@/components/News/news.types";
import cl from "./Select.module.scss";
import { SelectProps } from "./select.types";

const Select: React.FC<SelectProps> = ({
  defaulValue,
  value,
  options,
  onChangeSort,
}) => {
  return (
    <select
      className={cl.select}
      name="newsSort"
      onChange={(e) => onChangeSort(e.target.value as SortField)}
      value={value}
    >
      <option disabled value="">
        {defaulValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
