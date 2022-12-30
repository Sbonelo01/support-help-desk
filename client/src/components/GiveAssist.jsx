import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Input from "@mui/material/Input";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import JavascriptIcon from "@mui/icons-material/Javascript";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme({
  palette: {
    primary: "",
  },
});

const style = (theme) => ({
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
  accordionSummary: {
    margin: "10px",

    width: "80%",

    border: "1px solid",
    borderRadius: "10px",
  },
  projectName: {},
  summaryText: {
    padding: "0px 0px 15px 0",
  },
  individualAccordionContainer: {
    marginLeft: "15%",
  },
  input: {
    color: "white",
    padding: "5%",
    maxHeight: "200px",
  },
  sendReply: {
    position: "absolute",
    top: 3,
    right: 2,
    height: "40px",
    borderRadius: "10px",
    border: "1px solid",
    backgroundColor: "white",
    padding: "10px",
  },
  sendButtonContainer: {
    position: "relative",
    padding: "4%",
  },
});

function FormInput(props) {
  const styles = style();

  return (
    <Box component="form">
      <div>
        <textarea
          style={{ width: "99%", border: "0 solid" }}
          rows="4"
          cols="50"
          placeholder="Write reply..."
        ></textarea>
        <div style={styles.sendButtonContainer}>
          {/* <button style={styles.sendReply}>Send Reply</button> */}
          <button style={styles.sendReply}>Send Reply</button>
        </div>
      </div>
    </Box>
  );
}

function QueryAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const styles = style();
  //   console.log(x);

  return (
    <div>
      <div style={styles.individualAccordionContainer}>
        <div>
          <Accordion
            style={styles.accordionSummary}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon fontSize="large" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <JavascriptIcon fontSize="large" />
              </Typography>

              <div style={styles.projectName}>
                <h5>Project name</h5>
              </div>
              {/* <hr /> */}
            </AccordionSummary>

            <AccordionDetails>
              <Typography style={style.summaryText}>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
            <div>
              <FormInput />
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default function GiveAssist() {
  const styles = style();

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
          borderRadius: "10px",
        }}
      >
        <div>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <AppBar position="static" elevation={0}>
                <Toolbar>
                  <Button
                    style={styles.logoText}
                    color="inherit"
                    // style={{ textTransform: "none" }}
                  >
                    Helpdesk | Give Assist
                  </Button>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  ></Typography>

                  <CloseIcon />
                </Toolbar>
              </AppBar>
            </Box>
            <React.Fragment>
              <div
                style={{
                  paddingTop: "4%",
                  paddingBottom: "4%",

                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "orange",
                  height: "500px",
                }}
              >
                <QueryAccordion />

                <QueryAccordion />
                <QueryAccordion />
                <QueryAccordion />
                <QueryAccordion />
                <QueryAccordion />
                <QueryAccordion />
              </div>
            </React.Fragment>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
