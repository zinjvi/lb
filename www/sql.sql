-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 25 2013 г., 23:11
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `lb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf32 AUTO_INCREMENT=34 ;

--
-- Дамп данных таблицы `article`
--

INSERT INTO `article` (`id`, `title`, `description`, `category_id`, `image`) VALUES
(29, 'Hsfsef sfsfsdf sdfsdf', '<p><strong>Третья форма для</strong> подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<blockquote>\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n</blockquote>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.<img alt="" src="/images/storage/articles/Koala.jpg" style="float:right; height:300px; width:400px" /></p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n', 3, '/images/storage/articles/4.jpg'),
(30, 'Tilte test', '<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n', 2, '/images/storage/articles/2.jpg'),
(32, 'Csdf dfgdfg dfg', '<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n', 2, '/images/storage/articles/22092-otkrytki-s-novim-dnem.gif'),
(33, 'Tdfgdfg fghfgh', '<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n\r\n<p>Третья форма для подавляющего числа неправильных глаголов или совпадает с прошедшим временем или образуется прибавлением &ndash;n к основной форме или форме прошедшего времени. Так что тут вообще ничего особо и учить-то не надо.&nbsp;</p>\r\n\r\n<p>Причем, далеко не все неправильные глаголы встречаются хоть сколько-нибудь часто в прошедшем времени или третьей форме. Например, можно десять книг прочесть и ни разу не встретить всякие там wove, trod или mown. А самое главное, как и любые другие слова их заучить &laquo;вперед&raquo; невозможно. Они запомнятся только в процессе, постепенно. Надо распечатать табличку самых распространенных неправильных глаголов, разбитых вот так вот по группам, и иметь ее под рукой во время чтения. Постепенно это все само собой и запомнится.</p>\r\n', 2, '/images/storage/articles/Penguins.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `bean`
--

CREATE TABLE IF NOT EXISTS `bean` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `bean`
--

INSERT INTO `bean` (`id`, `name`) VALUES
(1, 'ghjgjhghj');

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `group_id` (`group_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `name`, `group_id`) VALUES
(2, 'xdfbfff', 1),
(3, 'ddfg', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `group`
--

CREATE TABLE IF NOT EXISTS `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `group`
--

INSERT INTO `group` (`id`, `name`) VALUES
(1, 'Тренд'),
(2, 'Красота'),
(3, 'Преднозначение быть женщиной');

-- --------------------------------------------------------

--
-- Структура таблицы `header_image`
--

CREATE TABLE IF NOT EXISTS `header_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Дамп данных таблицы `header_image`
--

INSERT INTO `header_image` (`id`, `name`, `path`, `active`) VALUES
(1, 'hi1', 'header-image_01.jpg', 1),
(12, 'd', 'Jellyfish.jpg', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `second`
--

CREATE TABLE IF NOT EXISTS `second` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблицы `table`
--

CREATE TABLE IF NOT EXISTS `table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `second_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `second_id` (`second_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
