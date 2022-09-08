import classes from './SinglePage.module.scss'
import { Navbar, Chart, MyTable } from '../../components'
import avatar from '../../images/avatar.jpg'

const UserSinglePage = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.top}>
        <div className={classes.left}>
          <button className={classes.editButton}>Edit</button>
          <h1 className={classes.title}>Information</h1>
          <div className={classes.item}>
            <img src={avatar} alt="avatar" className={classes.itemImage} />
            <div className={classes.details}>
              <h1 className={classes.itemTitle}>Jane Doe</h1>
              <div className={classes.detailItem}>
                <span className={classes.itemKey}>Email : </span>
                <span className={classes.itemValue}>
                  zahraamiri1381216@yahoo.com
                </span>
              </div>
              <div className={classes.detailItem}>
                <span className={classes.itemKey}>Phone : </span>
                <span className={classes.itemValue}>1234567890</span>
              </div>
              <div className={classes.detailItem}>
                <span className={classes.itemKey}>Address : </span>
                <span className={classes.itemValue}>
                  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                  lorem
                </span>
              </div>
              <div className={classes.detailItem}>
                <span className={classes.itemKey}>Country : </span>
                <span className={classes.itemValue}>USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <Chart aspect={4 / 1} title="User Spending ( Last 6 Months )" />
        </div>
      </div>
      <div className={classes.bottom}>
        <h1 className={classes.tableTitle}>Last Transactions</h1>
        <MyTable className={classes.lastTransactionData} />
      </div>
    </div>
  )
}

export default UserSinglePage
