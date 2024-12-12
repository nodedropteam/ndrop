import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { HiMenuAlt3 } from "react-icons/hi";


export default function Header() {
    return (
        <header className='wrapper bg-brand-green text-white font-[family-name:var(--font-body)]'>
            <div className="container mx-auto px-4 flex items-center justify-between py-6">
                <div className="logo">
                    <span className="sr-only">Little Horizons Logo</span>
                    <Image
                        src={`lhd-logo.svg`}
                        width={125}
                        height={100}
                        alt='logo'
                    />
                </div>

                <div className="navigation flex gap-4">
                    <nav>
                        <ul className='max-lg:hidden lg:flex hidden h-full items-center'>
                            <li>
                                <Link href={`#`}>
                                    <Button size={`sm`} variant={`ghost`}>Home</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={`#`}>
                                    <Button size={`sm`} variant={`ghost`}>About Us</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={`#`}>
                                    <Button size={`sm`} variant={`ghost`}>Programs & Activities</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={`#`}>
                                    <Button size={`sm`} variant={`ghost`}>Contact Us</Button>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="action lg:block hidden">
                        <Link href={`#`}>
                            <Button>
                                Enroll Today
                            </Button>
                        </Link>
                    </div>
                    <Button variant={`default`} size={`icon`} className='lg:hidden'>
                        <HiMenuAlt3 />
                    </Button>
                </div>
            </div>
        </header>
    )
}
