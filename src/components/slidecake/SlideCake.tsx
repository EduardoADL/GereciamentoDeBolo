import cakeimage from '../../assets/img/cake.jpg'

const SlideCake = (desc: string) => {
	;<div>
		<img src={cakeimage} alt='imagem do bolo' />
		<div>
			<ul>
				<li>
					<a>{desc}</a>
				</li>
			</ul>
		</div>
	</div>
}
export default SlideCake
