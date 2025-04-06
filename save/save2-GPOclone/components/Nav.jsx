import Link from "next/link"

const Nav = () => {
    return (
<nav>
    <div className='flex justify-between bg-black text-white p-4'>
        <div>
        <Link href={'/'}>Graphio Clone</Link>
        </div>
        <ul className='flex gap-4 bg-gray-700 rounded-full py-1 px-4'>
            <Link href={'/'} className="hover:underline hover:text-blue-400">home</Link>
            <Link href={'/pages/about'} className="hover:underline hover:text-blue-400">about</Link>
            <Link href={'/pages/post'} className="hover:underline hover:text-blue-400">post</Link>
        </ul>
    </div>
</nav>
    )
}

export default Nav