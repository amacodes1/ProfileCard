# Profile Card

A clean, accessible, and responsive **Profile Card Web App** built with **HTML, CSS, and JavaScript**.  
It includes a **theme toggle**, **live timestamp**, and **data-testid attributes** for testing.

---

## 🌐 Live Demo

🔗 **Live URL:** (https://mercy-ezihe-profile-card.vercel.app/)
💻 **GitHub Repo:** (https://github.com/amacodes1/ProfileCard.git)

---

## Preview

| Light Mode | Dark Mode |

> On small screens, the card stacks vertically.  
> On wider screens, the avatar is positioned on the left and text on the right for a balanced layout.

---

## Features

- **Responsive Design**  
  Automatically adapts layout:
  - **Mobile / small screens** → vertical stack (avatar on top).  
  - **Desktop / larger screens** → side-by-side (avatar left, text right).

- **Theme Toggle (Light / Dark)**  
  - Persisted in `localStorage`.  
  - Keyboard accessible with clear focus outlines.

- **Live Time Display**  
  - Shows `Date.now()` in milliseconds.  
  - Updates every second.

- **Accessible Structure**  
  - Semantic HTML tags (`<article>`, `<header>`, `<nav>`, `<figure>`, `<section>`).  
  - Uses `aria-live`, `aria-labelledby`, and hidden text for screen readers.  
  - Keyboard focus states for all interactive elements.

- **Testing Support**  
  Every major element has a unique `data-testid` attribute.

---

## File Structure

<pre> project-folder/
│
├── index.html
├── about.html
├── contact.html
│
├── style.css
├── script.js
├── layout.js
│
└── images/ </pre>

---

## Key Accessibility & Semantics

- `aria-labelledby` used for heading relationships.  
- `aria-live="polite"` for updating time without disrupting assistive tech.  
- `<nav>` and `<ul>` structures for social links.  
- Focus outlines visible in both light and dark themes.

---

## Data Test IDs

| Element | Data Test ID |
|----------|---------------|
| Profile Card | `test-profile-card` |
| Name | `test-user-name` |
| Bio | `test-user-bio` |
| Time | `test-user-time` |
| Avatar | `test-user-avatar` |
| Social Links Wrapper | `test-user-social-links` |
| LinkedIn Link | `test-user-social-linkedin` |
| GitHub Link | `test-user-social-github` |
| Hobbies List | `test-user-hobbies` |
| Dislikes List | `test-user-dislikes` |
|----------|---------------|
| Contact Page | `test-contact-page` |
| Full Name | `test-contact-name` |
| Email | `test-contact-email` |
| Subject | `test-contact-subject` |
| Message | `test-contact-message` |
| Submit Button | `test-contact-submit` |
| Success Message | `test-contact-success` |
| Error Messages | `test-contact-error-name` `test-contact-error-email` `test-contact-error-subject` `test-contact-error-message` |
|----------|---------------|
| About Page | `test-about-page` |
| Bio | `test-about-bio` |
| Goals | `test-about-goals` |
| Confidence | `test-about-confidence` |
| Future Notes | `test-about-future-note` |
| Extra | `test-about-extra`|

---

## How It Works

### 1. Theme Toggle
```js
// Saves theme in localStorage
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

## Technologies Used

HTML5 – Semantic structure
CSS3 – Flexbox, media queries, transitions
Vanilla JavaScript – Theme toggle, live timestamp
Accessibility & A11y Best Practices


## Quick Start

Clone this repository
git clone https://github.com/amacodes1/ProfileCard.git

Open in VS Code or your editor of choice.
Run live server or open index.html directly in your browser.
Toggle themes, inspect responsiveness, and enjoy!
