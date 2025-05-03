import React, { useEffect, useState } from 'react'
import { menuData } from '../data/menu'

// Функция форматирования цены
const formatPrice = (price) => {
	if (!price) return ''
	// Преобразуем в строку, если это число
	const priceStr = typeof price === 'number' ? price.toString() : price

	// Добавляем пробел между тысячами
	return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₩'
}

// Компонент мини-навигации
const MenuNavigation = ({ activeCategory, onCategoryClick }) => {
	return (
		<div className='sticky top-4 py-4 z-20'>
			<div className='bg-black/90 backdrop-blur-sm rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.15)] border border-gold/40 p-4 max-w-4xl mx-auto'>
				<div className='flex flex-wrap justify-center gap-3 md:gap-4'>
					{menuData.map((section, index) => (
						<button
							key={index}
							onClick={() => onCategoryClick(section.category)}
							className={`
								px-4 py-2 text-sm md:text-base rounded-md transition-all duration-300 relative overflow-hidden
								${
									activeCategory === section.category
										? 'bg-gradient-to-r from-gold/90 via-gold-light/80 to-gold/90 text-black font-medium shadow-[0_2px_10px_rgba(212,175,55,0.4)] scale-105'
										: 'bg-black/80 text-gold hover:bg-black hover:border-gold border border-gold/20 hover:shadow-[0_0_8px_rgba(212,175,55,0.3)]'
								}
							`}
						>
							<span className='relative z-10'>{section.category}</span>
							{activeCategory === section.category && (
								<span className='absolute inset-0 bg-gradient-to-r from-gold/20 via-gold-light/10 to-gold/20 animate-shimmer'></span>
							)}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

const MenuSection = ({ category, items }) => {
	const [activeCategory, setActiveCategory] = useState('')

	useEffect(() => {
		// Установить первую категорию как активную при загрузке
		if (menuData.length > 0 && !activeCategory) {
			setActiveCategory(menuData[0].category)
		}

		// Добавляем обработчик скролла для отслеживания активной категории
		const handleScroll = () => {
			const sections = document.querySelectorAll('.menu-section')
			let current = ''

			sections.forEach((section) => {
				const sectionTop = section.offsetTop
				if (window.scrollY >= sectionTop - 200) {
					current = section.getAttribute('data-category')
				}
			})

			if (current && current !== activeCategory) {
				setActiveCategory(current)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [activeCategory])

	const scrollToCategory = (categoryName) => {
		setActiveCategory(categoryName)
		const section = document.querySelector(`[data-category="${categoryName}"]`)
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 100,
				behavior: 'smooth',
			})
		}
	}

	// Компонент для отображения цен блюда
	const PriceDisplay = ({ prices }) => {
		if (!prices) return null

		if (prices.standard) {
			return (
				<div className='mt-2 text-gold-light/90 font-medium'>
					{formatPrice(prices.standard)}
				</div>
			)
		}

		return (
			<div className='mt-2 text-gold-light/90'>
				{prices.small && (
					<div className='flex items-baseline justify-between w-full'>
						<span className='text-sm text-gold/90 mr-2'>Маленькая порция</span>
						<div className='flex-grow border-b border-dotted border-gold/40 mx-2 mb-1'></div>
						<span className='font-medium'>{formatPrice(prices.small)}</span>
					</div>
				)}
				{prices.large && (
					<div className='flex items-baseline justify-between w-full mt-2'>
						<span className='text-sm text-gold/90 mr-2'>Большая порция</span>
						<div className='flex-grow border-b border-dotted border-gold/40 mx-2 mb-1'></div>
						<span className='font-medium'>{formatPrice(prices.large)}</span>
					</div>
				)}
			</div>
		)
	}

	return (
		<>
			{category === menuData[0].category && (
				<MenuNavigation
					activeCategory={activeCategory}
					onCategoryClick={scrollToCategory}
				/>
			)}
			<section
				className='mb-24 menu-section'
				data-category={category}
				id={category.replace(/\s+/g, '-').toLowerCase()}
			>
				<h2 className='text-4xl font-normal uppercase tracking-wider text-center mb-20 text-shadow-gold'>
					{category}
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10'>
					{items.map((item, index) => (
						<div
							key={index}
							className={`${
								item.image ? 'flex flex-col' : 'text-center md:text-left'
							}`}
						>
							{item.image && (
								<div className='flex justify-center'>
									<img
										src={item.image}
										alt={item.name}
										className='w-60 h-50 object-contain rounded-sm'
										onError={(e) => {
											e.target.style.display = 'none'
										}}
									/>
								</div>
							)}
							<div>
								<h3 className='text-2xl uppercase tracking-wider mb-3 text-shadow-gold'>
									{item.name}
								</h3>
								<p className='text-sm text-[#e4d6a7] leading-relaxed max-w-md'>
									{item.description}
								</p>
								<PriceDisplay prices={item.prices} />
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default MenuSection
