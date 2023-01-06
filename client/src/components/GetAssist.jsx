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

const theme = createTheme({
  palette: {
    primary: "",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const styles = {
  logoButton: {
    // fontFontFamily: "Itim",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "800",
    lineHeight: "19px",
    padding: "40px",
  },
  input: {
    height: "100%",
    width: "100%",
    border: "none",
    padding: "10px 0 10px 10px",
  },
  textInput: {
    height: "270px",
    width: "464px",
    left: "741px",
    bottom: "582px",
    borderRadius: "10px",
    border: "0.5px solid",
    // fontFontFamily: "Itim",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "800",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  sendButton: {
    backgroundColor: "white",
    padding: "7px",
    borderRadius: "10px",
    margin: "14px",
  },
};

function Notify() {
  const [allQueries, setAllQueries] = useState([]);

  function getQueries() {
    fetch("http://localhost:3001/queries")
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

  useEffect(() => {
    getQueries();
  }, []);

  return (
    <div style={{ maxHeight: "7%", width: "3.5%" }}>
      {/* <div style={{ backgroundColor: "orange", height: "30px" }}></div> */}
      Notifications
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
    <form action="http://localhost:3001/queries" method="POST">
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
              <select
                name="flavor"
                style={styles.input}
              >
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
            <div>
              <Item>
                <textarea
                  style={{
                    width: "99%",
                    height: "99%",
                    border: "none",
                    // fontFamily: "Inter, Helvetica",
                  }}
                  maxLength="70"
                  cols="50"
                  name="comment"
                  placeholder="Here is what I have tried..."
                ></textarea>
              </Item>
            </div>
          </Grid>
          <button style={styles.sendButton}>Submit</button>
        </Grid>
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
                      icon="openmoji:help-others"
                      color="#ffffff"
                      width="28px"
                      height="28px"
                    />
                    {/* Give assist */}
                  </Link>
                  <Icon
                    icon="arcticons:notificationcron"
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
                    // backgroundColor: "green",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "3px 3px 10px 3px grey",
                  }}
                >
                  {/* <div style={{ width: "20px", height: "20px" }}></div> */}
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
