import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import PersonIcon from '@material-ui/icons/Person';
import AppsIcon from '@material-ui/icons/Apps';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 400
  },
  fullList: {
    width: 'auto'
  },
  birsey:{
    fontSize:'10rem'
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ left: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemLink href="/">
            <ListItemIcon><AppsIcon  /></ListItemIcon>
            <ListItemText primary="AnaSayfa" />
          </ListItemLink>
        <ListItemLink href="/blog">
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItemLink>
        <ListItemLink href="/hakkımda">
            <ListItemIcon><AssignmentIcon/></ListItemIcon>
            <ListItemText primary="Hakkımda" />
          </ListItemLink>
      </List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <BusinessCenterIcon />
        </ListItemIcon>
        <ListItemText primary="My Project" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );

  return (
    <div className="navbarlar">
      {
        <React.Fragment>
          <Button onClick={toggleDrawer("left", true)}>
          <div className="nav-iconbar">
                  <MenuIcon style={{fontSize:"4rem"}}/>
            </div>
            </Button>
          <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}