export default function Footer() {
  return (
    <footer className="footer-bar">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Sayyidina Anshari Ahmad</p>
        <a href="#hero" aria-label="Back to top" data-cursor>
          Back to top
        </a>
      </div>
    </footer>
  );
}
