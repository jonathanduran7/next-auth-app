'use client'

import { useRouter } from "next/navigation";

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {

  const { push } = useRouter();

  return (
    <div className="flex h-screen">
      <div className="bg-neutral-50 w-[250px]">
        <ul className="flex flex-col items-center gap-4 pt-7">
          <li className="cursor-pointer" onClick={() => push('/home')}>Home</li>
          <li className="cursor-pointer" onClick={() => push('/home/panel')}>Panel</li>
        </ul>
      </div>
      <div className="grow p-7" >
        {children}
      </div>
    </div>
  )
}
