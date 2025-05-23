const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm tracking-wide font-serif">
        © {new Date().getFullYear()} Muhammad Dayan. All rights reserved.
      </div>
    </footer>
  );
};

export { Footer };
