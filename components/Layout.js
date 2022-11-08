import { useRef } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
    const ref = useRef()
    const router = useRouter()

    return (
        <div
            ref={ref}
            className={`flex flex-col min-h-screen`}
            style={{
                'background': router?.pathname === "/Play" || router?.pathname === "/" ? '#F5F5F5' : 'linear-gradient(180deg, #F67C65 0%, #F4674C 59.13%)'
            }}
        >
            <Head>
                <title>Klass Bits</title>
                <meta name="description" content="Klass Bits" />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            
            {
                router?.pathname === "/Play" || router?.pathname === "/" ?
                    <>
                        <Navbar />
                        <main className='container px-1 mx-auto justify-between w-full min-h-screen h-auto py-1 mt-16 mb-16'>{children}</main>
                    </>
                    :
                    <main className='container px-1 mx-auto justify-between w-full min-h-screen h-auto py-1 mb-6'>{children}</main>

            }

            <Footer />
        </div>
    )
}