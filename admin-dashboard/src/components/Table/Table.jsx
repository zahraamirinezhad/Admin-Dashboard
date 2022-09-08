import classes from './Table.module.scss'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { LastTransactions } from '../../LastTransactionsData'

const MyTable = (props) => {
  return (
    <TableContainer className={`${props.className} ${classes.table}`}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Tracking ID</TableCell>
            <TableCell className={classes.tableCell}>Product</TableCell>
            <TableCell className={classes.tableCell}>Customer</TableCell>
            <TableCell className={classes.tableCell}>Date</TableCell>
            <TableCell className={classes.tableCell}>Amount</TableCell>
            <TableCell className={classes.tableCell}>Payment</TableCell>
            <TableCell className={classes.tableCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {LastTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className={classes.tableCell}>
                {transaction.id}
              </TableCell>
              <TableCell className={classes.tableCell}>
                <div className={classes.cellWrapper}>
                  <img
                    src={transaction.img}
                    alt="product img"
                    className={classes.productImg}
                  />
                  {transaction.product}
                </div>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {transaction.customer}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {transaction.date}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {transaction.amount}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {transaction.method}
              </TableCell>
              <TableCell className={`${classes.tableCell}`}>
                <span
                  className={`${classes.status} ${
                    transaction.status === 'Approved'
                      ? classes.Approved
                      : classes.Pending
                  }`}
                >
                  {transaction.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MyTable
