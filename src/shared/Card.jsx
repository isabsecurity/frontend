'use client'
import styled from 'styled-components'

const Card = () => {
	return (
		<StyledWrapper>
			<div className='cards'>
				<figure className='card'>
					<figcaption className='card_title'>Islom</figcaption>
				</figure>
			</div>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
	.cards {
		perspective: 500px;
	}

	.card {
		width: 200px;
		height: 250px;
		background: #16161d;
		border: 2px solid #555555;
		border-radius: 4px;
		position: relative;
		transform-style: preserve-3d;
		will-change: transform;
		transition: transform 0.5s;
	}

	.card:hover {
		transform: translateZ(10px) rotateX(20deg) rotateY(20deg);
	}

	.card_title {
		color: #fff;
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
		transition: transform 0.5s;
		font: 700 1.5rem monospace;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
			1px 1px 0 #000;
	}

	.card:hover .card_title {
		transform: translateZ(50px);
	}
`

export default Card
