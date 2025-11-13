const Page = () => {
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-gray-900">
      <header className="bg-neutral-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Center: Main Brand */}
          <div className="text-center">
            <div className="text-6xl font-light tracking-widest mb-2">T.I.P</div>
            <div className="text-sm tracking-[0.3em] text-yellow-500 uppercase">
              Tenacious · Individual · Performance
            </div>
            <div className="text-lg mt-3">
              Personal Training Coaching
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 text-lg mt-8">
          <a href="https://codepen.io/Garry-Tipler/pen/MYKXaqr" target="_blank" className="text-white hover:text-yellow-500">Home</a>
          <a href="https://codepen.io/Garry-Tipler/pen/RNrJWMX" target="_blank" className="text-white hover:text-yellow-500">Workouts</a>
          <a href="https://codepen.io/Garry-Tipler/pen/vELrNRq" target="_blank" className="text-white hover:text-yellow-500">Recipes</a>
          <a href="https://codepen.io/Garry-Tipler/pen/ByjVoxj" target="_blank" className="text-white hover:text-yellow-500">Lifestyle</a>
          <a href="https://codepen.io/Garry-Tipler/pen/zxrLjva" target="_blank" className="text-white hover:text-yellow-500">Philosophy</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-md p-10">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Hi, I'm Garry Tipler (Tip) — someone who finds joy in creativity, curiosity, training, and making things that matter. I spend a lot of my time exploring ideas, whether that's through photography, coding, or just getting lost in thought during a walk.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            I enjoy mixing creativity with hands-on work. Taking photos helps me slow down and see details I might otherwise miss. Coding, on the other hand, is like a puzzle I get to build from scratch — it keeps me sharp and curious.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            At my core, I value honesty, generosity, curiosity, integrity, service, love, and staying grounded. I try to live intentionally — learning from everything, being kind, and staying true to what feels right. This is a simple webpage where I can tell you a bit about myself!
          </p>

          <blockquote className="text-center italic text-xl text-gray-800 mt-8 mb-8">
            "Consistency beats intensity. Keep showing up."
          </blockquote>

          <section className="mt-12">
            <h2 className="text-2xl font-bold border-b-4 border-[#d4af37] pb-2 mb-4">Workouts</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Explore strength, conditioning, and mobility sessions designed to build consistency and balance. Whether you're at home or in the gym, the goal is steady progress — not perfection.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold border-b-4 border-[#d4af37] pb-2 mb-4">Recipes</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Simple, nourishing meals that don't require fancy ingredients. Cooking should be joyful — fuel your body, feed your curiosity, and enjoy every bite.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold border-b-4 border-[#d4af37] pb-2 mb-4">Lifestyle</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Thoughts on routines, creativity, habits, and staying grounded. Balance is more than rest days — it's about showing up for yourself daily.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold border-b-4 border-[#d4af37] pb-2 mb-4">Philosophy</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              I want a place to share ideas openly — not impress but express. My philosophy is simple. I will share more as I refine and learn along the way, but remember — simple.
            </p>
          </section>
        </div>
      </main>

      <footer className="text-center py-8 bg-neutral-800 text-white mt-12">
        <div className="text-[#d4af37] mb-2">tipler.vercel.app</div>
        <div className="text-sm">© 2025 Garry Tipler — Built with curiosity and coffee ☕</div>
      </footer>
    </div>
  );
};

export default Page;
