import classes from './Featured.module.scss'
import {
  MoreVert,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
  return (
    <div className={classes.featured}>
      <div className={classes.top}>
        <h1 className={classes.title}>Total Revenue</h1>
        <MoreVert className={classes.icon} />
      </div>
      <div className={classes.bottom}>
        <div className={classes.featuredChart}>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={4} />
        </div>
        <p className={classes.title}>Total sales made today</p>
        <p className={classes.amount}>$123</p>
        <p className={classes.desc}>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className={classes.summary}>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Target</div>
            <div className={`${classes.itemResult} ${classes.neutral}`}>
              <KeyboardArrowDown className={classes.icon} />
              <div className={classes.resultAmount}>$12.34k</div>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Last Week</div>
            <div className={`${classes.itemResult} ${classes.negative}`}>
              <KeyboardArrowDown className={classes.icon} />
              <div className={classes.resultAmount}>$12.34k</div>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.itemTitle}>Last Month</div>
            <div className={`${classes.itemResult} ${classes.positive}`}>
              <KeyboardArrowUp className={classes.icon} />
              <div className={classes.resultAmount}>$12.34k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
