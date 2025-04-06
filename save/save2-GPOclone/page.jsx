import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <main className="p-4 w-screen h-[70vh]">
      <div className="flex justify-center items-center">
        <div className="max-w-3xl flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Crafting Digital Experiences</h1>
          <br />
          <p>From concept to code, we transform your vision into engaging, responsive, and powerful web solutions.</p>

          <section className="flex justify-start gap-2 mt-4">
            <Link href={'/pages/about'} className="btn-white">
              About -{">"}
            </Link>
            <Link href={'/pages/post'} className="btn">
              Post -{">"}
            </Link>
          </section>

          <figure className="rounded-lg px-10 mt-4">
            <Image src={'/images/hero-image.webp'} alt="hero-image.webp" width='700' height='700' className="w-full h-full object-cover"
              priority />
          </figure>
        </div>
      </div>
    </main>
  )
}

export default Home