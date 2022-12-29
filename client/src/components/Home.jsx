import React from "react";

// import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: "",
  },
});

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        // backgroundImage:
        //   "url(https://images.pexels.com/photos/910213/pexels-photo-910213.jpeg?cs=srgb&dl=pexels-jayant-kulkarni-910213.jpg&fm=jpg)",
        // backgroundSize: "cover",
        // zIndex: "-10",
      }}
    >
      <div
        style={{
          position: "fixed",
          //   margin: "10%",
          width: "90vw",
          height: "90vh",
          left: "5%",
          bottom: "0%",
          mixBlendMode: "color-dodge",
          //   boxShadow: "0px 4px 4px rgba(0,0,0,0.25",
          borderRadius: "10px",
        }}
      >
        <div>
          <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Button color="inherit">Helpdesk</Button>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  ></Typography>
                  {/* <div></div> */}
                  <Button color="inherit">Get assist</Button>
                  <Button color="inherit">Give assist</Button>
                </Toolbar>
              </AppBar>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
