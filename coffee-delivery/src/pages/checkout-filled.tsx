import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { ButtonSelect } from '@/components/button-select'
import { Input } from '@/components/input'

export function CheckoutFilled() {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-bold text-base-subtitle">
        Complete seu pedido
      </h2>

      <form className="mt-4 w-[38.5rem]">
        <div className="rounded-md bg-base-card p-10">
          <div className="flex gap-2">
            <MapPinLine size={22} className="text-yellow-dark" />

            <div>
              <span className="block text-base text-base-subtitle">
                Endereço de Entrega
              </span>
              <span className="text-sm text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="w-[12.5rem]">
              <Input placeholder="CEP" />
            </div>

            <Input placeholder="Rua" />

            <div className="flex gap-3">
              <Input placeholder="Número" />
              <Input placeholder="Complemento" />
            </div>

            <div className="flex gap-3">
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />

              <div className="">
                <Input placeholder="UF" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-md bg-base-card p-10">
          <div className="flex gap-2">
            <CurrencyDollar size={22} className="text-purple" />

            <div>
              <span className="block text-base text-base-subtitle">
                Pagamento
              </span>
              <span className="text-sm text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <ButtonSelect title="Cartão de crédito" icon={CreditCard} />
            <ButtonSelect title="cartão de débito" icon={Bank} />
            <ButtonSelect title="Dinheiro" icon={Money} />
          </div>
        </div>
      </form>
    </div>
  )
}
