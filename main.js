window.addEventListener('load', function () {
  const preloader = document.getElementById('nrp-preloader');
  if (preloader) {
    // Minimal ko'rinish vaqti (juda tez o'chib ketmasligi uchun)
    setTimeout(function () {
      preloader.classList.add('nrp-preloader-hidden');
      // Animatsiya tugagach DOM'dan olib tashlash (ixtiyoriy)
      setTimeout(function () {
        preloader.remove();
      }, 500);
    }, 400);
  }
});
const I18N = {
  uz: {
    "qoliplart": {
  "plastikTitle": "Plastmassa idishlar",
  "plastikDesc": "Yuqori sifatli plastmassa idishlar ishlab chiqaramiz.",
  "polikTitle": "Moshina poliklari",
  "polikDesc": "Avtomobillar uchun rezina/plastik poliklar ishlab chiqaramiz."
},
    nav: {
      home: 'Bosh sahifa',
      d3: '3D dizayn',
      tokar: 'Tokarlik xizmati',
      qoliplar: 'Qoliplar',
      konveyer: 'Konveyer lentalar',
      cta: 'Buyurtma berish',
    },
    hero: {
      eyebrow: 'Sanoat uchun muhandislik yechimlari',
      h1: 'Konveyer lentalar',
      lead: "3D dizayn, tokarlik ishlari, plastmassa va rezina qoliplar hamda konveyer lentalar — barchasi aniqlik va o'z vaqtida.",
      ctaPrimary: 'Buyurtma berish',
      ctaSecondary: "Xizmatlarni ko'rish",
      badge1: "Aniq o'lchamlar",
      badge2: 'Tez bajarish muddati',
      badge3: 'Har qanday hajmda',
    },
    overview: {
      eyebrow: 'Xizmatlarimiz',
      h2: "To'rtta yo'nalish, bitta manzil",
      p: "Loyihalashdan tayyor mahsulotgacha bo'lgan jarayonning har bir bosqichini o'zimiz bajaramiz.",
    },
    cards: {
      d3: {
        title: '3D dizayn',
        desc: 'Chizmadan raqamli 3D modelgacha — prototip va vizualizatsiya.',
      },
      tokar: {
        title: 'Tokarlik xizmati',
        desc: 'Metall detallarni yuqori aniqlikda tokarlik stanoklarida ishlab chiqarish.',
      },
      qoliplar: {
        title: 'Qoliplar',
        desc: 'Plastmassa va rezina uchun sanoat qoliplarini loyihalash va tayyorlash.',
      },
      konveyer: {
        title: 'Konveyer lentalar',
        desc: "Har qanday o'lcham va yuklamaga mos konveyer lentalari.",
      },
      more: 'Batafsil →',
    },
    about: {
      eyebrow: 'Golden Mould haqida',
      h2: 'Nima uchun aynan biz?',
      p: "Biz O'zbekiston va MDH mamlakatlaridagi mijozlar uchun biznesingizga yordam beradigan eng ishonchli va sifatli qoliplarni (press-forma) ishlab chiqaruvchi professional yechimlarni taklif etamiz. Texnik maslahatchilarimizga murojaat qiling yoki spetsifikatsiyangizni bizga yuboring. \"Golden Mould\" korxonasi Janubiy Koreya Respublikasining DOOSAN firmasidan hamda Xitoy davlatidan keltirilgan dastgohlar bilan ta'minlangan. Bu dastgohlar respublikamizda yagona bo'lib, yuqori aniqlikda ishlaydi. Shuningdek, Turkiya hamda Xitoydan kelgan professional mutaxassislar Siz istagan turdagi plastmassa yoki rezina qolip (press-forma)ni ishlab chiqaramiz. Bizda yetkazib berish xizmati ham mavjud. Bundan tashqari, Siz aytgan andozani termoplast dastgohida quyib ko'rsatamiz, hamda korxonamizda termoplast dastgohida xizmatlarni amalga oshiramiz.",
    },
    why: {
      reliability: {
        title: 'Ishonchlilik',
        desc: 'Ishlab chiqarilgan mahsulotlarning benuqson sifati.',
      },
      price: {
        title: 'Narx',
        desc: 'Moslashuvchan narxlash tizimi.',
      },
      responsibility: {
        title: 'Javobgarlik',
        desc: "Har bir mijozga individual yondashuv orqali muammosini to'liq hal qilamiz.",
      },
      convenience: {
        title: 'Qulaylik',
        desc: 'Yetkazib berishning qulay shartlari.',
      },
    },
    youtube: {
      eyebrow: 'Video',
      h2: "Biz haqimizda videoda ko'proq bilib oling",
      p: 'Ishlab chiqarish jarayonlarimiz va tayyor mahsulotlarimiz bilan videoda tanishing.',
    },
    d3: {
      title: '3D dizayn xizmati',
      desc: "Detal va uskunalaringiz uchun texnik chizmalarni raqamli 3D modelga aylantiramiz. Ishlab chiqarishdan oldin barcha o'lcham va tolerantlik xatolarini aniqlab, tuzatamiz.",
      f1: 'CAD modellashtirish (SolidWorks, Fusion 360)',
      f2: 'Texnik chizma (chertyoj) tayyorlash',
      f3: 'Prototip vizualizatsiyasi va render',
      f4: 'Fayl formatlari: STEP, STL, DWG, IGES',
      cta: '3D dizayn uchun murojaat qilish',
      caption: 'CAD MODEL — TEXNIK CHIZMA NAMUNASI',
      videosTitle: 'Namunaviy videolar',
      videosDesc:
        "3D dizayn jarayoni qanday ko'rinishda amalga oshirilishi bilan tanishing.",
    },
    tokar: {
      title: 'Tokarlik xizmati',
      desc: 'Zamonaviy tokarlik stanoklarida metall va boshqa materiallardan yuqori aniqlikdagi detallarni ishlab chiqaramiz — birlik nusxadan seriya ishlab chiqarishgacha.',
      f1: "Po'lat, alyuminiy va rangli metallarni qayta ishlash",
      f2: 'Rezьba kesish va murakkab profillar',
      f3: '±0.01 mm gacha aniqlik',
      f4: 'Kichik partiyalardan yirik seriyagacha',
      cta: 'Tokarlik xizmatiga buyurtma berish',
      caption: "TOKARLIK STANOGI — SXEMATIK KO'RINISH",
      galleryTitle: 'Ishlarimiz galereyasi',
      galleryDesc: 'Tokarlik ustaxonamizda bajarilgan ishlar namunalari.',
      videosTitle: 'Namunaviy videolar',
      videosDesc: 'Tokarlik jarayonlarini videoda tomosha qiling.',
    },
    qoliplar: {
      title: 'Qoliplar (plastmassa va rezina)',
      desc: "Sanoat ehtiyojlaringiz uchun plastmassa quyish va rezina presslash qoliplarini loyihalaymiz, tayyorlaymiz hamda mavjud qoliplarni ta'mirlaymiz.",
      f1: "Plastmassa in'yeksiya (quyish) qoliplari",
      f2: 'Rezina press-qoliplar',
      f3: "Qolip ta'mirlash va modernizatsiya qilish",
      f4: 'Seriya ishlab chiqarishga moslashtirish',
      cta: 'Qolip loyihasi uchun murojaat',
      caption: 'QOLIP KONSTRUKSIYASI — KESIM SXEMASI',
      galleryTitle: 'Tayyor qoliplar galereyasi',
      galleryDesc: 'Bizning korxonamizda tayyorlangan qoliplar namunalari.',
      videosTitle: 'Namunaviy videolar',
      videosDesc: 'Qolip ishlab chiqarish jarayonini videoda tomosha qiling.',
    },
    konveyer: {
      title: 'Konveyer lentalar',
      desc: "Ishlab chiqarish liniyalaringiz uchun har qanday o'lcham va yuklamaga mos konveyer lentalarini yetkazib beramiz, o'rnatamiz va texnik xizmat ko'rsatamiz.",
      f1: 'Rezina va PVX (PVC) lentalar',
      f2: "Individual o'lcham va kenglikda tayyorlash",
      f3: "O'rnatish, ulash va texnik xizmat",
      f4: 'Yuqori yuklama va issiqlikka chidamliligi',
      cta: 'Konveyer lenta uchun buyurtma',
      caption: 'KONVEYER TIZIMI — UMUMIY SXEMA',
      tableTitle: 'Konveyer lentalar spetsifikatsiyasi',
      tableDesc:
        "Mavjud o'lchamlar, qatlamlar soni va rezina markalari jadvali.",
      th1: '№',
      th2: 'Belgilanishi',
      th3: 'Turi',
      th4: 'Kengligi (mm)',
      th5: 'Qatlamlar soni',
      th6: 'Gazlama turi',
      th7: 'Ustki qoplama (mm)',
      th8: 'Pastki qoplama (mm)',
      th9: 'Rezina markasi',
    },
    contact: {
      eyebrow: "Bog'lanish",
      h2: 'Loyihangizni muhokama qilaylik',
      p: "Formani to'ldiring — 24 soat ichida siz bilan bog'lanamiz. Yoki quyidagi raqam va manzillar orqali to'g'ridan-to'g'ri murojaat qiling.",
      phoneLbl: 'Telefon',
      emailLbl: 'Email',
      addrLbl: 'Manzil',
      addrVal: "Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi, 12-uy",
      hoursLbl: 'Ish vaqti',
      hoursVal: 'Dush–Shan, 09:00–18:00',
    },
    form: {
      name: 'Ismingiz',
      phone: 'Telefon raqamingiz',
      service: 'Kerakli xizmat',
      message: 'Xabar (ixtiyoriy)',
      submit: "So'rov yuborish",
      note: 'Yuborish tugmasini bosganingizda WhatsApp orqali murojaatingiz avtomatik shakllantiriladi.',
    },
    footer: {
      about:
        "3D dizayn, tokarlik, qolib va konveyer lenta ishlab chiqarish bo'yicha to'liq muhandislik xizmatlari.",
      servicesTitle: 'Xizmatlar',
      contactTitle: 'Aloqa',
      mapTitle: 'Manzil',
      rights: 'Barcha huquqlar himoyalangan.',
      made: 'Sanoat mijozlari uchun ishlab chiqilgan',
    },
  },
  ru: {
    "qoliplart": {
  "plastikTitle": "Пластиковые изделия",
  "plastikDesc": "Производим высококачественные пластиковые изделия.",
  "polikTitle": "Автомобильные коврики",
  "polikDesc": "Производим резиновые/пластиковые коврики для автомобилей."
},
    nav: {
      home: 'Главная',
      d3: '3D-дизайн',
      tokar: 'Токарные работы',
      qoliplar: 'Пресс-формы',
      konveyer: 'Конвейерные ленты',
      cta: 'Оставить заявку',
    },
    hero: {
      eyebrow: 'Инженерные решения для промышленности',
      h1: 'Конвейерные ленты',
      lead: '3D-дизайн, токарные работы, пресс-формы из пластика и резины, а также конвейерные ленты — точно и в срок.',
      ctaPrimary: 'Оставить заявку',
      ctaSecondary: 'Смотреть услуги',
      badge1: 'Точные размеры',
      badge2: 'Быстрые сроки',
      badge3: 'Любой объём',
    },
    overview: {
      eyebrow: 'Наши услуги',
      h2: 'Четыре направления, один адрес',
      p: 'Мы выполняем каждый этап — от проектирования до готового изделия.',
    },
    cards: {
      d3: {
        title: '3D-дизайн',
        desc: 'От чертежа до цифровой 3D-модели — прототип и визуализация.',
      },
      tokar: {
        title: 'Токарные работы',
        desc: 'Изготовление металлических деталей высокой точности на токарных станках.',
      },
      qoliplar: {
        title: 'Пресс-формы',
        desc: 'Проектирование и изготовление промышленных форм для пластика и резины.',
      },
      konveyer: {
        title: 'Конвейерные ленты',
        desc: 'Ленты любого размера и под любую нагрузку.',
      },
      more: 'Подробнее →',
    },
    about: {
      eyebrow: 'О компании Golden Mould',
      h2: 'Почему именно мы?',
      p: 'Мы предлагаем клиентам из Узбекистана и стран СНГ профессиональные решения по производству самых надёжных и качественных пресс-форм, которые помогут вашему бизнесу. Обратитесь к нашим техническим консультантам или отправьте нам свою спецификацию. Предприятие «Golden Mould» оснащено станками, поставленными из Республики Корея от компании DOOSAN, а также из Китая. Эти станки являются единственными в республике и работают с высокой точностью. Кроме того, профессиональные специалисты из Турции и Китая изготовят пластиковую или резиновую пресс-форму любого нужного вам типа. У нас также есть услуга доставки. Помимо этого, мы отливаем указанный вами образец на термопластавтомате и оказываем полный спектр услуг на термопластавтоматическом оборудовании нашего предприятия.',
    },
    why: {
      reliability: {
        title: 'Надёжность',
        desc: 'Безупречное качество производимой продукции.',
      },
      price: {
        title: 'Цена',
        desc: 'Гибкая система ценообразования.',
      },
      responsibility: {
        title: 'Ответственность',
        desc: 'Индивидуальный подход к каждому клиенту и полное решение его задач.',
      },
      convenience: {
        title: 'Удобство',
        desc: 'Удобные условия доставки.',
      },
    },
    youtube: {
      eyebrow: 'Видео',
      h2: 'Узнайте больше о нас в видео',
      p: 'Познакомьтесь с нашими производственными процессами и готовой продукцией в видеоформате.',
    },
    d3: {
      title: 'Услуга 3D-дизайна',
      desc: 'Превращаем технические чертежи ваших деталей и оборудования в цифровую 3D-модель. Выявляем и устраняем ошибки размеров и допусков ещё до производства.',
      f1: 'CAD-моделирование (SolidWorks, Fusion 360)',
      f2: 'Подготовка технических чертежей',
      f3: 'Визуализация и рендер прототипа',
      f4: 'Форматы файлов: STEP, STL, DWG, IGES',
      cta: 'Заявка на 3D-дизайн',
      caption: 'CAD-МОДЕЛЬ — ПРИМЕР ЧЕРТЕЖА',
      videosTitle: 'Примеры видео',
      videosDesc: 'Посмотрите, как проходит процесс 3D-проектирования.',
    },
    tokar: {
      title: 'Токарные работы',
      desc: 'Изготавливаем детали высокой точности из металла и других материалов на современных токарных станках — от единичных образцов до серийного производства.',
      f1: 'Обработка стали, алюминия и цветных металлов',
      f2: 'Нарезка резьбы и сложные профили',
      f3: 'Точность до ±0.01 мм',
      f4: 'От малых партий до крупных серий',
      cta: 'Заявка на токарные работы',
      caption: 'ТОКАРНЫЙ СТАНОК — СХЕМА',
      galleryTitle: 'Галерея наших работ',
      galleryDesc: 'Примеры изделий, изготовленных в нашем токарном цехе.',
      videosTitle: 'Примеры видео',
      videosDesc: 'Смотрите видео с токарными работами.',
    },
    qoliplar: {
      title: 'Пресс-формы (пластик и резина)',
      desc: 'Проектируем и изготавливаем формы для литья пластика и прессования резины под ваши промышленные задачи, а также ремонтируем существующие формы.',
      f1: 'Формы для литья пластика под давлением',
      f2: 'Пресс-формы для резины',
      f3: 'Ремонт и модернизация форм',
      f4: 'Адаптация под серийное производство',
      cta: 'Заявка на проектирование формы',
      caption: 'КОНСТРУКЦИЯ ФОРМЫ — СХЕМА СЕЧЕНИЯ',
      galleryTitle: 'Галерея готовых пресс-форм',
      galleryDesc: 'Примеры пресс-форм, изготовленных на нашем предприятии.',
      videosTitle: 'Примеры видео',
      videosDesc: 'Смотрите видео процесса изготовления пресс-форм.',
    },
    konveyer: {
      title: 'Конвейерные ленты',
      desc: 'Поставляем, устанавливаем и обслуживаем конвейерные ленты любого размера и под любую нагрузку для ваших производственных линий.',
      f1: 'Резиновые и ПВХ-ленты',
      f2: 'Изготовление по индивидуальным размерам',
      f3: 'Монтаж, стыковка и техобслуживание',
      f4: 'Высокая устойчивость к нагрузке и теплу',
      cta: 'Заявка на конвейерную ленту',
      caption: 'КОНВЕЙЕРНАЯ СИСТЕМА — ОБЩАЯ СХЕМА',
      tableTitle: 'Спецификация конвейерных лент',
      tableDesc:
        'Таблица доступных размеров, количества прокладок и марок резины.',
      th1: '№',
      th2: 'Обозначение',
      th3: 'Тип',
      th4: 'Ширина (мм)',
      th5: 'Кол-во прокладок',
      th6: 'Тип ткани',
      th7: 'Верхняя обкладка (мм)',
      th8: 'Нижняя обкладка (мм)',
      th9: 'Марка резины',
    },
    contact: {
      eyebrow: 'Контакты',
      h2: 'Обсудим ваш проект',
      p: 'Заполните форму — свяжемся с вами в течение 24 часов. Либо обратитесь напрямую по указанным контактам.',
      phoneLbl: 'Телефон',
      emailLbl: 'Email',
      addrLbl: 'Адрес',
      addrVal: 'г. Ташкент, Чиланзарский р-н, ул. Бунёдкор, дом 12',
      hoursLbl: 'Часы работы',
      hoursVal: 'Пн–Сб, 09:00–18:00',
    },
    form: {
      name: 'Ваше имя',
      phone: 'Номер телефона',
      service: 'Нужная услуга',
      message: 'Сообщение (необязательно)',
      submit: 'Отправить заявку',
      note: 'При отправке заявка автоматически сформируется через WhatsApp.',
    },
    footer: {
      about:
        'Полный цикл инженерных услуг: 3D-дизайн, токарные работы, пресс-формы и конвейерные ленты.',
      servicesTitle: 'Услуги',
      contactTitle: 'Контакты',
      mapTitle: 'Адрес',
      rights: 'Все права защищены.',
      made: 'Разработано для промышленных клиентов',
    },
  },
  en: {
    "qoliplar": {
  "plastikTitle": "Plastic products",
  "plastikDesc": "We manufacture high-quality plastic products.",
  "polikTitle": "Car mats",
  "polikDesc": "We manufacture rubber/plastic mats for vehicles."
},
    nav: {
      home: 'Home',
      d3: '3D Design',
      tokar: 'Turning Service',
      qoliplar: 'Molds',
      konveyer: 'Conveyor Belts',
      cta: 'Request a quote',
    },
    hero: {
      eyebrow: 'Engineering solutions for industry',
      h1: 'Conveyor Belts',
      lead: '3D design, precision turning, plastic and rubber mold making, and conveyor belts — built accurately and on time.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'View services',
      badge1: 'Precise dimensions',
      badge2: 'Fast turnaround',
      badge3: 'Any volume',
    },
    overview: {
      eyebrow: 'Our services',
      h2: 'Four disciplines, one address',
      p: 'We handle every stage ourselves, from design to finished product.',
    },
    cards: {
      d3: {
        title: '3D Design',
        desc: 'From drawing to digital 3D model — prototyping and visualization.',
      },
      tokar: {
        title: 'Turning Service',
        desc: 'High-precision metal parts machined on modern lathes.',
      },
      qoliplar: {
        title: 'Molds',
        desc: 'Design and manufacturing of industrial molds for plastic and rubber.',
      },
      konveyer: {
        title: 'Conveyor Belts',
        desc: 'Belts in any size, built for any load.',
      },
      more: 'Learn more →',
    },
    about: {
      eyebrow: 'About Golden Mould',
      h2: 'Why choose us?',
      p: 'We offer clients in Uzbekistan and the CIS countries professional solutions for manufacturing the most reliable and high-quality molds (press-forms) to help your business grow. Contact our technical advisors or send us your specification. The Golden Mould enterprise is equipped with machinery supplied by DOOSAN of the Republic of Korea, as well as from China. These machines are the only ones of their kind in the country and operate with high precision. In addition, professional specialists from Turkey and China manufacture any type of plastic or rubber mold (press-form) you require. We also offer a delivery service. On top of that, we can cast the sample you specify on an injection molding machine and carry out a full range of injection molding services at our facility.',
    },
    why: {
      reliability: {
        title: 'Reliability',
        desc: 'Flawless quality of the products we manufacture.',
      },
      price: {
        title: 'Price',
        desc: 'A flexible pricing system.',
      },
      responsibility: {
        title: 'Responsibility',
        desc: 'An individual approach to every client, resolving their needs in full.',
      },
      convenience: {
        title: 'Convenience',
        desc: 'Convenient delivery terms.',
      },
    },
    youtube: {
      eyebrow: 'Video',
      h2: 'Learn more about us in the video',
      p: 'See our production processes and finished products on video.',
    },
    d3: {
      title: '3D Design Service',
      desc: 'We turn technical drawings of your parts and equipment into digital 3D models, catching dimension and tolerance errors before production begins.',
      f1: 'CAD modeling (SolidWorks, Fusion 360)',
      f2: 'Technical drawing preparation',
      f3: 'Prototype visualization and rendering',
      f4: 'File formats: STEP, STL, DWG, IGES',
      cta: 'Request 3D design',
      caption: 'CAD MODEL — SAMPLE DRAWING',
      videosTitle: 'Sample videos',
      videosDesc: 'See how our 3D design process is carried out.',
    },
    tokar: {
      title: 'Turning Service',
      desc: 'We machine high-precision parts from metal and other materials on modern lathes — from single pieces to full production runs.',
      f1: 'Steel, aluminium and non-ferrous metal machining',
      f2: 'Thread cutting and complex profiles',
      f3: 'Precision down to ±0.01 mm',
      f4: 'From small batches to large series',
      cta: 'Request turning service',
      caption: 'LATHE — SCHEMATIC VIEW',
      galleryTitle: 'Our work gallery',
      galleryDesc: 'Examples of parts produced in our turning workshop.',
      videosTitle: 'Sample videos',
      videosDesc: 'Watch our turning process on video.',
    },
    qoliplar: {
      title: 'Molds (Plastic and Rubber)',
      desc: 'We design and manufacture injection molds for plastic and press molds for rubber to meet your industrial needs, and repair existing tooling.',
      f1: 'Plastic injection molds',
      f2: 'Rubber press molds',
      f3: 'Mold repair and modernization',
      f4: 'Adapted for series production',
      cta: 'Request a mold design',
      caption: 'MOLD DESIGN — CROSS-SECTION',
      galleryTitle: 'Finished molds gallery',
      galleryDesc: 'Examples of molds produced at our facility.',
      videosTitle: 'Sample videos',
      videosDesc: 'Watch our mold manufacturing process on video.',
    },
    konveyer: {
      title: 'Conveyor Belts',
      desc: 'We supply, install and service conveyor belts of any size and load rating for your production lines.',
      f1: 'Rubber and PVC belts',
      f2: 'Custom sizes and widths',
      f3: 'Installation, splicing and maintenance',
      f4: 'High load and heat resistance',
      cta: 'Request a conveyor belt',
      caption: 'CONVEYOR SYSTEM — GENERAL LAYOUT',
      tableTitle: 'Conveyor belt specifications',
      tableDesc: 'A table of available widths, ply counts and rubber grades.',
      th1: 'No.',
      th2: 'Designation',
      th3: 'Type',
      th4: 'Width (mm)',
      th5: 'Plies',
      th6: 'Fabric type',
      th7: 'Top cover (mm)',
      th8: 'Bottom cover (mm)',
      th9: 'Rubber grade',
    },
    contact: {
      eyebrow: 'Contact',
      h2: "Let's discuss your project",
      p: "Fill in the form and we'll get back to you within 24 hours, or reach us directly using the details below.",
      phoneLbl: 'Phone',
      emailLbl: 'Email',
      addrLbl: 'Address',
      addrVal: '12 Bunyodkor St., Chilanzar district, Tashkent',
      hoursLbl: 'Working hours',
      hoursVal: 'Mon–Sat, 9:00 AM–6:00 PM',
    },
    form: {
      name: 'Your name',
      phone: 'Phone number',
      service: 'Service needed',
      message: 'Message (optional)',
      submit: 'Send request',
      note: 'Submitting will open WhatsApp with your request pre-filled.',
    },
    footer: {
      about:
        'Full-cycle engineering services: 3D design, turning, mold making and conveyor belts.',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      mapTitle: 'Location',
      rights: 'All rights reserved.',
      made: 'Built for industrial clients',
    },
  },
};

let currentLang = 'ru';
let currentRoute = 'home';

function applyI18n(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const parts = key.split('.');
    let val = I18N[lang];
    for (const p of parts) {
      val = val ? val[p] : undefined;
    }
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('.lang-switch button').forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

function showRoute(route) {
  if (!document.getElementById('route-' + route)) route = 'home';
  currentRoute = route;
  document
    .querySelectorAll('.route-section')
    .forEach((s) => s.classList.remove('is-active'));
  document.getElementById('route-' + route).classList.add('is-active');
  document
    .querySelectorAll('nav.main-nav button, .mobile-nav button[data-route]')
    .forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-route') === route);
    });
  window.scrollTo({
    top: 0,
    behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto',
  });
  closeMobileNav();
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
}

document.addEventListener('click', (e) => {
  const routeBtn = e.target.closest('[data-route]');
  if (routeBtn) {
    e.preventDefault();
    showRoute(routeBtn.getAttribute('data-route'));
  }
  const langBtn = e.target.closest('.lang-switch button');
  if (langBtn) {
    applyI18n(langBtn.getAttribute('data-lang'));
  }
});

document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

// preset service dropdown when arriving via a service CTA button
document.querySelectorAll('a[data-service]').forEach((a) => {
  a.addEventListener('click', () => {
    document.getElementById('f_service').value = a.getAttribute('data-service');
  });
});

// lead form -> WhatsApp handoff
document.getElementById('leadForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('f_name').value.trim();
  const phone = document.getElementById('f_phone').value.trim();
  const service = document.getElementById('f_service').value;
  const message = document.getElementById('f_message').value.trim();

  const text = `Ism: ${name}%0ATelefon: ${phone}%0AXizmat: ${service}%0AXabar: ${message}`;
  const waNumber = '998913413900'; // kompaniya WhatsApp raqami
  const waUrl = `https://wa.me/${waNumber}?text=${text}`;

  const status = document.getElementById('formStatus');
  status.textContent =
    currentLang === 'ru'
      ? 'Открываем WhatsApp…'
      : currentLang === 'en'
        ? 'Opening WhatsApp…'
        : 'WhatsApp ochilmoqda…';
  status.classList.add('show');
  window.open(waUrl, '_blank');
});

document.getElementById('year').textContent = new Date().getFullYear();

// ---- Photo galleries: tokarlik (25 photos) and qoliplar (6 photos) ----
const tokarPhotos = Array.from(
  { length: 25 },
  (_, i) => `./assets/tokar/photo_${i + 1}_2023-05-18_11-55-45.jpg`,
);
const qoliplarPhotos = Array.from(
  { length: 6 },
  (_, i) => `./assets/qoliplar/photo_${i + 1}_2023-05-18_18-19-01.jpg`,
);

function renderGallery(containerId, photos, altPrefix) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = photos
    .map(
      (src, i) =>
        `<img src="${src}" alt="${altPrefix} ${i + 1}" loading="lazy" />`,
    )
    .join('');
}
renderGallery('tokarPhotoGrid', tokarPhotos, 'Tokarlik ishi');
renderGallery('qoliplarPhotoGrid', qoliplarPhotos, 'Qolip namunasi');

// init from hash
window.addEventListener('hashchange', () => {
  const h = location.hash.replace('#', '');
  if (h && h !== 'contact') showRoute(h);
});
applyI18n('ru');
showRoute('home');
