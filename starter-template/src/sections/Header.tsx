export const Header = () => {
  return <div className="flex items-center justify-center fixed z-10 top-3 w-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#about" className="nav-item">Home</a>
      <a href="#projects" className="nav-item">Projects</a>
      <a href="#contact" className="nav-item">About</a>
      <a href="#resume" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>;
};
