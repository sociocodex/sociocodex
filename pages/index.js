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
		<h1 className={`text-4xl font-extrabold relative left-0 bottom-40`}>Website comming soon...</h1>
<h3 className={`text-2xl font-bold relative left-0 bottom-40`}>Website comming soon...</h3>
<h2 className={`text-xl font-bold`}>color test for testing</h2>
	</center>


      </div>
    </main>
 )
}

