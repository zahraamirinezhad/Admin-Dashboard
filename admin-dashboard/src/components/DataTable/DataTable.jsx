import './DataTable.scss'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { userRow, userColumn } from '../../DataTableSource'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const DataTable = () => {
  const [data, setData] = useState(userRow)
  const location = useLocation()

  const deleteUser = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/1234">
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deleteUser(params.row.id)}
            >
              Delete
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <div className="container">
      <div className="addNewUserContainer">
        <Link className="addNewUser" to={`${location.pathname}/new`}>
          {location.pathname === '/users' ? 'Add New User' : 'Add New Product'}
        </Link>
      </div>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          className="tableContainer"
          rows={data}
          columns={userColumn.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  )
}

export default DataTable
