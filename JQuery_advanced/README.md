# 📘 jQuery Advanced (Max's Version)

**Author:** Ahmad Nawabi  
**Project Repository:** `atlas-web_front_end/JQuery_advanced`  
**Course Project:** Web Front-End Curriculum @ Atlas School  
**Weight:** 1  
**Manual QA Review Required:** ✅  

---

## 📚 Project Overview

This project explores advanced concepts of **jQuery**, a fast, small, and feature-rich JavaScript library. The tasks are designed to build proficiency in DOM manipulation, event handling, AJAX requests, and dynamic front-end development using both client-side and local JSON server APIs.

---

## 🎯 Learning Objectives

By completing this project, I have learned to:

- Load jQuery from a CDN and validate its availability
- Dynamically create and manipulate DOM elements using jQuery
- Add and remove elements based on user interaction
- Handle events such as `click`, `submit`, and input changes
- Send and handle AJAX requests (GET, POST, DELETE)
- Query public APIs (e.g., Wikipedia)
- Work with pagination and form inputs
- Use `json-server` to simulate backend interaction

---

## 📁 Project Structure

Each task corresponds to a specific HTML file and demonstrates an isolated jQuery concept:

| File             | Description |
|------------------|-------------|
| `0-index.html`   | Load jQuery via CDN and verify it loaded correctly |
| `1-index.html`   | Create and append a paragraph DOM element |
| `2-index.html`   | Create a full HTML table using a single HTML string |
| `3-index.html`   | Use chained jQuery methods to create and append elements |
| `4-index.html`   | Replace table content using `.html()` |
| `5-index.html`   | Create table rows with delete functionality using `.click()` and `.remove()` |
| `6-index.html`   | Create dynamic forms and add content before or after the table using `.before()` and `.prepend()` |
| `7-index.html`   | Query the Wikipedia API and display search results using `.ajax()` |
| `8-index.html`   | Add pagination to Wikipedia results using dynamic offsets |
| `9-index.html`   | Add a loading state using `.wrap()` and `.unwrap()` |
| `10-index.html`  | Fetch data from a local `json-server` endpoint |
| `11-index.html`  | Add a form and use POST requests to create new entries |
| `12-index.html`  | Add delete functionality via a DELETE request with visual row removal |

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js and npm installed
- A modern browser with JavaScript console
- Local HTTP server or Live Server (VS Code Extension)

### 📦 Install `json-server` locally

```bash
npm install json-server
