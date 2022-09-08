import classes from './Home.module.scss'
import { Navbar, Widget, Featured, Chart, MyTable } from '../../components'

const Home = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.widgets}>
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className={classes.charts}>
        <Featured />
        <Chart aspect={2 / 1} title="Last 6 Month ( Revenue )" />
      </div>
      <div className={classes.listContainer}>
        <div className={classes.listTitle}></div>
        <MyTable />
      </div>
    </div>
  )
}

export default Home
