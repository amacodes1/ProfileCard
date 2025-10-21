document.getElementById("layout-header").innerHTML = `
<header class="navbar" data-testid="test-navbar">
  <div class="nav-container">
    <h1 class="logo"><a href="index.html">AmaCodes</a></h1>
    <nav class="nav-links" id="nav-links" data-testid="test-nav-links">
      <a href="index.html" data-testid="test-link-home">Home</a>
      <a href="about.html" data-testid="test-link-about">About Me</a>
      <a href="contact.html" data-testid="test-link-contact">Contact Me</a>

      <div class="mobile-toggle" data-testid="test-mobile-toggle">
        <input type="checkbox" id="theme-toggle-mobile" />
        <label for="theme-toggle-mobile" class="toggle-label">
          <div class="ball"></div>
        </label>
      </div>
    </nav>

    <div class="navbar-right" data-testid="test-navbar-right">
      <button class="hamburger" id="hamburger" aria-label="Menu" data-testid="test-hamburger">
        <span></span><span></span><span></span>
      </button>

      <div class="toggle-container desktop-toggle" data-testid="test-theme-toggle-desktop">
        <input type="checkbox" id="theme-toggle" />
        <label for="theme-toggle" class="toggle-label">
          <div class="ball"></div>
        </label>
      </div>
    </div>
  </div>
</header>
`;

document.getElementById("layout-footer").innerHTML = `
<footer class="footer" data-testid="test-footer">
  <p>&copy; ${new Date().getFullYear()} AmaCodes. All rights reserved.</p>
</footer>
`;
