'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "ДВЕРЬ МЕЖКОМНАТНАЯ CL-6",
        slug: "cl-6",
        description: "Наша новая коллекция разработана исключительно для эксклюзивных ультрасовременных интерьеров. Особенность данной коллекции — это использование специально разработанного алюминиевого профиля для закрытия торцов дверного полотна. Обеспечивая надежную защиту от любых механических повреждений, алюминиевый профиль придает коллекции особый стиль, сочетая в себе строгость прямых линий и современный итальянский дизайн, минимализм и роскошь, простоту и гениальность. Большое разнообразие цветовых решений отделочного материала, стекол «Лакобель» и зеркал позволяет подобрать двери специально для Вас — истинного ценителя «модернизма» и «ХайТэка». Гармонично вписываясь в современный дизайн Вашего интерьера, двери «City Line» станут его главной изюминкой, подчеркнув Ваш безупречный вкус и индивидуальность.",
        type: params.product.types.interdoors.id,
        seria: params.user.seria.cityline.id,
        image: "/images/stock/CL6_realwood_capuchino_kvarts.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ДВЕРЬ МЕЖКОМНАТНАЯ CL-12",
        slug: "cl-12",
        description: "Наша новая коллекция разработана исключительно для эксклюзивных ультрасовременных интерьеров. Особенность данной коллекции — это использование специально разработанного алюминиевого профиля для закрытия торцов дверного полотна. Обеспечивая надежную защиту от любых механических повреждений, алюминиевый профиль придает коллекции особый стиль, сочетая в себе строгость прямых линий и современный итальянский дизайн, минимализм и роскошь, простоту и гениальность. Большое разнообразие цветовых решений отделочного материала, стекол «Лакобель» и зеркал позволяет подобрать двери специально для Вас — истинного ценителя «модернизма» и «ХайТэка». Гармонично вписываясь в современный дизайн Вашего интерьера, двери «City Line» станут его главной изюминкой, подчеркнув Ваш безупречный вкус и индивидуальность.",
        type: params.product.types.interdoors.id,
        seria: params.user.seria.cityline.id,
        image: "/images/stock/CL12_dub_zolotoy_bronze.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ДВЕРЬ МЕЖКОМНАТНАЯ КАРДИНАЛ",
        slug: "kardinal",
        description: "Межкомнатная МДФ дверь «Кардинал» — это сочетание качественного каркаса из соснового бруса и надежного ламинированного покрытия, устойчивого к механическим повреждениям и загрязнениям различного рода. Остекленная дверь, выполненная в стиле ампир, олицетворяет собой торжественность и достаток.",
        type: params.product.types.interdoors.id,
        seria: params.user.seria.monolith.id,
        image: "/images/stock/kardinal.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ДВЕРЬ ВХОДНАЯ ВЕНА АЛ",
        slug: "vena-al",
        description: "Одна из самых лучших входных дверей в своем классе. Надежные, красивые и долговечные.",
        type: params.product.types.entranse.id,
        seria: params.user.seria.monolith.id,
        image: "/images/stock/venal.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ДВЕРЬ МЕЖКОМНАТНАЯ ЛУНИКА 9",
        slug: "lunika-9",
        description: "Конструкция двери Луника 9: деревянный каркас- цельный брус сосны, облицованный наборными панелями МДФ толщиной 14 мм. Дверь комплектуется светлым сатиновым стеклом.",
        type: params.product.types.interdoors.id,
        seria: params.user.seria.seriaz.id,
        image: "/images/stock/lunika9.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ДВЕРЬ МЕЖКОМНАТНАЯ КАМИЛЛА",
        slug: "kamilalittle",
        description: "Конструкция двери Камилла: деревянный каркас- цельный брус сосны, облицованный  двумя панелями МДФ толщиной 14 мм. Торцевые части полотен закрыты специальной МДФ кромкой, которая служит одновременно и декором и защитой от механических повреждений при ежедневной эксплуатации.",
        type: params.product.types.interdoors.id,
        seria: params.user.seria.seriax.id,
        image: "/images/stock/kamilalittle.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ДВЕРЬ МЕЖКОМНАТНАЯ ЛИТА",
        slug: "lita",
        description: "Конструкция двери Лита: деревянный каркас -цельный брус сосны, облицованный  двумя панелями МДФ толщиной 14 мм. Торцевые части полотен закрыты специальной МДФ кромкой, которая служит одновременно и декором и защитой от механических повреждений при ежедневной эксплуатации.",
        type: params.product.types.interdoors.id,
        seria: params.user.seria.seriax.id,
        image: "/images/stock/lita.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ДВЕРЬ МЕЖКОМНАТНАЯ ПАЛЬМИРА",
        slug: "palmira",
        description: "Конструкция двери Пальмира ТМ «Феникс»: деревянный каркас- цельный брус сосны, облицованный наборными панелями МДФ толщиной 14 мм, что создает видимую имитацию 3D эффекта. Во внутреннее межпанельное дверное заполнение технически монтируется цельный лист стекла толщиной 4 мм, которое в случаи повреждения, можно будет легко заменить.",
        type: params.product.types.interdoors.id,
        seria: params.user.seria.monolith.id,
        image: "/images/stock/palmira.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  }
};
