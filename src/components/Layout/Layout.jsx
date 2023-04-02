import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
import PaidIcon from "@mui/icons-material/Paid";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UserModal from "./UserModal";
import companyModal from './CompanyModal';
import CompanyModal from "./CompanyModal";
import PixRoundedIcon from "@mui/icons-material/PixRounded"
const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [userModal,setUserModal]  = React.useState(false);
  const [companyModal,setCompanyModal] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawerList">
      <Toolbar
        color="primary"
        sx={{ background: "#1976d2", visibility: "hidden" }}
      />
      <Divider />
      <div className="p-3">
        {props.isUser ? (
          <ListItem key="1" disablePadding>
            <ListItemButton
              className="rounded"
              sx={{ backgroundColor: "var(--secondary)" }}
              onClick={()=>{setUserModal(true)}}
              >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={"Earn Credits"} />
            </ListItemButton>
          </ListItem>
        ) : (
         <></>
        )}
      </div>

      <List>
        <Link to="/">
          <ListItem key="1" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardCustomizeIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
        </Link>
        {/* <Divider /> */}
        <Link to="/credits">
          <ListItem key="2" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongIcon />
              </ListItemIcon>
              <ListItemText primary={"Credits"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/activities">
          <ListItem key="8" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongIcon />
              </ListItemIcon>
              <ListItemText primary={"Social Activities"} />
            </ListItemButton>
          </ListItem>
        </Link>
        {/* <Divider /> */}
        <Link to="/top">
          <ListItem key="3" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PaymentsIcon />
              </ListItemIcon>
              <ListItemText primary={"Top Contributers"} />
            </ListItemButton>
          </ListItem>
        </Link>
    
       
      </List>
      <List>
        {/* <ListItem key="6" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact Us"} />
          </ListItemButton>
        </ListItem>
        <ListItem key="7" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"About Us"} />
          </ListItemButton>
        </ListItem> */}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar sx={{ backgroundColor: "var(--primary)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <PixRoundedIcon sx={{ m: 1 }} fontSize="large" />
          <Typography variant="h6" component="div">
             Xchange
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <div className="drawer">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
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
            open>
            {drawer}
          </Drawer>
        </div>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          borderLeft: "2px solid var(--border)",
        }}>
        <Toolbar />
        <Outlet />
      </Box>
    <UserModal userModal={userModal} setUserModal={setUserModal} backend={props.backend}/>
    <CompanyModal companyModal={companyModal} setCompanyModal={setCompanyModal} backend={props.backend}/>
    </Box>
  );
}

export default Layout;
