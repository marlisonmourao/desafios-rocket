import { CardCoffee } from '@/components/card-coffee'
import { ItemsCart } from '@/components/items-cart'
import { coffees } from '@/utils/data'

export function Home() {
  return (
    <div>
      <div className="mt-24 flex w-full justify-between">
        <div className="flex-1">
          <div>
            <h1 className="font-title text-5xl font-extrabold text-base-title">
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>

            <h2 className="mt-4 text-xl text-base-title">
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
              qualquer hora
            </h2>
          </div>

          <div className="mt-20">
            <ItemsCart />
          </div>
        </div>

        <div>
          <img src="./coffee.svg" alt="" />
        </div>
      </div>

      <h3 className="mt-28 font-title text-[2rem] font-bold text-base-subtitle">
        Nossos cafés
      </h3>

      <main className="mt-14 grid grid-cols-4 gap-8">
        {coffees.map((coffee) => (
          <div key={coffee.id} className="flex gap-8">
            <CardCoffee items={coffee} />
          </div>
        ))}
      </main>
    </div>
  )
}
