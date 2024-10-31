import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
    width?: number;
    link?: boolean;
    height?: number;
}

export default function Logo({ width = 150, link, height = 100 }: LogoProps) {
    return (
        <Link className='block' href={link ? "/" : "#"}>
            <Image
                src={`/media/images/logo-dark.svg`}
                alt='image logo'
                width={width}
                height={height}
            />
        </Link>
    )
}
