import { useState } from 'react'

import { useCoffeeOrder } from '@/context/coffee-context'

import { BuyCard } from './buy-card'

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

  const price = items.price * quantity

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

      <div className="mt-8 flex w-full items-center justify-between gap-3 pb-5">
        <div>
          <span className="text-base text-base-text">
            <span className="font-title text-xl font-bold text-base-text">
              {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </span>
        </div>

        <BuyCard
          addCoffeeQuantity={addCoffeeQuantity}
          minusCoffeeQuantity={minusCoffeeQuantity}
          handleCoffeeOrders={handleCoffeeOrders}
          quantity={quantity}
        />
      </div>
    </div>
  )
}
