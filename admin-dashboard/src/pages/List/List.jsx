import classes from './List.module.scss'
import { Navbar, DataTable } from '../../components'

const UsersList = () => {
  return (
    <div className={classes.listContainer}>
      <Navbar />
      <DataTable />
    </div>
  )
}

export default UsersList
