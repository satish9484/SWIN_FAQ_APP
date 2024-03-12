import { Link } from "react-router-dom";
import { Union, UserICon } from "../svg";

function getSidebarItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}



// Sidebar items for student
export const studentSidebarItems = [
  getSidebarItem(
    "Dashboard",
    "dashboard",
    <Link to="/swin/dashboard">
      <Union />
    </Link>
  ),
  
  getSidebarItem(
    "Helpline",
    "helpline",
    <Link to="/swin/helpline">
      <UserICon />
    </Link>
  ),
];


