import React, { Children, useEffect, useState } from "react";
// import "../styles/QueryHistoryStyles.css";
// import 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css';
// import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function QueryHistory() {
  const [allReplies, setAllQueries] = useState([]);
  const randomValue = String(Math.floor(100000 + Math.random() * 900000));
  console.log(Number(randomValue[0]));

  const getAllQueries = () => {
    fetch("https://support-help-desk-backend.onrender.com/replies")
      .then((res) => res.json())
      .then((data) => setAllQueries(data));
  };

  useEffect(() => {
    getAllQueries();
  }, []);

  console.log(allReplies);

  return (
    <Box sx={{ flexGrow: 1, margin: "10%" }}>
      <Grid
        // gap={3}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {allReplies.map((reply, index) => (
          <Grid item xs={2} sm={4} md={4} lg={randomValue} key={index}>
            {/* <div>Query</div> */}
            {/* <span> */}

            <Item style={{ height: "100px"  }}>{reply.reply}</Item>
            {/* </span> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
