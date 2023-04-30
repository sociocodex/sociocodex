import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
return(  
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}

    >
      <div>  
      <Image
          className=""
          src="/logo.png"
          alt="sociocodex Logo"
          width={600}
          height={600}
          priority
       />
	<center>
		<h1 className={`text-base font-extrabold relative left-0 bottom-0 sm:text-4xl sm:left-0 sm:bottom-40`}>Website comming soon...</h1>
<h3 className={`text-sm font-bold relative left-0 bottom-0 sm:text-2xl sm:left-0 sm:bottom-40`}>Website made by Hussein Abdul-Ameer</h3>
	</center>


      </div>
    </main>
 )
}

