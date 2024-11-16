import Image from 'next/image';
import bg_landscape from '../../../public/bg_landscape.jpg';
import './bgImage.scss';

export default function BgImage() {
    return (
        <Image
			alt="Background image"
			src={bg_landscape}
			placeholder="blur"
			quality={100}
			fill={true}
			sizes="100vw"
			style={{
				objectFit: 'fill',
			}}
		/>
    )
}