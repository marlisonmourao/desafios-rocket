import { MapPin } from 'phosphor-react'

export function Header() {
  return (
    <header className="w-full justify-between flex">
      <img src="./logo.svg" alt="" />

      <div>
        <div className="bg-purple-light flex p-2 gap-1 rounded-md">
          <MapPin size={22} className="text-purple" />
          <span className="text-purple-dark">Manaus, AM</span>
        </div>
        <div></div>
      </div>
    </header>
  )
}
