import React from 'react'
import MenuSection from './components/MenuSection'
import { menuData } from './data/menu'
import logoURL from './assets/logo.png'

const App = () => {
	return (
		<div className='bg-black/96 min-h-screen text-gold font-serif'>
			<div className='max-w-7xl mx-auto px-4 py-8 md:px-8 lg:px-16'>
				<header className='text-center py-10 md:py-14 mb-6'>
					<div className='flex items-center justify-between flex-col md:flex-row'>
						<div>
							<div className='inline-block border border-gold p-1 md:p-2 rounded-xl'>
								<h1 className='text-3xl md:text-5xl uppercase tracking-wider px-3 py-1 font-light text-shadow-gold'>
									Angel-in-us
								</h1>
							</div>
							<p className='text-lg md:text-xl tracking-widest uppercase mt-4 font-light text-gold-light/90'>
								Семейный ресторан
							</p>
						</div>
						<div className='flex items-center justify-center mt-5	md:mt-0'>
							<img src={logoURL} alt='logo' className='w-40 h-40 rounded-lg' />
						</div>
					</div>
				</header>

				<main className='pb-16 max-w-6xl mx-auto'>
					{menuData.map((section, index) => (
						<MenuSection
							key={index}
							category={section.category}
							items={section.items}
						/>
					))}
				</main>

				<footer className='text-center text-gold/70 text-sm py-6 mt-8 border-t border-gold/20'>
					<p>© {new Date().getFullYear()} ANGEL-IN-US</p>
					<address className='mt-2 not-italic'>
						경기 안산시 단원구 화랑로 32 6층
					</address>
					<p className='mt-4 text-xs text-gold/50'>
						Телефон: +7 (123) 456-78-90
					</p>
				</footer>
			</div>
		</div>
	)
}

export default App
