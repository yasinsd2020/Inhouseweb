import React, {useCallback} from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DateRange } from "react-date-range";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = [
  "Today",
  "Yesterday",
  "Tommorow",
  "After 7 days",
  "custom range",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ChartCompDrop({ custom, setCustom }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [calender, ShowCalender] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     e.target.innerText == "custom range"
  //       ? console.log(iscustom)
  //       : console.log("Not Working");
  //     // console.log(data);
  //   };

  const handleSubmit = useCallback(
    (event) => {
      event.target.innerText == "custom range" ? setCustom(true) : setCustom(false)
    },
    [setCustom]
  );

  return (
    <div>
      <FormControl sx={{ width: 150 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Static Date</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          style={{ height: "40px", backgroundColor: "white" }}
        >
          {/* <MenuItem  value="Processing">
            <em>Today</em>
          </MenuItem> */}
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              onClick={handleSubmit}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
