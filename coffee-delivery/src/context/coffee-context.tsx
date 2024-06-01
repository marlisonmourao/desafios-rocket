import { createContext, type ReactNode, useContext, useState } from 'react'

interface CoffeeProps {
  name: string
  details: string
  badgeText: string[]
  image: string
  price: number
}

interface CoffeeOrdersProps extends CoffeeProps {
  quantity: number
}

interface CoffeeContextProps {
  addCoffeeOrders: (coffeeOrder: CoffeeOrdersProps) => void
  coffeeOrders: CoffeeOrdersProps[]
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeOrders, setCoffeeOrders] = useState<CoffeeOrdersProps[]>([])

  function addCoffeeOrders(order: CoffeeOrdersProps) {
    setCoffeeOrders((prev) => [...prev, order])
  }

  return (
    <CoffeeContext.Provider value={{ addCoffeeOrders, coffeeOrders }}>
      {children}
    </CoffeeContext.Provider>
  )
}

export function useCoffeeOrder() {
  const context = useContext(CoffeeContext)

  return context
}
