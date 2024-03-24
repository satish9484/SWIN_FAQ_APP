import { Link } from "react-router-dom";
import { Union } from "../svg";

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
];
