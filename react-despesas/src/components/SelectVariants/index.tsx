import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface ISelectVariantsProps {
  selectLabel: string;
  elementsList: string[];
  defaultValue: string;
  yearAndMonth: string;
  navigateToURL: (URL: string) => void;
}

function SelectVariants(props: ISelectVariantsProps) {
  const {
    selectLabel,
    elementsList,
    defaultValue,
    yearAndMonth,
    navigateToURL,
  } = props;
  const [currentElement, setCurrentElement] =
    React.useState<string>(defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentElement(event.target.value);
    let URL = "";
    if (selectLabel === "Year") {
      const [, monthURL] = yearAndMonth.split("-");
      const yearURL = elementsList[parseInt(event.target.value)];
      URL = yearURL + "-" + monthURL;
    }
    if (selectLabel === "Month") {
      const [yearURL] = yearAndMonth.split("-");
      const monthURL = (parseInt(event.target.value) + 1)
        .toString()
        .padStart(2, "0");
      URL = yearURL + "-" + monthURL;
    }
    navigateToURL(`/despesas/${URL}`);
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
