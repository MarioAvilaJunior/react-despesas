import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface ISelectVariantsProps {
  selectLabel: string;
  elementsList: string[];
}

function SelectVariants(props: ISelectVariantsProps) {
  const { selectLabel, elementsList } = props;
  const [currentElement, setCurrentElement] = React.useState<string>(
    elementsList[0]
  );

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentElement(event.target.value);
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
