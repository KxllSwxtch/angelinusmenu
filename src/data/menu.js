// Пример: src/data/menu.js
export const menuData = [
  {
    category: "Первые блюда",
    items: [
      {
        name: "Чечевичный суп",
        description:
          "Ароматный суп на овощном бульоне с красной чечевицей, морковью, луком, чесноком и томатами.",
        image: "https://www.vsegdavkusno.ru/assets/images/recipes/1565/1.jpg",
        prices: { standard: 13000 },
      },

      {
        name: "Грибной",
        description:
          "Нежный суп на сливочной основе с шампиньонами, картофелем, луком и морковью.",
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2021/03/7_1616417613-e1616417711541.jpg",
        prices: { standard: 13000 },
      },
      {
        name: "Крем-суп с креветками",
        description:
          "Нежный сливочный суп с креветками, обжаренными в чесночном масле.",
        image:
          "https://images.gastronom.ru/wLHELAFU6hPwrjPlu5dvpHb8KsoWY2r5AyvWvlSKORw/pr:recipe-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzUwMWFiMjUxLTYwNWMtNDM3NS04MmM4LTk2MjNjMzM0NzJjYi5qcGc.webp",
        prices: { standard: 14000 },
      },
      {
        name: "Пельмени",
        description: "Говядина, свинина",
        image:
          "https://images.gastronom.ru/B5Cvr7OnaaxeIo6cq-hdaV9ZXZA0Fvn4r7KYvxol3Jk/pr:recipe-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzI4NDA1OTE2LTM4ZDMtNDYwMC1hMjYyLTc1NzFkNjc3MDdlZi5qcGc.webp",
        prices: { small: 9000, large: 13000 },
        portions: { small: "С бульоном", large: "Без бульона" },
      },
      {
        name: "Борщ",
        description:
          "Классический борщ на мясном бульоне со свёклой, капустой, картофелем и томатами.",
        image: "https://primebeef.ru/images/cms/data/3-501.jpg",
        prices: { standard: 15000 },
      },
      {
        name: "Солянка",
        description:
          "Густой, наваристый суп с копчёностями, колбасками, говядиной и солёными огурцами.",
        image:
          "https://blog.kolobok.com.mx/wp-content/uploads/2017/05/solyanka-2-1024x576.jpg",
        prices: { standard: 13000 },
      },
      {
        name: "Кядя",
        description: "Традиционный корейский суп с говядиной, овощами и рисом.",
        image:
          "https://market.vseokoree.com/images/product/15801380691566881480soupkyadya.jpg",
      },
      {
        name: "Шурпа",
        description:
          "Ароматный суп на бараньем бульоне с крупно нарезанными овощами: морковью, картофелем, луком и болгарским перцем.",
        image:
          "https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_1632x1000/696/1ef19980-8e08-45b7-aff2-5292b5797aa9.jpeg",
        prices: { standard: 12000 },
      },
      {
        name: "Лагман домашний",
        description:
          "Суп с тянущейся лапшой, сочными кусочками говядины, болгарским перцем, томатами и ароматными специями.",
        image:
          "https://i.obozrevatel.com/food/recipemain/2020/2/19/1579331601snimok-jekrana-2020-01-18-v-91129.jpg?size=636x424",
        prices: { small: 10000 },
      },
      {
        name: "Лапша по домашнему",
        description:
          "Куриный бульон, приготовленный с любовью, домашняя лапша, сочные кусочки курицы, морковь и лук.",
        image:
          "https://gipfel.ru/upload/iblock/03d/x3vt0mr2k169m6k3oksv7xhsn2hhjf0y.jpg",
        prices: { small: 8000 },
      },
      {
        name: "Пуктяй",
        description:
          "Насыщенный суп из говядины/свинины с ароматными специями, овощами и пастой из соевых бобов.",
        image: "https://korean-house.kz/wp-content/uploads/2020/05/puktyaj.jpg",
        prices: { standard: 10000 },
      },
      {
        name: "Кукси",
        description:
          "Холодный суп с тянущейся лапшой, тонкими ломтиками мяса, огурцами, яйцом и пряной острой заправкой.",
        image:
          "https://powariha.ru/images/upload/cc0c7f8fd794542307070a8209287fcc.jpg",
        prices: { small: "9000", large: "12000" },
      },
      {
        name: "Окрошка",
        description:
          "Летний суп на кефире с нарезанными свежими огурцами, картофелем, зеленью и варёным яйцом.",
        image:
          "https://static.insales-cdn.com/images/articles/1/7683/1129987/%D0%BE%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0.jpg",
        prices: { standard: 9000 },
      },
      {
        name: "Лагман Цомян",
        description: "Сытное, насыщенное вкусами и ароматами уйгурское блюдо.",
        image: "https://cdn.nur.kz/images/1200x675/6aaa1f182150de3d.jpeg",
        prices: { standard: 12000 },
      },
      {
        name: "Лагман холодный",
        description:
          "Освежающий вариант лагмана с охлажденной лапшой и овощами.",
        image:
          "https://aif-s3.aif.ru/images/017/180/0e7d8f4ceabc78e223c8887e357d969a.jpg",
      },
    ],
  },
  {
    category: "Ассорти",
    items: [
      {
        name: "Овощное с брынзой",
        description:
          "Лёгкое и освежающее овощное ассорти с брынзой — это яркое сочетание хруста свежих огурцов, сочных томатов, сладкого перца и ароматной зелени. Завершающий штрих — нежная, слегка солоноватая брынза, которая идеально подчёркивает вкус овощей и добавляет изысканную сливочность.",
        image: "https://kostis.ru/f/product/offer/head_1__959.jpg",
        prices: { standard: 15000 },
      },
      {
        name: "Погребок",
        description:
          "Великолепное сочетание маринованных грибов из таких как: маслята, опята, грузди и шампиньоны.",
        image: "https://kostis.ru/f/product/offer/head_1__155.jpg",
        prices: { standard: 13000 },
      },
      {
        name: "Мясной",
        description:
          "Сочный микс из обжаренной свиной шейки, нежной курочки и ароматного говяжьего языка, дополненный пряной краковской колбаской. Гармонию вкуса подчеркивает хрустящая пекинская капуста и румяные ломтики картофеля.",
        image:
          "https://www.refro.ru/upload/iblock/0e4/g6jixvdrmeirirdqemmhs7kndhpstrjk.jpg",
        prices: { standard: 70000 },
      },
      {
        name: "Фруктовое",
        description: "",
        image: "https://i.ytimg.com/vi/8pxPNBz2rRc/maxresdefault.jpg",
        prices: { standard: 35000 },
      },
    ],
  },
  {
    category: "Закуска",
    items: [
      {
        name: "Селёдка по-русски",
        description: "",
        image:
          "https://img.iamcook.ru/2019/upl/recipes/zen/u839-e23e80339dbdc921953330c8dcb753b0.JPG",
        prices: { standard: 10000 },
      },
      {
        name: "Хе из говядины с овощами",
        image: "https://i.ytimg.com/vi/fogZlxms0V8/hqdefault.jpg",
      },
      {
        name: "Холодец",
        description:
          "Традиционное блюдо из застывшего мясного бульона с кусочками мяса.",
        image:
          "https://dikoed.ru/upload/iblock/eee/18134-sbornyy-kholodets-iz-dichi.jpg",
      },
      {
        name: "Креветки в сливочном соусе",
        description:
          "Сочные креветки, тушеные в нежном сливочном соусе с добавлением чеснока и трав.",
        image:
          "https://ohotka66.ru/upload/iblock/81d/81d11043d0cd044839236034af3136b4.jpg",
        prices: { standard: 18000 },
      },
    ],
  },
  {
    category: "Шашлык",
    items: [
      {
        name: "Свинина",
        description:
          "Сочные кусочки свинины, маринованные в специях и приготовленные на открытом огне.",
        image:
          "https://img.iamcook.ru/old/upl/recipes/cat/u-8c0c63ec86853e77e63a1492996b0fec.JPG",
        prices: { standard: 6000 },
      },
      {
        name: "Курица",
        description:
          "Нежное куриное филе в ароматном маринаде, идеально прожаренное на углях.",
        image:
          "https://images.gastronom.ru/EJtCe1EtD5qcRMFNLa-VnjVeEPV1l8VyMjmANKYBdjs/pr:recipe-preview-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzQ2YjAxOWZiLTJjNDMtNDRkOC1iYjFmLTY2OWY2ZWUwYzUzMS5qcGc",
        prices: { standard: 5000 },
      },
      {
        name: "Говядина",
        description:
          "Сочные кусочки говядины, маринованные со специями и приготовленные на мангале.",
        image: "https://www.patee.ru/r/x6/16/bd/be/960m.jpg",
        prices: { standard: 8000 },
      },
      {
        name: "Баранина",
        description:
          "Ароматные кусочки баранины, приготовленные на углях по традиционному рецепту.",
        image:
          "https://eda.ru/images/RecipePhoto/390x390/shashlik-iz-baranini-so-sladkimi-percami_14332_photo_139.jpg",
        prices: { standard: 7000 },
      },
      {
        name: "Люля",
        description:
          "Традиционный кебаб из рубленого мяса, формованный вокруг шампура и приготовленный на углях.",
        image:
          "https://a-catering.com/image/1.Dostavka/Gorihie/lyulya-kebab-dostavka-shashlyka-na-dom-i-po-spb-v-lenoblati-kejtering.jpg",
        prices: { standard: 6000 },
      },
      {
        name: "Печень",
        description:
          "Нежная печень, замаринованная в пряном маринаде и приготовленная на мангале.",
        image:
          "https://img.povar.ru/640w/6b/e1/0c/7b/shashlik_iz_pecheni_govyadini_na_mangale-758797.JPG",
      },
      {
        name: "Овощи",
        description:
          "Сезонные овощи, приготовленные на гриле с добавлением ароматных специй и трав.",
        image:
          "https://img.povar.ru/mobile/f6/9c/3e/2f/ovoshnoi_shashlik-413549.jpg",
      },
      {
        name: "Наполеон",
        description:
          'Фирменный шашлык из маринованной баранины "Наполеон", приготовленный по особому рецепту.',
        image:
          "https://sizorder.kz/image/cache/catalog/555/001_%D0%BD%D0%B0%D0%BF%D0%BE%D0%BB%D0%B5%D0%BE%D0%BD.jpg.792x526_q85_crop-813x1000.jpg",
      },
      {
        name: "Рулет говяжий",
        description:
          "Сочный говяжий рулет с ароматной начинкой из свежих овощей и зелени, запеченный на мангале до золотистой корочки.",
        image:
          "https://taganskaya.barakat24.ru/wp-content/uploads/2021/07/10674-1.jpg",
      },
    ],
  },
  {
    category: "Гарниры",
    items: [
      {
        name: "Пюре",
        description: "",
        image:
          "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDIwMi80VmozNXouanBlZw.webp",
        prices: { standard: 5000 },
      },
      {
        name: "Рис",
        description: "",
        image:
          "https://eda.ru/images/RecipePhoto/930x622/ris-na-paru_26944_photo_25219.webp",
        prices: { standard: 3000 },
      },
      {
        name: "Фри",
        description: "",
        image: "https://www.patee.ru/r/x6/15/8b/e2/960m.jpg",
        prices: { standard: 5000 },
      },

      {
        name: "Картофель по-деревенски",
        description: "З",
        image: "https://www.patee.ru/r/x6/13/80/3f/960m.jpg",
        prices: { standard: 6000 },
      },
      {
        name: "Лепёшка",
        description: "",
        image:
          "https://karfood.ru/wp-content/uploads/2021/06/uxhfnvydnpk-2.jpg",
        prices: { standard: 4000 },
      },
    ],
  },

  {
    category: "Бар",
    items: [
      {
        name: "Водка",
        description: "Бутылка",
        prices: { standard: 25000 },
      },
      {
        name: "Коньяк",
        description: "Бутылка",
        prices: { standard: 30000 },
      },
      {
        name: "Вино",
        description: "Бутылка",
        prices: { standard: 30000 },
      },
      {
        name: "Виски",
        description: "Бутылка",
        prices: { standard: 70000 },
      },
      {
        name: "Соджик",
        description: "Корейская рисовая водка",
        prices: { standard: 4000 },
      },
      {
        name: "Пиво",
        description: "Кружка пенного",
        prices: { standard: 5000 },
      },
      {
        name: "Сок",
        description: "Свежевыжатый",
        prices: { standard: 7000 },
      },
      {
        name: "Кола (М)",
        description: "Маленькая",
        prices: { standard: 2000 },
      },
      {
        name: "Кола (Б)",
        description: "Большая",
        prices: { standard: 6000 },
      },
      {
        name: "Компот",
        description: "Домашний",
        prices: { standard: 6000 },
      },
    ],
  },
  {
    category: "Бар (На разлив)",
    items: [
      {
        name: "Водка",
        description: "",
        prices: { small: 3000, large: 5000 },
        portions: { small: "50мл", large: "100мл" },
      },
      {
        name: "Коньяк",
        description: "",
        prices: { small: 5000, large: 8000 },
        portions: { small: "50мл", large: "100мл" },
      },
      {
        name: "Виски",
        description: "",
        prices: { small: 6000, large: 10000 },
        portions: { small: "50мл", large: "100мл" },
      },
    ],
  },
]
