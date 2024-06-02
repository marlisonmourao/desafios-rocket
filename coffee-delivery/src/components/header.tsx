import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { useCoffeeOrder } from '@/context/coffee-context'

export function Header() {
  const { coffeeOrders } = useCoffeeOrder()

  return (
    <header className="flex w-full items-center justify-between">
      <Link to="/">
        <img src="./logo.svg" alt="" />
      </Link>

      <div className="flex items-center gap-3">
        <div className="flex gap-2 rounded-md bg-purple-light p-2">
          <MapPin size={22} className="text-purple" />
          <span className="text-purple-dark">Manaus, AM</span>
        </div>

        <Link to="/checkout">
          <div className="relative rounded-md bg-yellow-light p-2">
            {coffeeOrders.length > 0 && (
              <div className="absolute -right-2 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark">
                <span className="text-white">{coffeeOrders.length}</span>
              </div>
            )}
            <ShoppingCart size={22} className="text-yellow-dark" />
          </div>
        </Link>
      </div>
    </header>
  )
}
