import cakeimage from '../../assets/img/cake.jpg'
import { FC } from 'react'
import './SlideCake.css'

interface SlideCakeProps {
	text: Array<string>
	day: string
}

const SlideCake: FC<SlideCakeProps> = ({ text, day }) => {
	return (
		<div className='container'>
			<img className='imagecake' src={cakeimage} alt='imagem do bolo' />
			<a>{day}</a>
			{text.map((tex) => (
				<ul>
					<li>{tex}</li>
				</ul>
			))}
		</div>
	)
}
export default SlideCake
