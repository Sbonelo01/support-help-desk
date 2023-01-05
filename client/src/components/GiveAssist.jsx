import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CloseIcon from "@mui/icons-material/Close";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

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
    right: 4,
    height: "40px",
    borderRadius: "10px",
    border: "1px solid",
    backgroundColor: "white",
    padding: "10px",
  },
  sendButtonContainer: {
    position: "relative",
    padding: "3%",
  },
});

export default function GiveAssist() {
  const styles = style();
  const [expanded, setExpanded] = useState(false);
  const [queryData, setqueryData] = useState([]);

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  const handleOnSubmit = () => {
    // fetch("http://localhost:3001/queries", {
    //   method: "post",
    //   body: data,
    // })
    //   .then((res) => {
    //     return res.text();
    //   })
    //   .then((data) => {
    //   });
  };

  function getQueries() {
    fetch("http://localhost:3001/queries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setqueryData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getQueries();
  }, []);

  console.log(queryData.reverse());

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
                  <Button style={styles.logoText} color="inherit">
                    Helpdesk | Give Assist
                  </Button>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  ></Typography>

                  {/* <CloseIcon /> */}
                  <Link to="/">
                    <Icon
                      icon="clarity:home-line"
                      height="28px"
                      weight="28px"
                    />
                  </Link>
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
                <div>
                  <div style={styles.individualAccordionContainer}>
                    {queryData &&
                      queryData.length > 0 &&
                      queryData.map((query, index) => {
                        return (
                          <div key={index}>
                            <Accordion
                              style={styles.accordionSummary}
                              expanded={expanded === index}
                              onChange={handleChange(index)}
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
                                  {query.flavor === "Python" ? (
                                    <Icon
                                      icon="mdi:language-python"
                                      height="28px"
                                      weight="28px"
                                    />
                                  ) : query.flavor === "JavaScript" ? (
                                    <Icon
                                      icon="ion:logo-javascript"
                                      height="28px"
                                      weight="28px"
                                    />
                                  ) : query.flavor === "Java" ? (
                                    <Icon
                                      icon="bi:filetype-java"
                                      height="28px"
                                      weight="28px"
                                    />
                                  ) : null}
                                </Typography>

                                <div style={styles.projectName}>
                                  <h5>{query.project}</h5>
                                </div>
                              </AccordionSummary>

                              <AccordionDetails>
                                <Typography
                                  style={style.summaryText}
                                  fontFamily="Consolas, inter, Helvetica"
                                >
                                  {query.comment}
                                </Typography>
                              </AccordionDetails>
                              <div>
                                <form
                                  action="http://localhost:3001/replies"
                                  method="POST"
                                >
                                  <div>
                                    <textarea
                                      style={{
                                        width: "99.5%",
                                        border: "0 solid",
                                        fontFamily: "Inter, Helvetica",
                                      }}
                                      rows="4"
                                      cols="50"
                                      name="reply"
                                      placeholder="Try this ..."
                                    ></textarea>
                                    <div style={styles.sendButtonContainer}>
                                      <button
                                        style={styles.sendReply}
                                        onSubmit={handleOnSubmit}
                                      >
                                        Send Reply
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </Accordion>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </React.Fragment>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
