-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Сен 19 2018 г., 11:08
-- Версия сервера: 10.1.32-MariaDB
-- Версия PHP: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `crate`
--

-- --------------------------------------------------------

--
-- Структура таблицы `crates`
--

CREATE TABLE `crates` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `crates`
--

INSERT INTO `crates` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Серия CityLine', 'Передовые конструктивные решения и материалы.', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(2, 'Серия Монолит', 'Прочные и надежные. Спокойствие и защита.', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(3, 'Серия Z', 'Классика и модерн. Красиво и практично.', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(4, 'Серия X', 'Идеальный баланс. Надежная конструкция.', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(5, 'Двери входные', 'Прочные и красивые. Надежные и долговечные.', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(6, 'Арки межкомнатные', 'Красивое решение для объединения пространств.', '2018-09-19 03:02:52', '2018-09-19 03:02:52');

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `type` int(11) DEFAULT NULL,
  `seria` int(11) DEFAULT NULL,
  `image` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `description`, `type`, `seria`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'ДВЕРЬ МЕЖКОМНАТНАЯ CL-6', 'cl-6', 'Наша новая коллекция разработана исключительно для эксклюзивных ультрасовременных интерьеров. Особенность данной коллекции — это использование специально разработанного алюминиевого профиля для закрытия торцов дверного полотна. Обеспечивая надежную защиту от любых механических повреждений, алюминиевый профиль придает коллекции особый стиль, сочетая в себе строгость прямых линий и современный итальянский дизайн, минимализм и роскошь, простоту и гениальность. Большое разнообразие цветовых решений отделочного материала, стекол «Лакобель» и зеркал позволяет подобрать двери специально для Вас — истинного ценителя «модернизма» и «ХайТэка». Гармонично вписываясь в современный дизайн Вашего интерьера, двери «City Line» станут его главной изюминкой, подчеркнув Ваш безупречный вкус и индивидуальность.', 1, 1, '/images/stock/CL6_realwood_capuchino_kvarts.jpg', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(2, 'ДВЕРЬ МЕЖКОМНАТНАЯ CL-12', 'cl-12', 'Наша новая коллекция разработана исключительно для эксклюзивных ультрасовременных интерьеров. Особенность данной коллекции — это использование специально разработанного алюминиевого профиля для закрытия торцов дверного полотна. Обеспечивая надежную защиту от любых механических повреждений, алюминиевый профиль придает коллекции особый стиль, сочетая в себе строгость прямых линий и современный итальянский дизайн, минимализм и роскошь, простоту и гениальность. Большое разнообразие цветовых решений отделочного материала, стекол «Лакобель» и зеркал позволяет подобрать двери специально для Вас — истинного ценителя «модернизма» и «ХайТэка». Гармонично вписываясь в современный дизайн Вашего интерьера, двери «City Line» станут его главной изюминкой, подчеркнув Ваш безупречный вкус и индивидуальность.', 1, 1, '/images/stock/CL12_dub_zolotoy_bronze.jpg', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(3, 'ДВЕРЬ МЕЖКОМНАТНАЯ КАРДИНАЛ', 'kardinal', 'Межкомнатная МДФ дверь «Кардинал» — это сочетание качественного каркаса из соснового бруса и надежного ламинированного покрытия, устойчивого к механическим повреждениям и загрязнениям различного рода. Остекленная дверь, выполненная в стиле ампир, олицетворяет собой торжественность и достаток.', 1, 2, '/images/stock/kardinal.png', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(4, 'ДВЕРЬ ВХОДНАЯ ВЕНА АЛ', 'vena-al', 'Одна из самых лучших входных дверей в своем классе. Надежные, красивые и долговечные.', 2, 2, '/images/stock/venal.jpg', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(5, 'ДВЕРЬ МЕЖКОМНАТНАЯ ЛУНИКА 9', 'lunika-9', 'Конструкция двери Луника 9: деревянный каркас- цельный брус сосны, облицованный наборными панелями МДФ толщиной 14 мм. Дверь комплектуется светлым сатиновым стеклом.', 1, 3, '/images/stock/lunika9.png', '2018-09-19 03:02:52', '2018-09-19 06:15:56'),
(6, 'ДВЕРЬ МЕЖКОМНАТНАЯ КАМИЛЛА', 'kamilalittle', 'Конструкция двери Камилла: деревянный каркас- цельный брус сосны, облицованный  двумя панелями МДФ толщиной 14 мм. Торцевые части полотен закрыты специальной МДФ кромкой, которая служит одновременно и декором и защитой от механических повреждений при ежедневной эксплуатации.', 1, 4, '/images/stock/kamilalittle.png', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(7, 'ДВЕРЬ МЕЖКОМНАТНАЯ ЛИТА', 'lita', 'Конструкция двери Лита: деревянный каркас -цельный брус сосны, облицованный  двумя панелями МДФ толщиной 14 мм. Торцевые части полотен закрыты специальной МДФ кромкой, которая служит одновременно и декором и защитой от механических повреждений при ежедневной эксплуатации.', 1, 4, '/images/stock/lita.png', '2018-09-19 03:02:52', '2018-09-19 03:02:52'),
(8, 'ДВЕРЬ МЕЖКОМНАТНАЯ ПАЛЬМИРА', 'palmira', 'Конструкция двери Пальмира ТМ «Феникс»: деревянный каркас- цельный брус сосны, облицованный наборными панелями МДФ толщиной 14 мм, что создает видимую имитацию 3D эффекта. Во внутреннее межпанельное дверное заполнение технически монтируется цельный лист стекла толщиной 4 мм, которое в случаи повреждения, можно будет легко заменить.', 1, 2, '/images/stock/palmira.png', '2018-09-19 03:02:52', '2018-09-19 03:02:52');

-- --------------------------------------------------------

--
-- Структура таблицы `sequelizedata`
--

CREATE TABLE `sequelizedata` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `sequelizedata`
--

INSERT INTO `sequelizedata` (`name`) VALUES
('1-user.js'),
('2-products.js'),
('3-crates.js');

-- --------------------------------------------------------

--
-- Структура таблицы `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('1-user.js'),
('2-product.js'),
('3-crates.js'),
('4-subscriptions.js');

-- --------------------------------------------------------

--
-- Структура таблицы `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `crateId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `userId`, `crateId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2018-09-19 06:14:27', '2018-09-19 06:14:27'),
(2, 1, 4, '2018-09-19 06:14:36', '2018-09-19 06:14:36'),
(3, 1, 2, '2018-09-19 06:14:47', '2018-09-19 06:14:47'),
(5, 1, 5, '2018-09-19 06:15:02', '2018-09-19 06:15:02'),
(7, 2, 3, '2018-09-19 08:26:37', '2018-09-19 08:26:37'),
(8, 2, 1, '2018-09-19 08:26:49', '2018-09-19 08:26:49'),
(9, 2, 2, '2018-09-19 08:26:52', '2018-09-19 08:26:52'),
(10, 2, 6, '2018-09-19 08:27:01', '2018-09-19 08:27:01'),
(11, 2, 2, '2018-09-19 08:31:06', '2018-09-19 08:31:06');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` text,
  `password` text,
  `role` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'The Admin', 'admin@itq.space', '$2b$10$QcHV1jTv464hqo2xG6YuVuLPT6CU6AN3wEAfYntkptYmxd7ohWpiG', 'ADMIN', '2018-09-19 03:02:51', '2018-09-19 03:02:51'),
(2, 'The User', 'user@itq.space', '$2b$10$5DiUFjs3.zRNjxN7Kvr3JuAcK98TY5g2ZULDi5U.qg.3.XxtSgn4a', 'USER', '2018-09-19 03:02:51', '2018-09-19 03:02:51'),
(3, 'Александр Владимирович', 'asto@itq.space', '$2b$10$PP1lamPgWTXycBEY34WpeukcnmN9Xp.LMno5Ub8tqoUbQuHTb.n7.', 'USER', '2018-09-19 03:02:52', '2018-09-19 03:02:52');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `crates`
--
ALTER TABLE `crates`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sequelizedata`
--
ALTER TABLE `sequelizedata`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `crateId` (`crateId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `crates`
--
ALTER TABLE `crates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD CONSTRAINT `subscriptions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `subscriptions_ibfk_2` FOREIGN KEY (`crateId`) REFERENCES `crates` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
