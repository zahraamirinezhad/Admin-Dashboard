import classes from './NewPage.module.scss'
import { Navbar } from '../../components'
import camera from '../../images/camera.png'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { useState } from 'react'

const NewPage = ({ title, data }) => {
  const [file, setFile] = useState('')

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.top}>
        <h1 className={classes.title}>{title}</h1>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <img
            src={file !== '' ? URL.createObjectURL(file) : camera}
            alt="camera"
            style={{
              width: file !== '' ? 'fit-content' : '100px',
              height: file !== '' ? 'fit-content' : '100px',
            }}
          />
        </div>
        <div className={classes.right}>
          <form>
            <div className={classes.formInput}>
              <label htmlFor="file">
                <DriveFolderUploadOutlinedIcon
                  className={classes.selectImage}
                />
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            {data.map((dt) => (
              <div className={classes.formInput} key={dt.id}>
                <label>{dt.label}</label>
                <input type={dt.type} />
              </div>
            ))}
            <button className={classes.send}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPage
