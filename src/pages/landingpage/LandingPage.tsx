import { Carousel } from '@mantine/carousel'
import cakesWeek from '../../components/bolododia/BoloDoDia'
import { SlideCake } from '../../components/slidecake'
import './LandingPage.css'
const LandingPage = () => {
	console.log(cakesWeek)

	return (
		<Carousel
			className='Container'
			sx={{ maxWidth: '100%' }}
			mx='auto'
			withIndicators
			height={600}
		>
			{cakesWeek.map((cakename) => (
				<Carousel.Slide>
					<SlideCake text={cakename.desc} day={cakename.day} />
				</Carousel.Slide>
			))}
		</Carousel>
	)
}
export default LandingPage
