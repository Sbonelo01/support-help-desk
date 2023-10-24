import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
// import { set } from "../../../server/app";
// import { notify } from "../../../server/routes";
// import "../styles/main.css";
import { Widget as RCW, addResponseMessage } from "react-chat-widget";
import pl from "../../package.json";

const theme = createTheme({
  palette: {
    primary: "",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const styles = {
  input: {
    height: "100%",
    width: "100%",
    border: "none",
    padding: "10px 0 10px 10px",
  },
  sendReply: {
    position: "absolute",
    right: 5,
    bottom: 4,
    border: "0px solid",
    padding: "2px",
    // backgroundColor: "grey",
    boxShadow: "1px 1px 10px 1px grey insert",
  },
};

function Notify() {
  const [allQueries, setAllQueries] = useState([]);

  function getQueries() {
    fetch("https://support-help-desk.onrender.com/queries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllQueries(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function sendQuery() {}

  useEffect(() => {
    getQueries();
    sendQuery();
  }, []);

  return (
    <div style={{ maxHeight: "7%", width: "3.5%" }}>
      {/* <div style={{ backgroundColor: "orange", height: "30px" }}></div> */}
      Bookmarks
      <ul>
        {allQueries.map((query, index) => {
          return (
            <li key={index} style={{ listStyle: "none", margin: "10px" }}>
              <div>{query.project}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Form() {
  return (
    <form action="https://support-help-desk.onrender.com" method="POST">
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              {" "}
              <input
                style={styles.input}
                type="text"
                id="fname"
                name="email"
                placeholder="email adress ..."
              ></input>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <select name="flavor" style={styles.input}>
                <option>JavaScript</option>
                <option>Python</option>
                <option>Java</option>
              </select>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <input
                style={styles.input}
                type="text"
                id="fname"
                name="project"
                placeholder="Project name"
              ></input>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <RCW
              className="my-custom-chat-bubble"
              emojis={true}
              senderPlaceHolder="Please type your query ..."
            />
          </Grid>
        </Grid>
        <div style={{ position: "relative" }}>
          <p style={{ position: "absolute", left: "50%" }}>v{pl.version}</p>
        </div>
      </Box>
    </form>
  );
}

export default function GetAssist() {
  const [isClicked, setIsSclicked] = useState(false);
  const handleIconOnClick = (e) => {
    e.preventDefault();
    // Toggle state on and off
    setIsSclicked((current) => !current);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        // className="main"
        style={{
          position: "fixed",
          width: "90vw",
          height: "90vh",
          left: "5%",
          bottom: "0%",
          //   boxShadow: "0px 4px 4px rgba(0,0,0,0.25",
          borderRadius: "10px",
        }}
      >
        <div>
          <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
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
                  {/* </Button> */}
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  ></Typography>
                  <Link style={{ textDecoration: "none" }} to="/give-assist">
                    <Icon
                      icon="flat-color-icons:assistant"
                      // color="#ffffff"
                      width="28px"
                      height="28px"
                    />
                    {/* Give assist */}
                  </Link>
                  <div style={{ marginRight: "10px" }}></div>
                  <Icon
                    icon="material-symbols:bookmark-outline"
                    // color="#f32fff" TODO: NEED TO MAKE A CHECKS FOR CHANGE IN STATE AND CHANGE TO GREEN
                    height="28px"
                    weight="28px"
                    onClick={handleIconOnClick}
                    color="green"
                  />
                  {/* </Link> */}
                </Toolbar>
              </AppBar>
              {isClicked ? (
                <div
                  style={{
                    position: "absolute",
                    right: "0%",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "3px 3px 10px 3px grey",
                  }}
                >
                  <Notify />
                </div>
              ) : null}
            </Box>
            <div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 5,
                  width: "90%",
                  margin: "2%",
                }}
              >
                <Form />
              </div>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
