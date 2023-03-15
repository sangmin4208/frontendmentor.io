import Image from 'next/image'
import { Outfit } from 'next/font/google'

const outpit = Outfit({
  subsets: ['latin'],
})

const Page = () => {
  return (
    <div
      style={{
        backgroundColor: '#F9FAFB',
      }}
      className='flex justify-center items-center h-screen'
    >
      <div
        style={{
          boxShadow: '0px 25px 25px rgba(0, 0, 0, 0.0476518)',
          borderRadius: '20px',
        }}
        className='flex flex-col w-[320px] rounded-[20px] bg-white
        p-4 '
      >
        <div className='relative w-full rounded-[20px] overflow-hidden'>
          <Image
            src='/qr-code-component/image-qr-code.png'
            alt='QR Code'
            width={288}
            height={288}
          ></Image>
        </div>
        <div
          className={`${outpit.className} text-center py-[22px]
            flex flex-col gap-[16px] px-[16px]
        `}
        >
          <h1
            style={{
              color: 'hsl(218, 44%, 22%)',
            }}
            className='text-2xl font-bold text-gray-800 text-[22px]'
          >
            Improve your front-end skills by building projects
          </h1>
          <p
            style={{
              color: ' hsl(220, 15%, 55%)',
            }}
            className='text-[15px]
            
          '
          >
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
