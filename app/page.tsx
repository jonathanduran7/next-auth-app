'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <button className="w-[120px] bg-red-200 h-[60px] rounded" onClick={() => push('/home')}>Go to Home</button>
    </div>
  );
}
