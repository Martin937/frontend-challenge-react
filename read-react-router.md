1. Устанавливаем и запускаем react
   npx create-react-app name-folder
   npx create-react-app . для создания в текущей папке
   cd name-folder - Переход в папку пректа

2. Добавление маршрутизатора react-router
   npm install react-router-dom@6

3. Включение scss
   npm install node-sass --save
   переименовать файлы css в scss
   для сброса стилей в index.scss нужно добавить строку-@import-normalize;

4. GIT
   npm init Создание .JSON-файлf в каталог проекта
   git init Запускаем git
   git config --local user.name "Martin937" Объявляем свое имя
   git config --local user.email "Martin937@yandex.ru" Объявляем свой имейл
   git config --local core.autocrlf true Параметры установки окончаний строк
   git config --local core.safecrlf warn Параметры установки окончаний строк
   git config --local core.quotepath off Установка отображения unicode
   git status Посмотреть состояние
   git add -A Добавить все файлы
   git commit -a -m”completed” Создание контрольной точки
   git add -A + git commit -a -m”message” Вводить после внесения всех изменений
   git log Посмотреть изменения

5. GITHUB
   git remote add origin https://github.com/Martin937//beOnPulse.git Прописываем путь к github
   git remote set-url origin https://github.com/Martin937/beOnPulse.git Если нужно изменить уже существующий
   git push -u origin master Заливка на github
   git pull Обновление всех связей и изменений
   git push Заливка на github

6. Библиотека стилей
   npm install materialize-css@next
   (https://materializecss.com/getting-started.html)
   Num.propTypes = {
   num: PropTypes.number,
   };

7. Библиотека проверки типов
   npm install --save prop-types - библиотека
   (import PropTypes from 'prop-types');

8. Подключаем иконки
   npm install react-icons --save
   (https://react-icons.github.io/react-icons) библиотека иконок

9. Подключить favicon - https://favicon.io/

10. Подключить уведомления
    npm install noty --save

    - включить в index.js:
      import Noty from 'noty';
      import "../node_modules/noty/lib/noty.css";
      import "../node_modules/noty/lib/themes/mint.css";
    - использовать в jsx:
      new Noty({ text: "This is a " + type + " notification!", layout: "bottom", theme: "mint", type: type }).show();

11. Подключить анимации
    npm install react-transition-group --save
    (https://reactcommunity.org/react-transition-group/)

12. Подключить forms
    npm install react-hook-form --save

13. Команды
    npm start -Запускает сервер разработки.
    npm run build -Объединяет приложение в статические файлы для производства.
    npm test -Запускает тестовый раннер.
    http-server build -запуск локального сервера для проверки сборки (build -> это название папки)

14. Подключить R-18 + RR(index.js)
    import { createRoot } from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
    <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>
    );
15. Подключить (APP.jsx)
    import { Routes, Route } from 'react-router-dom';
    <>
    <Routes>
    {/_ Маршруты вложены друг в друга. Вложенные пути маршрутов строятся на родительские пути маршрута и вложенные элементы маршрута отображаются внутри элементы родительского маршрута. См. примечание о <Outlet> ниже. _/}
    <Route
    path='/'
    element={<Layout navItemsData={navItemsData} showText={showText} />} >
    <Route index element={<Home />} />
    <Route path='functions' element={<Functions />} />
    <Route path='classes' element={<Classes />} />
    <Route path='huks' element={<Huks />} />
    <Route path='routers' element={<Routers />} />
    <Route path='router-dom' element={<RouterDom />} />
    <Route path='examples' element={<Examples />} />
    {/_ Использование path="_"" означает "соответствовать чему угодно", поэтому этот маршрут действует как универсальное средство для URL-адресов, для которых у нас нет явных маршруты для. _/}
    <Route path='_' element={<NoMatch />} />
    </Route>
    </Routes>
    </>
