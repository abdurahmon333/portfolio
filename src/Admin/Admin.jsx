import { Outlet, Route, Routes } from 'react-router-dom'
import AdminHeader from '../Admin/AdminHeader'
import AdminAbout from './AdminPages/AdminWork'


export default function Admin() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  )
}
