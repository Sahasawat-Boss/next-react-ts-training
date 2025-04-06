import Link from "next/link"

const Footer = () => {
    return (
        <main>
            <div className='flex flex-col items-center justify-center gap-4 bg-black/80 text-white p-4'>
                <div>
                <Link href={'/'} className="hover:underline hover:text-blue-400">Graphio Clone</Link>
                </div>
                <ul className='flex gap-4'>
                    <Link href={'/'} className="hover:underline hover:text-blue-400">home</Link>
                    <Link href={'/pages/about'} className="hover:underline hover:text-blue-400">about</Link>
                    <Link href={'/pages/post'} className="hover:underline hover:text-blue-400">post</Link>
                </ul>
            </div>
        </main>
    )
}

export default Footer