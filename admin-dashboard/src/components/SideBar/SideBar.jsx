import classes from './SideBar.module.scss'
import {
  Logout,
  AccountCircle,
  Settings,
  Psychology,
  HealthAndSafety,
  NotificationsActive,
  BarChart,
  Dashboard,
  Person,
  Inventory,
  ViewList,
  LocalShipping,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const SideBar = ({ setTheme }) => {
  const lightTheme = () => {
    setTheme('light')
  }
  const darkTheme = () => {
    setTheme('dark')
  }

  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <Link to="/">
          <span className={classes.logo}>Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className={classes.center}>
        <ul>
          <p className={classes.title}>MAIN</p>
          <Link to="/">
            <li>
              <Dashboard className={classes.icon} />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className={classes.title}>LISTS</p>
          <Link to="/users">
            <li>
              <Person className={classes.icon} />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <Inventory className={classes.icon} />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ViewList className={classes.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className={classes.icon} />
            <span>Delivery</span>
          </li>
          <p className={classes.title}>USEFUL</p>
          <li>
            <BarChart className={classes.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActive className={classes.icon} />
            <span>Notifications</span>
          </li>
          <p className={classes.title}>SERVICE</p>
          <li>
            <HealthAndSafety className={classes.icon} />
            <span>System Health</span>
          </li>
          <li>
            <Psychology className={classes.icon} />
            <span>Logs</span>
          </li>
          <li>
            <Settings className={classes.icon} />
            <span>Settings</span>
          </li>
          <p className={classes.title}>USER</p>
          <li>
            <AccountCircle className={classes.icon} />
            <span>Profile</span>
          </li>
          <li>
            <Logout className={classes.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className={classes.bottom}>
        <div className={classes.lightTheme} onClick={lightTheme}></div>
        <div className={classes.darkTheme} onClick={darkTheme}></div>
      </div>
    </div>
  )
}

export default SideBar
