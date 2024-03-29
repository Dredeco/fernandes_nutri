import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import Services from '@/components/Services'
import CallToAction from '@/components/CallToAction'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import WhatsappButton from '@/components/WhatsappButton'
import About from '@/components/About'
import Feedback from '@/components/Feedback'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fernandes Nutri</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Inter:wght@300;400;600;700&family=Castoro+Titling&display=swap" rel="stylesheet"></link>
      </Head>
      <main className='main'>
        <Navbar />
        <Hero />
        <About />
        <CallToAction />
        <Services />
        <Feedback />
        <Blog />
        <Footer />
        <WhatsappButton />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
      </main>
    </>
  )
}
