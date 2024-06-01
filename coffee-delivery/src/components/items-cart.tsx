import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function ItemsCart() {
  return (
    <div className="mt-auto grid grid-cols-2 gap-5">
      <div className="flex items-center gap-3">
        <div className="inline-block rounded-full bg-yellow-dark p-2">
          <ShoppingCart size={16} className="text-white" fill="white" />
        </div>
        <span className="text-base text-base-text">
          Compra simples e segura
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="inline-block rounded-full bg-base-text p-2">
          <Package size={16} className="text-white" fill="white" />
        </div>
        <span className="text-base text-base-text">
          Embalagem mantém o café intacto
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="inline-block rounded-full bg-yellow p-2">
          <Timer size={16} className="text-white" fill="white" />
        </div>
        <span className="text-base text-base-text">
          Entrega rápida e rastreada
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="inline-block rounded-full bg-purple p-2">
          <Coffee size={16} className="text-white" fill="white" />
        </div>
        <span className="text-base text-base-text">
          O café chega fresquinho até você
        </span>
      </div>
    </div>
  )
}
