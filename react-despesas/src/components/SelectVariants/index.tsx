import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

interface ISelectVariantsProps {
  selectLabel: string;
  elementsList: string[];
  defaultValue: string;
  yearAndMonth: string;
}

function SelectVariants(props: ISelectVariantsProps) {
  const { selectLabel, elementsList, defaultValue, yearAndMonth } = props;
  const [currentElement, setCurrentElement] =
    React.useState<string>(defaultValue);

  let navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentElement(event.target.value);
    if (selectLabel === "Year") {
      const [, monthURL] = yearAndMonth.split("-");
      const yearURL = elementsList[parseInt(event.target.value)];
      navigate(`/despesas/${yearURL}-${monthURL}`);
    }
    if (selectLabel === "Month") {
      const [yearURL] = yearAndMonth.split("-");
      const monthURL = (parseInt(event.target.value) + 1)
        .toString()
        .padStart(2, "0");
      navigate(`/despesas/${yearURL}-${monthURL}`);
    }
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">
          {selectLabel}
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={currentElement}
          onChange={handleChange}
        >
          {elementsList.map((element, index) => {
            return (
              <MenuItem key={index} value={index}>
                {element}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export { SelectVariants };
