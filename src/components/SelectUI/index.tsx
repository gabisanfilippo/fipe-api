import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FC } from "react";
import * as S from './styles'

interface ISelect {
  labelName?: string;
  id: string;
  value: any;
  onChange: (event: SelectChangeEvent) => void;
  options: IOptionsSelect[];
  maxWidth?: string;
  defaultValue: any;
}

export const SelectUI: FC<ISelect> = ({
  id,
  onChange,
  options,
  value,
  labelName,
  maxWidth,
  defaultValue,
}) => {
  return (
    <S.Container maxWidth={maxWidth}>
      {labelName && <InputLabel id={id}>{labelName}</InputLabel>}
      <Select
        labelId={id}
        id={id}
        value={value}
        placeholder={"aaa"}
        onChange={onChange}
        defaultValue={defaultValue}
        sx={{
          width: "100%",
        }}
      >
        {options.map((element, index) => {
          return (
            <MenuItem
              key={`Option with label "${element.label}", value "${element.value}" and index "${index}"`}
              value={element.value}
            >
              {element.label}
            </MenuItem>
          );
        })}
      </Select>
    </S.Container>
  );
};
