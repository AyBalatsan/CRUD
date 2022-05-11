# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Trello на react

Stack технологий
React, ​git​, typescript, styled-components.

Задача состоит в том, чтобы получить практический опыт работы с react, как с view слоем, и вскрыть проблемы передачи и обработки данных в react.
Мы будем делать онлайн канбан доску аналогичную . Она же будет выступать нам прототипом.

Есть 2 основных экрана: экран доски и экран карточки. Мы сфокусируемся сейчас на CRUD функциональности. Делать не нужно: авторизацию, перетаскивание карточек, правое меню, список досок (у нас будет только 1 доска), прикрепление картинок к карточкам, уведомления, настройки аккаунта.
То есть основной фокус сейчас будет на создании/редактировании карточек и комментариев.
Использовать компонентный подход: ​
​
## Нефункциональные требования
Каких то особенных требований к верстке нет, главное чтобы ничего никуда не ехало и было аккуратно. Как писать и собирать css пока не принципиально.
Не нужно использовать: сборки с кучей предустановленных библиотек, библиотеки для работы с состоянием - redux, flux, mobx etc.
create-react-app my-app --template typescript
На текущий момент у нас не будет взаимодействия с backend, хранить данные, чтобы они не терялись с перезагрузкой страницы, мы будем в local storage.
Используем git для контроля версий.
## Функциональные требования
Оба экрана фактически будут являться одной страницей - роутинг пока делать не нужно.
Доска
Как пользователь, когда я первый раз захожу на страницу, я должен увидеть попап, спрашивающий мое имя. В дальнейшем это имя будет выводиться, как имя автора: в карточках и комментариях.
Как пользователь, когда я первый раз захожу на страницу, я должен увидеть 4 колонки: TODO, In Progress, Testing, Done. Я должен иметь возможность изменить названия этих колонок (аналогично с trello).
Как пользователь, я должен иметь возможность добавить карточку к столбцу (аналогично с trello).
Как пользователь, я должен иметь возможность кликнуть на карточку, чтобы открыть попап с деталями карточки.
Как пользователь, я должен видеть количество комментариев под карточкой (аналогично с trello).
Карточка
Как пользователь, я должен иметь возможность по клику на крестик или нажав на esc закрыть попап.
Как пользователь, я должен иметь возможность удалить карточку.
Как пользователь, я должен иметь возможность переименовать карточку (аналогично trello).
Как пользователь, я должен иметь возможность добавить/изменить/удалить описание к карточке.
Как пользователь, я должен иметь возможность добавить/изменить/удалить комментарий.
Как пользователь, я должен видеть в попапе: название карточки, название колонки карточки, имя автора карточки, описание карточки, комментарии к карточке (имя и автора)

## SubTask

### 1_1 Структура проекта
### 1_2 Верстка экранов и карточек
### 1_3 Функционал
### 1_4 Рефактор