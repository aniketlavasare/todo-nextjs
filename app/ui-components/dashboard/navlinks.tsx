'use client';
import {
    HomeIcon,
    ChartBarSquareIcon,
    ArchiveBoxIcon,
} from '@heroicons/react/24/outline';
import Link from'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name: 'History', href: '/dashboard/history', icon: ArchiveBoxIcon},
    { name: 'Home', href: '/dashboard/home', icon: HomeIcon},
    { name: 'Progress', href: '/dashboard/statistics', icon: ChartBarSquareIcon},
  ];

export default function NavLinks(){
    const pathname = usePathname()
    return(
        <>
            {
                links.map((link, index) => {
                    const Icon = link.icon;
                    const isSecondElement = index === 1; 
                    const additionalClass = isSecondElement ? 'border-x-1' : '';
                    return(
                        <Link key={link.name} href={link.href} className={clsx('flex flex-row p-4 content-center hover:border-b-4', {'border-b-4': pathname === link.href, })}>
                            <Icon className='w-6 mr-2 '/>
                            <p className=" hidden md:inline">{link.name}</p>
                        </Link>
                    );
                })
            }
        </>
    );
}

