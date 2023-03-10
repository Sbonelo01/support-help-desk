import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import CircularProgress from "@mui/material/CircularProgress";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: "",
  },
});

const style = (theme) => ({
  accordionSummary: {
    margin: "10px",
    width: "80%",
    borderRadius: "10px",
  },
  projectName: {},
  summaryText: {
    padding: "0px 0px 15px 0",
  },
  individualAccordionContainer: {
    marginLeft: "15%",
  },
  sendReply: {
    position: "absolute",
    bottom: 6,
    right: 4,
    border: "0px solid",
    backgroundColor: "white",
  },
});

export default function GiveAssist() {
  const styles = style();
  const [expanded, setExpanded] = useState(false);
  const [queryData, setqueryData] = useState([]);

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  const handleOnSubmit = (query) => {
    // send an email to the email suplied

    console.log(query); // the email
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

  // console.log(queryData.reverse());

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
                  {/* <Button color="inherit"> */}
                  <Link to="/">
                    <Icon
                      icon="logos:helpscout"
                      color="#f32fff"
                      width="80px"
                      height="80px"
                    />
                  </Link>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  ></Typography>

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
                    {console.log(queryData.length)}
                    {queryData.length === 0 ? (
                      <Box sx={{ display: "flex" }}>
                        {/* <CircularProgress /> */}
                        No tickets as yet
                      </Box>
                    ) : (
                      queryData &&
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
                              <div
                                style={{ position: "relative", color: "red" }}
                              >
                                <AccordionDetails style={{}}>
                                  {query.comment}
                                </AccordionDetails>
                              </div>
                              <div>
                                <form
                                  action="http://localhost:3001/replies"
                                  method="POST"
                                >
                                  <div style={{ position: "relative" }}>
                                    <textarea
                                      style={{
                                        width: "99.5%",
                                        border: "0 solid",
                                        boxSizing: "border-box",
                                      }}
                                      rows="4"
                                      cols="50"
                                      name="reply"
                                      placeholder="Try this ..."
                                    ></textarea>
                                    <button
                                      style={styles.sendReply}
                                      onClick={() =>
                                        window.alert(
                                          "Thank you, your reply has been sent"
                                        )
                                      }
                                      onSubmit={handleOnSubmit(query.email)}
                                    >
                                      <Icon
                                        icon="material-symbols:send-outline"
                                        width="28px"
                                        height="28px"
                                      />
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </Accordion>
                          </div>
                        );
                      })
                    )}
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
