import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "@iconify/react";

const theme = createTheme({
  palette: {
    primary: "",
  },
});

const styles = {
  logoText: {
    fontFontFamily: "Inter, Helvetica",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "800",
    lineHeight: "19px",
  },
  loginWithGoogleButton: {
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
    backgroundColor: "#fff",
  },
  googleLogo: {
    position: "absolute",
    width: "37px",
    height: "42px",
    left: "471px",
    top: "490px",
    left: "calc(50% - 464px/2 + 2.5px)",
    top: "calc(50% - 330px/2 + 263px)",
  },
};

function Form() {
  return (
    <div
      style={{
        position: "absolute",
        height: "48px",
        width: "1042px",
        left: "320px",
        top: "230px",
        borderRadius: "0px",
      }}
    >
      {" "}
      {/* <Form style={{ display: "flex" }}> */}
      <div style={{ display: "flex" }}>
        <div>
          <button
            // style={{backgroundImage: "url()"}}
            style={styles.loginWithGoogleButton}
            type="text"
            id="fname"
            name="fname"
            // value="Login with Google"
          >
            Login with Google
          </button>
          {/* </Form> */}
        </div>
      </div>
    </div>
  );
}

export default function loginWithGoogle() {
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
              <AppBar position="static" elevation={0}>
                <Toolbar>
                  <Button style={styles.logoText} color="inherit">
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
                  <CloseIcon />
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
