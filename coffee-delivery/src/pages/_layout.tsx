import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export default function LayoutRoot() {
  return (
    <>
      <div className="mt-6">
        <Header />
      </div>

      <Outlet />
    </>
  )
}
