import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

type SelectDropdownProps = {
  inputLabelId: string;
  inputTranslation: string;
  labelId: string;
  id: string;
  label: string;
  value: string;
  elements: string[];
  onChange: (event: SelectChangeEvent) => void;
  translationKey: string;
};

export const SelectDropdown = ({
  inputLabelId,
  inputTranslation,
  labelId,
  id,
  label,
  value,
  elements,
  onChange,
  translationKey,
}: SelectDropdownProps) => {
  const { t } = useTranslation();

  return (
    <FormControl fullWidth sx={{ marginTop: "25px" }}>
      <InputLabel id={inputLabelId}>{inputTranslation}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        label={label}
        value={value}
        onChange={onChange}
      >
        {elements.map((element) => (
          <MenuItem key={element} value={element}>
            {/* @ts-expect-error: Translation keys only exist during runtime */}
            {t(`card.${translationKey}.${element}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
