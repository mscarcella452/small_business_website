import { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Container,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css//
import "react-datepicker/dist/react-datepicker-cssmodules.css";

function Appointment() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Box sx={{ width: 1, height: 1, border: 1 }}>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat='Pp'
        showTimeSelect
        timeFormat='p'
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
}

export default Appointment;
