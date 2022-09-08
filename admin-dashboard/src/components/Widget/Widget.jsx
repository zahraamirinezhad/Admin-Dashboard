import classes from './Widget.module.scss'
import {
  KeyboardArrowUpOutlined,
  PersonOutlineOutlined,
  AccountBalanceOutlined,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
} from '@mui/icons-material'

const Widget = ({ type }) => {
  let data

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineOutlined
            className={`${classes.icon} ${classes.users}`}
          />
        ),
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'See all orders',
        icon: (
          <ShoppingCartOutlined
            className={`${classes.icon} ${classes.orders}`}
          />
        ),
      }
      break
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'See all earnings',
        icon: (
          <MonetizationOnOutlined
            className={`${classes.icon} ${classes.earnings}`}
          />
        ),
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceOutlined
            className={`${classes.icon} ${classes.balance}`}
          />
        ),
      }
      break
    default:
      break
  }

  return (
    <div className={classes.widget}>
      <div className={classes.left}>
        <span className={classes.title}>{data.title}</span>
        <span className={classes.counter}>{data.isMoney && '$'} 1234</span>
        <span className={classes.link}>{data.link}</span>
      </div>
      <div className={classes.right}>
        <div className={`${classes.percentage} ${classes.positive}`}>
          <KeyboardArrowUpOutlined />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
