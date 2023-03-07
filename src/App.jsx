import RepoList from "./components/RepoList";
import Header from "./components/header/Header";
import fetchRepoHandler from "./data/fetch-data";
import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function App() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let today = new Date();
  let inputDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 30
  )
    .toISOString()
    .split("T")[0];
  const [previousDate, setPreviousDate] = useState(inputDate);
  const [date, setDate] = useState(30);

  const handleChange = (event) => {
    switch (event.target.value) {
      case 7:
        // code block
        inputDate = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 7
        );
        break;
      case 14:
        // code block
        inputDate = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 14
        );
        break;
      default:
        // code block
        inputDate = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 30
        );
    }
    setDate(event.target.value);
    setPreviousDate(inputDate.toISOString().split("T")[0]);
    console.log(inputDate.toISOString().split("T")[0]);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchRepoHandler(setRepos, setError, previousDate);
    setIsLoading(false);
  }, [fetchRepoHandler, previousDate]);
  return (
    <Box position="relative">
      <Box position="fixed" bgcolor="#999" top={0} width="100%">
        <Header />
        <Box my={4} px={2} mx="auto" sx={{ Width: "80vw" }}>
          <FormControl fullWidth sx={{ borderColor: "black" }}>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={date}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value={7}>1 week</MenuItem>
              <MenuItem value={14}>2 weeks</MenuItem>
              <MenuItem value={30}>1 month</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <RepoList repos={repos} />
    </Box>
  );
}

export default App;
