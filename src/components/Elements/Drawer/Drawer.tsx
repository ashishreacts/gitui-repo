import { Category, Delete, Home, Info, LocalOffer } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;

type SideNavigationItem = {
  name: string;
  to: string;
};
type SideItemDrawerProps = {
  children: React.ReactNode;
};

export const SideItemDrawer = ({ children }: SideItemDrawerProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const navigation: SideNavigationItem[] = [
    { name: "Home", to: "home" },
    { name: "Categories", to: "category" },
    { name: "Tags", to: "tags" },
    { name: "Archives", to: "archives" },
    { name: "About", to: "about" },
  ];

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Toolbar />
      <Stack direction="column" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="https://st4.depositphotos.com/12985790/23389/i/450/depositphotos_233890500-stock-photo-portrait-handsome-businessman-formal-wear.jpg"
          sx={{ width: 80, height: 80, marginBottom: 2 }}
        />
        <Typography variant="h6">John Doe</Typography>
      </Stack>
      <List>
        {navigation.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.to}
              sx={{
                minHeight: 48,
                justifyContent: mobileOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon>
                {index === 0 && <Home />}
                {index === 1 && <Category />}
                {index === 2 && <LocalOffer />}
                {index === 3 && <Delete />}
                {index === 4 && <Info />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <MenuIcon onClick={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
