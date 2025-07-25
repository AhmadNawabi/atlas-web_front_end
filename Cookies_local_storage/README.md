
# 🍪 Cookies and Local Storage (Max's Version)

> A beginner-friendly hands-on project to master browser cookies and web storage using Vanilla JavaScript and `js-cookie`.

---

![Project Badge](https://img.shields.io/badge/Progress-0%25-red)  
**Level:** Novice  
**Author:** Max Rolseth  
**Contributor:** Ahmad Nawabi  
**Weight:** 1  
**Manual QA Required:** ✅  
**Repository:** `atlas-web_front_end`  
**Directory:** `Cookies_local_storage`

---

## 🧠 Learning Objectives

- Understand how to create cookies using JavaScript.
- Learn how to set specific settings for the cookie (expiration, path).
- Read cookies with JavaScript.
- Use `js-cookie` for easier cookie manipulation.
- Use **Web Storage API** — `localStorage` and `sessionStorage`.
- Learn the differences between `localStorage` and `sessionStorage`.
- Build mini login and shopping cart interfaces with browser-based storage.

---

## ⚙️ Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All JavaScript must be inside `<script>` tags within each HTML file
- File extension: `.js`
- `src/index.js` must remain empty
- OS: Ubuntu 18.04
- Node.js: `12.x`
- npm: `6.x`
- All files must end with a newline (`\n`)

---

## 📁 Folder Structure

```
atlas-web_front_end/
└── Cookies_local_storage/
    ├── 0-index.html
    ├── 1-index.html
    ├── 2-index.html
    ├── 3-index.html
    ├── 4-index.html
    ├── 5-index.html
    ├── 6-index.html
    ├── 7-index.html
    ├── src/
    │   └── index.js
    ├── package.json
    └── README.md
```

---

## ✅ Tasks Overview

### 0. `README.md` 📄
Write this beautiful and comprehensive `README.md`.

---

### 1. Basic Cookie Creation 🍪
- Two input fields (`firstname`, `email`)
- “Log me in” → stores both as cookies
- “Show the cookies” → renders them in a paragraph

---

### 2. Expiring Cookie with Path ⏳
- Extend Task #1
- Set cookies to expire in **10 days**
- Apply cookies to the root path `/`

---

### 3. Reading Cookies 📬
- Implement `getCookie(name)` function
- Display: `Email: EMAIL - Firstname: FIRSTNAME`

---

### 4. Delete Cookies + Welcome Message 👋
- Login form toggles to Welcome screen if logged in
- Add logout link to remove cookies and show form again
- Dynamically build all elements with JS

---

### 5. Use `js-cookie` Library 🧰
- Import via CDN from jsDelivr
- Replace all manual cookie logic with:
  - `Cookies.set()`
  - `Cookies.get()`
  - `Cookies.remove()`

---

### 6. Local Storage: Shopping Cart 🛒
- Store selected items from a list into `localStorage`
- Persist data across refreshes and browser tabs
- Show message: `You previously had X items in your cart`

---

### 7. Session Storage: Cart v2 🛍️
- Swap to `sessionStorage` from `localStorage`
- Cart resets between tabs or browser sessions

---

### 8. Advanced Cart System with Quantities 🔁
- Manage cart using `sessionStorage`
- Support multiple quantities per item
- UI includes:
  - Add items
  - Remove specific items
  - “Clear my cart” option
- All elements rendered dynamically via JavaScript

---

## 🔗 How to Run

1. **Install project dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npx webpack-dev-server
   ```

3. **Access each file via browser:**
   ```
   http://localhost:8080/0-index.html
   http://localhost:8080/1-index.html
   http://localhost:8080/2-index.html
   http://localhost:8080/3-index.html
   http://localhost:8080/4-index.html
   http://localhost:8080/5-index.html
   http://localhost:8080/6-index.html
   http://localhost:8080/7-index.html
   ```

---

## 📚 Resources

- [🍪 Cookies and JavaScript - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [📦 js-cookie GitHub](https://github.com/js-cookie/js-cookie)
- [🗃️ Web Storage API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [📜 JavaScript DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---

## 🖼️ Screenshots

> Replace the links below with your own screenshots or GIFs.

### Login Form

![Login Form](https://via.placeholder.com/600x200.png?text=Login+Form+UI)

---

### Welcome Message

![Welcome Message](https://via.placeholder.com/600x200.png?text=Welcome+User+UI)

---

### Shopping Cart Example

![Cart UI](https://via.placeholder.com/600x200.png?text=Shopping+Cart+with+Web+Storage)

---

## ❓ FAQ

**Q: Why is `src/index.js` empty?**  
A: The project requires all JavaScript to be embedded inside `<script>` tags in each HTML file for simplicity.

**Q: Can I use frameworks like React?**  
A: No, the goal is to use **Vanilla JavaScript only** to understand browser APIs deeply.

**Q: What if my cookies are not showing up?**  
A: Make sure cookies are enabled in your browser and check expiration or path attributes.

---

## 🙌 Contributing

This is an educational project. However, contributions such as:

- UI improvements
- Code optimization
- Bug fixes
- Better error handling

…are always welcome. Fork the repo and open a pull request!

---

## 🚀 Author

**Max Rolseth**  
**Contributor:** Ahmad Nawabi  
Educational Front-End Developer Projects by [Atlas School](https://www.atlas.school)

---

Happy coding! 🎉
