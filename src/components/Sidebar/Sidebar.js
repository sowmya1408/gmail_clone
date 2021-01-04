import React from "react";
import { Button } from "@material-ui/core";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import InboxIcon from "@material-ui/icons/Inbox";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOptions Icon={InboxIcon} title="Inbox" number={54} />
    </div>
  );
};

export default Sidebar;
