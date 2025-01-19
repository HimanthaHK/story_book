import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='grid grid-flow-col-1 md:grid-cols-2'>
      <div>
        <Image src={'/login1.webp'} alt='login' width={800} height={1000} className='w-full' />
      </div>

      <div className='flex justify-center items-center h-screen order-first md:order-last'>
        <SignIn />
      </div>
    </div>
  );
}
