import React, { useEffect, useState } from "react"
import { menuData } from "../data/menu"

// Функция форматирования цены
const formatPrice = (price) => {
  if (!price) return ""
  // Преобразуем в строку, если это число
  const priceStr = typeof price === "number" ? price.toString() : price

  // Добавляем пробел между тысячами
  return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₩"
}

// Компонент мини-навигации
const MenuNavigation = ({ activeCategory, onCategoryClick }) => {
  // Добавляем стиль для скрытия скроллбара
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
			.no-scrollbar::-webkit-scrollbar {
				display: none;
			}
			.no-scrollbar {
				-ms-overflow-style: none;
				scrollbar-width: none;
			}
		`
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <>
      {/* Десктопная версия */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
        <div className="bg-gradient-to-r from-black/92 to-black/80 backdrop-blur-md rounded-r-xl shadow-lg border-y border-r border-gold/30 py-4 px-2">
          <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto no-scrollbar">
            {menuData.map((section, index) => (
              <button
                key={index}
                onClick={() => onCategoryClick(section.category)}
                className={`
									relative px-2 py-3 text-left transition-all duration-300 rounded-r-lg
									${
                    activeCategory === section.category
                      ? "text-black font-medium pl-6"
                      : "text-gold/80 hover:text-gold hover:pl-4"
                  }
								`}
              >
                {activeCategory === section.category && (
                  <div className="absolute inset-0 bg-gold rounded-r-lg -z-10"></div>
                )}
                <span className="text-sm whitespace-nowrap">
                  {section.category}
                </span>
                {activeCategory === section.category && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-gold"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Мобильная версия (selectbox) */}
      <div className="fixed top-2 left-0 right-0 z-30 block md:hidden px-4">
        <div className="relative">
          <select
            className="w-full bg-black/90 text-gold border border-gold/40 rounded-lg py-2 px-4 appearance-none"
            value={activeCategory}
            onChange={(e) => onCategoryClick(e.target.value)}
          >
            {menuData.map((section, index) => (
              <option key={index} value={section.category}>
                {section.category}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

const MenuSection = ({ category, items }) => {
  const [activeCategory, setActiveCategory] = useState("")

  useEffect(() => {
    // Установить первую категорию как активную при загрузке
    if (menuData.length > 0 && !activeCategory) {
      setActiveCategory(menuData[0].category)
    }

    // Добавляем обработчик скролла для отслеживания активной категории
    const handleScroll = () => {
      const sections = document.querySelectorAll(".menu-section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("data-category")
        }
      })

      if (current && current !== activeCategory) {
        setActiveCategory(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeCategory])

  const scrollToCategory = (categoryName) => {
    setActiveCategory(categoryName)
    const section = document.querySelector(`[data-category="${categoryName}"]`)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  // Компонент для отображения цен блюда
  const PriceDisplay = ({ prices, portions = {} }) => {
    if (!prices) return null

    if (prices.standard) {
      return (
        <div className="mt-2 text-gold-light/90 font-medium">
          {formatPrice(prices.standard)}
        </div>
      )
    }

    return (
      <div className="mt-2 text-gold-light/90">
        {prices.small && (
          <div className="flex items-baseline justify-between w-full">
            <span className="text-sm text-gold/90 mr-2">
              {portions.small ? `${portions.small}` : "Маленькая порция"}
            </span>
            <div className="flex-grow border-b border-dotted border-gold/40 mx-2 mb-1"></div>
            <span className="font-medium">{formatPrice(prices.small)}</span>
          </div>
        )}
        {prices.large && (
          <div className="flex items-baseline justify-between w-full mt-2">
            <span className="text-sm text-gold/90 mr-2">
              {portions.large ? `${portions.large}` : "Большая порция"}
            </span>
            <div className="flex-grow border-b border-dotted border-gold/40 mx-2 mb-1"></div>
            <span className="font-medium">{formatPrice(prices.large)}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <section
        className="mb-10 pt-16 md:pt-0 menu-section md:ml-16"
        data-category={category}
        id={category.replace(/\s+/g, "-").toLowerCase()}
      >
        <h2 className="text-4xl font-normal uppercase tracking-wider text-center mb-20 text-shadow-gold">
          {category}
        </h2>
        {/* Рендерим MenuNavigation только один раз */}
        {menuData.length > 0 && (
          <MenuNavigation
            activeCategory={activeCategory}
            onCategoryClick={scrollToCategory}
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                item.image ? "flex flex-col" : "text-center md:text-left"
              }`}
            >
              {item.image && (
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-60 h-50 object-contain rounded-sm"
                    onError={(e) => {
                      e.target.style.display = "none"
                    }}
                  />
                </div>
              )}
              <div>
                <h3 className="text-2xl uppercase tracking-wider mb-3 text-shadow-gold">
                  {item.name}
                </h3>
                <p className="text-sm text-[#e4d6a7] leading-relaxed max-w-md">
                  {item.description}
                </p>
                <PriceDisplay prices={item.prices} portions={item.portions} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default MenuSection
