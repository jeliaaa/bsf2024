import Timer from '@/components/Timer'
import { satisfyFont } from '@/fonts/fonts';
export default function Home() {
  return (
    <main className="flex items-center justify-between p-24 flex-col">
      <h1 className={`text-4xl text-center ${satisfyFont}`}>Hey CUCI!</h1>
      <hr className='my-7 w-full' />
      <Timer />
    </main>
  );
}
