"use client";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
      <header className="text-center py-12 bg-black text-white">
        <div className="text-4xl mb-4">
          <span className="font-light text-gray-300">Tenacious</span>.
          <span className="font-medium text-gray-100">Individual</span>.
          <span className="font-bold text-yellow-400">Performance</span>
        </div>
        <nav className="flex justify-center gap-6 text-lg mb-4">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#workouts" className="hover:text-yellow-400">Workouts</a>
          <a href="#recipes" className="hover:text-yellow-400">Recipes</a>
          <a href="#lifestyle" className="hover:text-yellow-400">Lifestyle</a>
          <a href="#philosophy" className="hover:text-yellow-400">Philosophy</a>
        </nav>
        <p className="text-xl mt-2">Hi, I'm Garry Tipler (Tip) — a curious creator & thinker</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <section id="home" className="text-center">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-lg">
            I’m someone who finds joy in creativity, curiosity, training, and making things that matter.
            I spend time exploring ideas through photography, coding, and creative projects.
          </p>
          <p className="text-lg mt-4">
            At my core, I value honesty, generosity, curiosity, integrity, service, love, and staying grounded.
            I try to live intentionally, learning from everything and staying true to what feels right.
          </p>
          <img
            src="https://cdn-icons-png.freepik.com/256/16455/16455167.png"
            alt="Garry Tipler avatar"
            className="mx-auto mt-6 w-32 rounded-full hover:scale-105 transition-transform"
          />
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Hobbies</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-lg">
            <li>Cooking</li>
            <li>Gaming</li>
            <li>Traveling</li>
            <li>Reading</li>
            <li>Training</li>
          </ul>
          <p className="mt-4"><strong>Fun fact:</strong> I’m really goofy most days. I enjoy laughing at myself, problem-solving, and challenges.</p>
          <button
            id="smileBtn"
            className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition"
            onClick={() => alert("Smile!!! 😄")}
          >
            Click Me!
          </button>
        </section>

        <section id="workouts" className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Workouts</h2>
          <p>Explore strength, conditioning, and mobility sessions designed to build consistency and balance. Focus on steady progress — not perfection.</p>
        </section>

        <section id="recipes" className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Recipes</h2>
          <p>Simple, nourishing meals that don’t require fancy ingredients. Fuel your body, feed your curiosity, and enjoy every bite.</p>
        </section>

        <section id="lifestyle" className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Lifestyle</h2>
          <p>Thoughts on routines, creativity, habits, and staying grounded. Balance is more than rest days — it’s about showing up for yourself daily.</p>
        </section>

        <section id="philosophy" className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Philosophy</h2>
          <p>I want a place to share ideas openly — not to impress but to express. Simple, intentional, and authentic.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>Built with curiosity and coffee ☕ using Next.js & Tailwind CSS</p>
        <p>© 2025 Garry Tipler</p>
      </footer>

    </div>
  );
};

export default Page;
