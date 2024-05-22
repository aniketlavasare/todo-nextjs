import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className=' flex flex-col justify-center items-center h-screen '>
      <Link href={'/dashboard/home'}>
      <div className=' text-center'>Yo! Welcome to the ToDo App</div>
      </Link>
    </div>
  );
}
