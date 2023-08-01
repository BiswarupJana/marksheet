import React from "react";
import { Box, Button, TextField, Typography, Tabs, Tab, Select, MenuItem, Table, TableHead, TableRow, TablePagination, TableCell, TableBody } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const ViewMarkSheetForm = () => {
    const dammy=[ok, ok];
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Manage Marks</Typography>
      <Box sx={{ flexGrow: 1, paddingLeft: '150px' }}>
        <form onSubmit={handleSubmit}>
          <label>Class</label>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            name="name"
            fullWidth
            helperText="Please select class"

            onChange={handleInputChange}
            margin="normal"
          >
            {allclass.map((option) => (
              <MenuItem key={option.class_id} value={option.class_id}>
                {option.class_name}
              </MenuItem>
            ))}
          </TextField>
          <label>Marksheet</label>
          <TextField
            id="outlined-select-currency"
            select
            label="Select Class"
            name="email"
            fullWidth
            helperText="Please select class"
            value={formData.email}
            onChange={handleInputChange}
            margin="normal"
          >
            {marksheet.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
      </Box>
  );
};

export default ViewMarkSheetForm;
