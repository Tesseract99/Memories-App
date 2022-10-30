import {
  appBarSx,
  headingSx,
  imageSx,
  toolbar,
  profile,
  purple,
  userName,
} from "./styles";
import { useState } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Paper,
  Toolbar,
  Avatar,
  Button,
} from "@mui/material";
import memories from "../..//images/memories.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../../store/slice/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  let authData = useSelector((state) => state.auth.authData);
  useEffect(() => {
    console.log("useEffect ran!");
    setUser(JSON.parse(localStorage.getItem("profile")));
    if (JSON.parse(localStorage.getItem("profile"))) {
      navigate("/posts");
    }
  }, [authData]);

  const handleLogout = () => {
    setUser(null);
    dispatch(logout());
    navigate("/posts");
  };
  return (
    <AppBar sx={appBarSx} position="static" color="inherit">
      <div>
        <Typography
          component={Link}
          to="/"
          sx={headingSx}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img style={imageSx} src={memories} alt="memories" height="200" />
      </div>
      {/* Implement condidional rendering of sign in/out buttons here */}
      <Toolbar sx={toolbar}>
        {user ? (
          <div style={profile}>
            <Avatar
              sx={purple}
              alt={user?.result?.name}
              src={user?.result?.imageUrl}
            >
              {user?.result?.name.charAt(0)}
            </Avatar>
            <Typography sx={userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
