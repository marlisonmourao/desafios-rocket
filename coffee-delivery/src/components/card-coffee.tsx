import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import { useCoffeeOrder } from '@/context/coffee-context'

interface CardCoffeeProps {
  name: string
  details: string
  badgeText: string[]
  image: string
  price: number
}

interface Props {
  items: CardCoffeeProps
}

export function CardCoffee({ items }: Props) {
  const { addCoffeeOrders } = useCoffeeOrder()

  const [quantity, setQuantity] = useState(1)

  function addCoffeeQuantity() {
    setQuantity((prev) => prev + 1)
  }

  function minusCoffeeQuantity() {
    setQuantity((prev) => {
      if (prev <= 1) {
        return prev
      }

      return prev - 1
    })
  }

  function handleCoffeeOrders() {
    addCoffeeOrders({ ...items, quantity })
    setQuantity(1)
  }

  return (
    <div className="flex w-72 flex-col items-center rounded-bl-[32px] rounded-br-md rounded-tl-md rounded-tr-[32px] bg-base-card px-6">
      <div className="flex flex-col items-center justify-center">
        <img src={items.image} alt="" className="-mt-6 h-[120px] w-[120px]" />

        <div className="flex items-center gap-2">
          {items.badgeText.map((badge) => (
            <span
              key={badge}
              className="mt-3 inline-block rounded-full bg-yellow-light p-2 text-xs font-bold uppercase text-yellow-dark"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center">
        <p className="font-title text-xl font-bold"> {items.name}</p>

        <span className="text-center text-sm">{items.details}</span>
      </div>

      <div className="mt-8 flex w-full items-center justify-between pb-5">
        <div>
          <span className="text-base text-base-text">
            R${' '}
            <span className="font-title text-2xl font-bold text-base-text">
              {items.price}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-base-button p-2">
            <button onClick={minusCoffeeQuantity}>
              <Minus size={22} />
            </button>
            <span className="text-lg">{quantity}</span>
            <button onClick={addCoffeeQuantity}>
              <Plus size={22} />
            </button>
          </div>
          <button
            className="rounded-lg bg-purple-dark p-2"
            onClick={handleCoffeeOrders}
          >
            <ShoppingCart size={30} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
