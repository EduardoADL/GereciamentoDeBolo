import { Carousel } from '@mantine/carousel'
import './LandingPage.css'
const LandingPage = () => {
	return (
		<Carousel
			className='Container'
			sx={{ maxWidth: '100%' }}
			mx='auto'
			withIndicators
			height={600}
		>
			<Carousel.Slide>1</Carousel.Slide>
		</Carousel>
	)
}
export default LandingPage
