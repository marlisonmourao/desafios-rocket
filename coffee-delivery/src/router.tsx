import { createBrowserRouter } from 'react-router-dom'

import LayoutRoot from './pages/_layout'
import { CheckoutFilled } from './pages/checkout-filled'
import { Home } from './pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoot />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <CheckoutFilled />,
      },
    ],
  },
])
