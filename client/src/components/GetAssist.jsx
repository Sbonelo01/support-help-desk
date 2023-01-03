import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: "",
  },
});

const styles = {
  logoButton: {
    fontFontFamily: "Inter, Helvetica",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "800",
    lineHeight: "19px",
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
    width: "464px",
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
    backgroundColor: "white",
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
        top: "230px",
        borderRadius: "0px",
      }}
    >
      <form action="http://localhost:3001/queries" method="POST">
        <div style={{ display: "flex" }}>
          <div>
            <div>
              <input
                style={styles.input}
                type="text"
                id="fname"
                name="email"
                placeholder="email address"
              ></input>
            </div>
            <div>
              <input
                style={styles.input}
                type="text"
                id="fname"
                name="flavor"
                placeholder="Flavor"
              ></input>
            </div>
            <div>
              <input
                style={styles.input}
                type="text"
                id="fname"
                name="project"
                placeholder="Project name"
              ></input>
            </div>
            <div>
              <input
                disabled
                style={styles.input}
                type="text"
                id="fname"
                name="fname"
                placeholder="Upload screenshot"
              ></input>
            </div>
          </div>
          <div
            style={{
              flex: "1",
              padding: "1rem",

              margin: "2px",
            }}
          >
            <div>
              <textarea
                style={{
                  width: "99%",
                  height: "99%",
                  border: "1 solid",
                  fontFamily: "Inter, Helvetica",
                }}
                rows="17"
                cols="50"
                name="comment"
                placeholder="Here is what I have tried..."
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <button style={styles.sendButton}>Submit</button>
        </div>
      </form>
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
              <AppBar position="static" elevation={0}>
                <Toolbar>
                  <Button style={styles.logoButton} color="inherit">
                    Helpdesk | Get Assist
                  </Button>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  ></Typography>
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
