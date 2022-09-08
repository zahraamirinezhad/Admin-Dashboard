import classes from './App.module.scss'
import { Home, Login, List, SinglePage, NewPage } from './pages'
import { Routes, Route } from 'react-router-dom'
import { ProductsForm, UsersForm } from './FormSource'
import useLocalStorageState from 'use-local-storage-state'
import { SideBar } from './components'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorageState(
    'theme',
    defaultDark ? 'dark' : 'light',
  )

  const switchTheme = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <div className={classes.home} data-theme={theme}>
      <SideBar setTheme={switchTheme} />
      <div className={classes.container}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<NewPage title="Add New User" data={UsersForm} />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  <NewPage title="Add New Product" data={ProductsForm} />
                }
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
