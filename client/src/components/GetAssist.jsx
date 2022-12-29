import React from "react";

// import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontFamily } from "@mui/system";
// import { makeStyles } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: "",
  },
});

const styles = {
  logoButton: {
    padding: "40px",
  },
  input: {
    height: "56px",
    width: "464px",
    left: "245px",
    top: "calc(50% - 56px/2 - 89px",
    borderRadius: "10px",
    border: "0.5px solid",
    margin: "10px",
    fontFontFamily: "Inter, Helvetica",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "800",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  textInput: {
    height: "270px",
    width: "177px",
    left: "741px",
    bottom: "582px",
    borderRadius: "10px",
    border: "0.5px solid",
    fontFontFamily: "Inter, Helvetica",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "800",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  sendButton: {
    position: "absolute",
    width: "464px",
    height: "56px",
    left: "calc(50% - 464px/2 + 2.5px)",
    top: "calc(50% - 330px/2 + 263px)",
    border: "0.5px solid",
    borderRadius: "10px",
    alignItems: "center",
    textAlign: "center",
    fontFontFamily: "Inter, Helvetica",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "800",
  },
};

function Form() {
  return (
    <div
      style={{
        position: "absolute",
        height: "486px",
        width: "1042px",
        left: "209px",
        top: "357px",
        borderRadius: "0px",
      }}
    >
      {" "}
      {/* <Form style={{ display: "flex" }}> */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: "1",
            padding: "1rem",
            // border: "0.5px solid",
            margin: "2px",
          }}
        >
          <div>
            {/* input for text */}
            <input
              style={styles.input}
              type="text"
              id="fname"
              name="fname"
              value="John"
            ></input>
          </div>
          <div>
            {/* input for text */}
            <input
              style={styles.input}
              type="text"
              id="fname"
              name="fname"
              value="John"
            ></input>
          </div>
          <div>
            {/* input for text */}
            <input
              style={styles.input}
              type="text"
              id="fname"
              name="fname"
              value="John"
            ></input>
          </div>
          <div>
            {/* input for text */}
            <input
              style={styles.input}
              type="text"
              id="fname"
              name="fname"
              value="John"
            ></input>
          </div>
        </div>
        <div
          style={{
            flex: "1",
            padding: "1rem",
            // border: "0.1px solid",
            margin: "2px",
          }}
        >
          <div>
            {/* input for text */}
            <input
              style={styles.textInput}
              type="text"
              id="fname"
              name="fname"
              value="Here's what I have tried"
            ></input>
          </div>
        </div>
      </div>
      <div>
        <input
          style={styles.sendButton}
          type="text"
          id="fname"
          name="fname"
          value="Submit'"
        ></input>
        {/* </Form> */}
      </div>
    </div>
  );
}

export default function GetAssist() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
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
                  <Button style={styles.logoButton} color="inherit">
                    Helpdesk | Get Assist
                  </Button>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  ></Typography>
                  {/* <div></div> */}
                  {/* <Button color="inherit">Get assist</Button>
                  <Button color="inherit">Give assist</Button> */}
                </Toolbar>
              </AppBar>
            </Box>
            <Form />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
