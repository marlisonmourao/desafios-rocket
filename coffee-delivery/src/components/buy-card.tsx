import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface BuyCardProps {
  minusCoffeeQuantity: () => void
  addCoffeeQuantity: () => void
  handleCoffeeOrders: () => void
  quantity: number
}

export function BuyCard({
  addCoffeeQuantity,
  handleCoffeeOrders,
  minusCoffeeQuantity,
  quantity,
}: BuyCardProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 rounded-md bg-base-button p-1">
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
        <ShoppingCart size={24} className="text-white" />
      </button>
    </div>
  )
}
