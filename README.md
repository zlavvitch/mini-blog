# Mini Blog

Мини-приложение "Блог" с возможностью создания, редактирования, удаления постов, добавления комментариев и реакций.

---

## 🔗 Демо

[Посмотреть демо](https://mini-blog.vercel.app)
![Скриншот](./public/screenshot.png)

---

## Технологии

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [FSD](https://feature-sliced.design/)

---

## Запуск проекта

```bash
git clone https://github.com/your-username/mini-blog.git
cd mini-blog
npm install
npm run dev
```

---

## Архетиктура

Проект использует Feature-Sliced Design (FSD):

src/
├── app/ # Инициализация, роутинг, провайдеры
├── pages/ # Страницы (HomePage, PostPage)
├── features/ # Фичи (CreatePost, AddComment и др.)
├── entities/ # Сущности (Post, Comment, Reaction)
├── widgets/ # Составные блоки (PostList, CommentList)
├── shared/ # Переиспользуемые компоненты и утилиты

---

## Roadmap

- [x] Инициализация проекта
- [x] Настройка Tailwind и роутера
- [ ] Реализация списка постов
- [ ] Создание и редактирование постов
- [ ] Реакции и комментарии
- [ ] Деплой на Vercel
