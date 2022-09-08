import classes from './Navbar.module.scss'
import {
  TocOutlined,
  MessageOutlined,
  Search,
  Language,
  DarkMode,
  FullscreenExit,
  NotificationsNoneOutlined,
} from '@mui/icons-material'
import avatar from '../../images/avatar.jpg'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <input type="text" placeholder="search ..." />
          <Search className={classes.searchIcon} />
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <Language className={classes.icon} />
            English
          </div>
          <div className={classes.item}>
            <DarkMode className={classes.icon} />
          </div>
          <div className={classes.item}>
            <FullscreenExit className={classes.icon} />
          </div>
          <div className={classes.item}>
            <NotificationsNoneOutlined className={classes.icon} />
            <div className={classes.counter}>1</div>
          </div>
          <div className={classes.item}>
            <MessageOutlined className={classes.icon} />
            <div className={classes.counter}>1</div>
          </div>
          <div className={classes.item}>
            <TocOutlined className={classes.icon} />
          </div>
          <div className={classes.item}>
            <img className={classes.avatar} src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
