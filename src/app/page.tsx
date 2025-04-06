import InputContext from "./components/InputContext"

const Home = () => {
  return (
    <main >
      <div className='flex flex-col mx-16'>
        <div className='text-4xl'>Crafting Digital Experiences</div>
        <p className='text-sm'>From concept to code, we transform your vision into engaging, responsive, and powerful web solutions.</p>

        <section className='flex gap-2.5 mt-6'>
          <button className='bg-white text-black rounded-full p-1.5 px-4 text-xs'>Start Project</button>
          <button className='rounded-full p-1.5 px-4 border text-xs'>Learn More</button>
        </section>

        <img src="https://graphio.co.th/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.7999c522.webp&w=1920&q=75" alt="Hero" className='mt-4' />
      </div>

      <section>
        <InputContext />
      </section>
    </main>
  )
}

export default Home