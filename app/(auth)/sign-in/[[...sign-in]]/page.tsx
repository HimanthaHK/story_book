import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return 
  {
    <div className='grid grid-flow-col-1 md:grid-cols-2'>
      <div>

      </div>

      <div className='flex justify-center items-center h-screen'>
        <SignIn/>

      </div>

    </div>
  }
}