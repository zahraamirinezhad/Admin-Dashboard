import Jon_Snow from './images/c5b5501c6e48b0bd6b1a1c20de393d4c.jpg'
import Cersei_Lannister from './images/fe841c7c4648303f84d67583fd6dc516.jpg'
import Jaime_Lannister from './images/dee4ee8244518487c5b64227e0451dce.jpg'
import Arya_Stark from './images/0893dbdb5085d2bc077ce91c5615a9d8.jpg'
import Daenerys_Targaryen from './images/1d856b6f9aaab5c3c093fd0f36afe0e7.jpg'
import Melisandre from './images/7e9bfa2f36d37e931d232326aabd0d4e.jpg'
import Harry_Potter from './images/87238c741cc587967e1c8087d6355231.jpg'
import Hermione_Granger from './images/f4a87de7a703c523f219957395d36789.jpg'
import Voldemort from './images/8e2f62aa9e435c3b0d72994abc287c65.jpg'

export const userRow = [
  {
    id: 1,
    userName: 'Jon Snow',
    image: Jon_Snow,
    status: 'active',
    email: 'jonsnow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    userName: 'Cersei Lannister',
    image: Cersei_Lannister,
    status: 'passive',
    email: 'cerseilannister@gmail.com',
    age: 30,
  },
  {
    id: 3,
    userName: 'Jaime Lannister',
    image: Jaime_Lannister,
    status: 'pending',
    email: 'jaimelannister@gmail.com',
    age: 45,
  },
  {
    id: 4,
    userName: 'Arya Stark',
    image: Arya_Stark,
    status: 'passive',
    email: 'aryastark@gmail.com',
    age: 16,
  },
  {
    id: 5,
    userName: 'Daenerys Targaryen',
    image: Daenerys_Targaryen,
    status: 'pending',
    email: 'daenerystargaryen@gmail.com',
    age: 40,
  },
  {
    id: 6,
    userName: 'Melisandre',
    image: Melisandre,
    status: 'pending',
    email: 'melisandre@gmail.com',
    age: 45,
  },
  {
    id: 7,
    userName: 'Harry Potter',
    image: Harry_Potter,
    status: 'passive',
    email: 'harrypotter@gmail.com',
    age: 30,
  },
  {
    id: 8,
    userName: 'Hermione Granger',
    image: Hermione_Granger,
    status: 'pending',
    email: 'hermionegranger@gmail.com',
    age: 30,
  },
  {
    id: 9,
    userName: 'Voldemort',
    image: Voldemort,
    status: 'active',
    email: 'voldemort@gmail.com',
    age: 100,
  },
]

export const userColumn = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userName',
    headerName: 'User Name',
    width: 230,
    renderCell: (params) => (
      <div className="cellWrapper">
        <img className="productImg" src={params.row.image} alt="user avatar" />
        {params.row.userName}
      </div>
    ),
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => (
      <div className={`status ${params.row.status}`}>{params.row.status}</div>
    ),
  },
]
