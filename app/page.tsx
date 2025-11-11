"use client"; // Needed for interactivity

const Page = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{ backgroundColor: '#f5f5dc', fontFamily: '"Barlow Condensed", sans-serif' }}>

      {/* Header */}
      <header className="bg-black text-white shadow-md py-8 px-4 flex flex-col items-center">
        <div className="logo text-4xl mb-6" style={{ fontFamily: '"Oswald", sans-serif', letterSpacing: '1px' }}>
          <span className="font-light text-gray-400">Tenacious.</span>
          <span className="font-medium text-white">Individual.</span>
          <span className="font-bold" style={{ color: '#ffb703' }}>Performance</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-8 text-lg">
          <a href="https://codepen.io/Garry-Tipler/pen/MYKXaqr" target="_blank" className="text-white hover:text-yellow-400 transition-colors font-medium">Home</a>
          <a href="https://codepen.io/Garry-Tipler/pen/RNrJWMX" target="_blank" className="text-white hover:text-yellow-400 transition-colors font-medium">Workouts</a>
          <a href="https://codepen.io/Garry-Tipler/pen/vELrNRq" target="_blank" className="text-white hover:text-yellow-400 transition-colors font-medium">Recipes</a>
          <a href="https://codepen.io/Garry-Tipler/pen/ByjVoxj" target="_blank" className="text-white hover:text-yellow-400 transition-colors font-medium">Lifestyle</a>
          <a href="https://codepen.io/Garry-Tipler/pen/zxrLjva" target="_blank" className="text-white hover:text-yellow-400 transition-colors font-medium">Philosophy</a>
        </nav>
      </header>

      {/* Main content */}
      <main className="content max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-md p-10 space-y-6">

          <p className="text-lg leading-relaxed text-gray-700">
            Hi, I'm Garry Tipler (Tip) — someone who finds joy in creativity, curiosity, training, and making things that matter.
            I spend a lot of my time exploring ideas, whether that's through photography, coding, or just getting lost in thought during a walk.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            I love hobbies that mix creativity with hands-on work. Taking photos helps me slow down and see details I might otherwise miss.
            Coding, on the other hand, is like a puzzle I get to build from scratch.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            At my core, I value honesty, generosity, curiosity, integrity, service, love, and staying grounded.
            I try to live intentionally — learning from everything, being kind, and staying true to what feels right.
            This is a simple webpage where I can tell you a bit about myself!
          </p>

          <img
            src="https://cdn-icons-png.freepik.com/256/16455/16455167.png"
            alt="Garry Tipler avatar icon"
            className="mx-auto w-32 rounded-full hover:scale-105 transition-transform my-8"
          />

          <h2 className="text-2xl font-bold border-b-4 border-yellow-400 pb-2 mb-4 mt-8" style={{ fontFamily: '"Oswald", sans-serif' }}>
            Hobbies:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Cooking</li>
            <li>Gaming</li>
            <li>Traveling</li>
            <li>Reading</li>
            <li>Training</li>
          </ul>

          <p className="text-lg text-gray-700"><strong>Fun fact:</strong> I'm really goofy most days. I enjoy laughing at myself, problem-solving, and taking on challenges.</p>

          <button
            id="smileBtn"
            className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-orange-500 transition-all hover:-translate-y-1 shadow-md"
            style={{ fontFamily: '"Oswald", sans-serif', letterSpacing: '0.5px' }}
            onClick={() => alert("Smile!!! 😄")}
          >
            Click Me!
          </button>

          {/* Sections */}
          <section id="workouts" className="mt-12">
            <h2 className="text-2xl font-bold border-b-4 border-yellow-400 pb-2 mb-4" style={{ fontFamily: '"Oswald", sans-serif' }}>
              Workouts
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Explore strength, conditioning, and mobility sessions designed to build consistency and balance.
              Whether you're at home or in the gym, the goal is steady progress — not perfection.
            </p>
          </section>

          <section id="recipes" className="mt-12">
            <h2 className="text-2xl font-bold border-b-4 border-yellow-400 pb-2 mb-4" style={{ fontFamily: '"Oswald", sans-serif' }}>
              Recipes
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Simple, nourishing meals that don't require fancy ingredients.
              Cooking should be joyful — fuel your body, feed your curiosity, and enjoy every bite.
            </p>
          </section>

          <section id="lifestyle" className="mt-12">
            <h2 className="text-2xl font-bold border-b-4 border-yellow-400 pb-2 mb-4" style={{ fontFamily: '"Oswald", sans-serif' }}>
              Lifestyle
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Thoughts on routines, creativity, habits, and staying grounded.
              Balance is more than rest days — it's about showing up for yourself daily.
            </p>
          </section>

          <section id="philosophy" className="mt-12">
            <h2 className="text-2xl font-bold border-b-4 border-yellow-400 pb-2 mb-4" style={{ fontFamily: '"Oswald", sans-serif' }}>
              Philosophy
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I want a place to share ideas openly- not impress but express.
              My philosophy is simple. I will share more as I refine and learn more along the way, But remember Simple.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-white mt-12">
        © 2025 Garry Tipler — Built with curiosity and coffee ☕
      </footer>

    </div>
  );
};

export default Page;
