'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {

  const { data: session } = useSession();

  return (
    <div className="bg-black text-white w-full h-16 flex justify-between p-5">
      <div>
        Notes App
      </div>
      <div>
        {
          session ? (
            <button
              onClick={async () => {
                await signOut({
                  callbackUrl: "/",
                })
              }
              }>
              Logout
            </button>
          ) : (
            <button onClick={() => signIn()}>
              Login
            </button>
          )
        }
      </div>
    </div>
  )
}
