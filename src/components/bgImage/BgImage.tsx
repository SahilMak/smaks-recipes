import Image from 'next/image';
import bg_landscape from '../../../public/bg_landscape.jpg';
import bg_landscape2 from '../../../public/bg_landscape2.jpg';
import './bgImage.scss';

export default function BgImage(props: Readonly<{ page: 'home' | 'about' }>) {
    return (
        <Image
			alt="Background image"
			src={props.page === 'home' ? bg_landscape : bg_landscape2}
			placeholder="blur"
			quality={100}
			fill={true}
			sizes="100vw"
			style={{
				objectFit: 'fill',
			}}
			priority
		/>
    )
}