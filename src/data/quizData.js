// /src/data/quizData.js

const quizData = {
  /* Настройки для стартового экрана */
  startScreen: {
    robotPosition: { x: 1368 - 500, y: 540 - 540 }, // позиция робота idle
    buttonStart: {
      position: { x: 450, y: 600 },
      size: { width: 346, height: 78 },
    },
  },

  /* Рамка вопроса (общая) */
  questionFrame: {
    frame: {
      position: { left: 192, top: 79 },
      size: { width: 836, height: 218 },
    },
  },

  /* Рамка счёта (общая) */
  scoreFrame: {
    frame: {
      position: { left: 1563, top: 836 },
      size: { width: 214, height: 120 },
    },

    text: {
      position: { left: 1575, top: 845 },
      size: { width: 194, height: 100 },
      fontSize: 90,
      lineHeight: 1.0,
    },
  },

  /* Инфографика (общая часть рамки) */
  answerInfo: {
    frame: {
      position: { left: 200, top: 0 },
      size: { width: 1520, height: 1020 },
    },
  },

  /* Экран результата */
  resultScreen: {
    frame: {
      position: { x: 362, y: 236},
      size: { width: 526, height: 355 },
    },
    text: {
      position: { x: 362, y: 236 },
      size: { width: 500, height: 200 },
      fontSize: 64,
      lineHeight: 1.2,
    },
    buttonRetry: {
      position: { x: 452, y: 673},
      size: { width: 346, height: 78 },
    },
  },

  questions: [
    {
      id: 1,
      questionLabel: "Вопрос 1",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },

      question: "Какова общая протяженность газотранспортной системы в России?",
      questionText: {
        position: { left: 270, top: 140 },
        size: { width: 700, height: 118 },
        fontSize: 50,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info1.webm",
      answerText: "180,6 тысяч километров – именно столько составляет протяженность газотранспортной системы в России. Так как длина экватора – 40 075 км, то российскими газовыми трубами можно обогнуть экватор Земли 4,5 раза!",
      infoTextConfig: {
        position: { left: 430, top: 850 },
        size: { width: 1150, height: 300 },
        fontSize: 42,
        lineHeight: 1.0,
      },
      options: ["100 тысяч километров", "150 тысяч километров", "2 экватора Земли", "4,5 экватора Земли"],
      correctAnswerIndex: 3,
    },
    {
      id: 2,
      questionLabel: "Вопрос 2",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },

      question: "Сколько метров составил самый большой перепад высот между точкой входа и точкой выхода при строительстве магистрального газопровода в России?",
      questionText: {
        position: { left: 240, top: 140 },
        size: { width: 740, height: 150 },
        fontSize: 38,
        lineHeight: 1.10,
      },
      infoType: "video",
      infoContent: "info2.webm",
      answerText: "При сооружении участка «Ковыкта — Чаянда» газопровода «Сила Сибири» построен уникальный 1,5-километровый переход под рекой Лена с самым большим перепадом высот между точками входа и выхода — 157,94 м. Этот рекорд занесён в Книгу рекордов России.",
      infoTextConfig: {
        position: { left: 460, top: 850 },
        size: { width: 1100, height: 300 },
        fontSize: 36,
        lineHeight: 1.2,
      },
      options: ["102,13 м", "128, 64 м", "157,94 м", "216, 59 м"],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 3 ======
    {
      id: 3,
      questionLabel: "Вопрос 3",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question: "Из какого материала не изготавливают трубы для газопровода?",
      questionText: {
        position: { left: 240, top: 143 },
        size: { width: 740, height: 150 },
        fontSize: 48,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info3.webm",
      answerText:
        "Трубы могут изготавливать из двух видов полиэтилена, высокоуглеродистой стали, в последние годы все активнее используют асбоцементные трубы. А вот алюминий для газовых труб не подходит.",
      infoTextConfig: {
        position: { left: 465, top: 855 },
        size: { width: 1085, height: 300 },
        fontSize: 40,
        lineHeight: 1.0,
      },
      options: ["Полиэтилена", "Стали", "Алюминия", "Асбоцемента"],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 4 ======
    {
      id: 4,
      questionLabel: "Вопрос 4",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Сборку магистральных трубопроводов производят через природные и искусственные препятствия. Какой  из нижеперечисленных прокладок трубопроводов не существует?",
      questionText: {
        position: { left: 240, top: 140 },
        size: { width: 740, height: 150 },
        fontSize: 34,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info4.webm",
      answerText:
        "Трубы могут находиться в земле и над ней, на дне рек, озёр, болот и морей, а вот специальных надводных конструкций не существует",
      infoTextConfig: {
        position: { left: 470, top: 855 },
        size: { width: 1080, height: 300 },
        fontSize: 48,
        lineHeight: 1.2,
      },
      options: ["Подводной", "Надводной", "Подземной", "Наземной"],
      correctAnswerIndex: 1,
    },

    // ====== Вопрос 5 ======
    {
      id: 5,
      questionLabel: "Вопрос 5",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Если газопровод прокладывают в районе с неустойчивыми грунтами и породами, что для этого никогда не используют?",
      questionText: {
        position: { left: 235, top: 150 },
        size: { width: 760, height: 150 },
        fontSize: 38,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info5.webm",
      answerText:
        "Чтобы трубопровод не разрушился при оползнях и сейсмических подвижках используют трубы с повышенными деформационными способностями, с высокой вязкостью сварного соединения и специальные конструктивные решения. А «Трубы-трансформеры» - это, возможно, название очередного голливудского блокбастера.",
      infoTextConfig: {
        position: { left: 460, top: 847 },
        size: { width: 1090, height: 300 },
        fontSize: 36,
        lineHeight: 0.95,
      },
      options: [
        "Трубы с повышенными деформационными способностями",
        "Специальные конструктивные решения",
        "Трубы-трансформеры",
        "Трубы с высокой вязкостью сварного соединения",
      ],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 6 ======
    {
      id: 6,
      questionLabel: "Вопрос 6",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Для добычи углеводородов в Охотском море, которое 7 месяцев в году покрыто льдом, «Газпром» применяет передовые технологии. В чём уникальность Киринского газоконденсатного месторождения?",
      questionText: {
        position: { left: 240, top: 145 },
        size: { width: 740, height: 150 },
        fontSize: 32,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info6.webm",
      answerText:
        "Киринское месторождение – единственное на российском шельфе, где добыча впервые ведется с помощью подводного добычного комплекса без использования платформ и иных надводных конструкций.",
      infoTextConfig: {
        position: { left: 455, top: 850 },
        size: { width: 1100, height: 300 },
        fontSize: 42,
        lineHeight: 1.0,
      },
      options: [
        "Специальный ледорубный комплекс",
        "Особенная надводная конструкция",
        "Подводный добычной комплекс",
        "Трубы специальной конструкции из особого сплава",
      ],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 7 ======
    {
      id: 7,
      questionLabel: "Вопрос 7",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Какой из перечисленных газопроводов стал дважды мировым рекордсменом?",
      questionText: {
        position: { left: 240, top: 145 },
        size: { width: 740, height: 150 },
        fontSize: 48,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info7.webm",
      answerText:
        "«Турецкий поток». Он построен на глубине более 2 км, никогда ранее газопровод такого большого диаметра не укладывали так глубоко. К тому же именно «Турецкому потоку» принадлежит рекорд по скорости морской укладки.",
      infoTextConfig: {
        position: { left: 455, top: 850 },
        size: { width: 1100, height: 300 },
        fontSize: 40,
        lineHeight: 1.0,
      },
      options: [
        "Голубой поток",
        "Сила Сибири",
        "Турецкий поток",
        "Уренгой – Помары – Ужгород",
      ],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 8 ======
    {
      id: 8,
      questionLabel: "Вопрос 8",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Какие уникальные находки не были обнаружены при строительстве «Турецкого потока»?",
      questionText: {
        position: { left: 240, top: 145 },
        size: { width: 740, height: 150 },
        fontSize: 46,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info8.webm",
      answerText:
        "Следы пребывания сарматских племен, останки византийских кораблей и уникальная амфора, которой более 3 тысяч лет - все эти раритеты были обнаружены археологами во время исследования территории, выделенной под строительство «Турецкого потока». А вот древнеримской статуи среди находок не было",
      infoTextConfig: {
        position: { left: 460, top: 845 },
        size: { width: 1090, height: 300 },
        fontSize: 36,
        lineHeight: 1.0,
      },
      options: [
        "Древнее сарматское поселение",
        "Останки византийских кораблей",
        "Древнеримская статуя",
        "Амфора, которой 3000 лет",
      ],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 9 ======
    {
      id: 9,
      questionLabel: "Вопрос 9",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Какой музыкальный инструмент вы не найдёте в словаре профессионального сленга сотрудников газовой промышленности?",
      questionText: {
        position: { left: 220, top: 155 },
        size: { width: 780, height: 150 },
        fontSize: 35,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info9.webm",
      answerText:
        "«Гитара» – трубопроводная технологическая обвязка, «контрабас» – промышленный контроллер, «балалайка» – агрегат для освоения и ремонта скважин. «Виолончель» среди сленговых наименований не встречается.",
      infoTextConfig: {
        position: { left: 455, top: 855 },
        size: { width: 1100, height: 300 },
        fontSize: 40,
        lineHeight: 1.0,
      },
      options: ["Гитара", "Контрабас", "Виолончель", "Балалайка"],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 10 ======
    {
      id: 10,
      questionLabel: "Вопрос 10",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Какой термин из биологии не был позаимствован газовой отраслью?",
      questionText: {
        position: { left: 240, top: 145 },
        size: { width: 740, height: 150 },
        fontSize: 48,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info10.webm",
      answerText:
        "Кустом называется площадка, где расположены устья газовых скважин. Устье называют елкой. «Мартышкой» – штурвальный ключ. А вот «бабочка» не прижилась в профессиональном сленге.",
      infoTextConfig: {
        position: { left: 455, top: 845 },
        size: { width: 1100, height: 300 },
        fontSize: 46,
        lineHeight: 1.0,
      },
      options: ["Бабочка", "Куст", "Мартышка", "Ёлка"],
      correctAnswerIndex: 0,
    },

    // ====== Вопрос 11 ======
    {
      id: 11,
      questionLabel: "Вопрос 11",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Для диагностики магистральных трубопроводов используются внутритрубные снаряды, которые запускаются внутрь труб и изучают их на протяжении пути от одной компрессорной станции к другой. Благодаря чему эти роботы перемещаются?",
      questionText: {
        position: { left: 230, top: 145 },
        size: { width: 770, height: 150 },
        fontSize: 28,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info11.webm",
      answerText:
        "Снаряды для диагностики передвигаются не за счёт гусениц и колёс, и даже не из-за двигателя. Они перемещаются благодаря потоку газа.",
      infoTextConfig: {
        position: { left: 455, top: 865 },
        size: { width: 1100, height: 300 },
        fontSize: 48,
        lineHeight: 1.0,
      },
      options: [
        "Резиновые гусеницы",
        "Специальные колёса",
        "Поток газа",
        "Уникальный электродвигатель",
      ],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 12 ======
    {
      id: 12,
      questionLabel: "Вопрос 12",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Как роботы-дефектоскопы перемещаются по газопроводу / внутри компрессорных станций?",
      questionText: {
        position: { left: 240, top: 145 },
        size: { width: 740, height: 150 },
        fontSize: 46,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info12.webm",
      answerText:
        "Роботы-дефектоскопы перемещаются самостоятельно, управляются с помощью пульта. Не нужно тянуть стальную нить или иметь систему магнитов.",
      infoTextConfig: {
        position: { left: 455, top: 870 },
        size: { width: 1100, height: 300 },
        fontSize: 42,
        lineHeight: 1.0,
      },
      options: [
        "Система магнитов",
        "Cпециальная стальная нить",
        "Самостоятельно, с помощью пульта",
        "Благодаря действиям сотрудника внутри трубы",
      ],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 13 ======
    {
      id: 13,
      questionLabel: "Вопрос 13",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Какие параметры должен выдерживать морской магистральный газопровод?",
      questionText: {
        position: { left: 240, top: 145 },
        size: { width: 740, height: 150 },
        fontSize: 48,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info13.webm",
      answerText:
        "Морской магистральный газопровод выдерживает давление до 300 атмосфер и температуру до 400 °C.",
      infoTextConfig: {
        position: { left: 455, top: 860 },
        size: { width: 1100, height: 300 },
        fontSize: 52,
        lineHeight: 1.0,
      },
      options: [
        "Давление до 300 атмосфер и температуру до 400 °C",
        "Давление до 200 атмосфер и объём до 1 млн куб.м",
        "Температуру до 100 °C и вязкость до 300 Па•с",
        "Давление до 150 атмосфер и температуру до 200°C",
      ],
      correctAnswerIndex: 0,
    },

    // ====== Вопрос 14 ======
    {
      id: 14,
      questionLabel: "Вопрос 14",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Какой выдуманный сказочный персонаж не имеет отношения к газовой промышленности?",
      questionText: {
        position: { left: 240, top: 145 },
        size: { width: 740, height: 150 },
        fontSize: 46,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info14.webm",
      answerText:
        "«Горыныч» – это передвижная парообразующая установка, «Дракон» — кольцевой подогреватель, «Чебурашка» – газомаслоотделитель или переносимая радиостанция. А вот «Шапокляк» нет в сленге газовиков.",
      infoTextConfig: {
        position: { left: 455, top: 855 },
        size: { width: 1100, height: 300 },
        fontSize: 40,
        lineHeight: 1.0,
      },
      options: ["Горыныч", "Дракон", "Шапокляк", "Чебурашка"],
      correctAnswerIndex: 2,
    },

    // ====== Вопрос 15 ======
    {
      id: 15,
      questionLabel: "Вопрос 15",
      questionLabelPos: {
        left: 560,
        top: 84,
        width: 200,
        height: 40,
        fontSize: 38,
        lineHeight: 1.2,
      },
      question:
        "Где находится первый и единственный в России полигон пневматических испытаний труб?",
      questionText: {
        position: { left: 240, top: 145 },
        size: { width: 740, height: 150 },
        fontSize: 46,
        lineHeight: 1.2,
      },
      infoType: "video",
      infoContent: "info15.webm",
      answerText:
        "Уникальный полигон пневматических испытаний труб находится в городе Копейске Челябинской области. Это первый и единственный в России и третий в мире полигон такого типа.",
      infoTextConfig: {
        position: { left: 455, top: 850 },
        size: { width: 1100, height: 300 },
        fontSize: 44,
        lineHeight: 1.0,
      },
      options: ["В Копейске", "В Рублёвске", "В Гривенской", "В Денежкине"],
      correctAnswerIndex: 0,
    },
  ],
};

export default quizData;
