import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import MangaText from "../../Blog/MangaText";

const Reviews = () => {
  const reviews = [
    {
      text: "Brand new to the Linux Lite family of Applications is Lite Theme Manager. Lite Theme Manager takes the guesswork out of adding themes to your desktop, icons, and mouse cursors with an easy point-and-click solution. Thank you and credit goes to Huzaifa Qureshi for writing this application.",
      reviewer: "Jerry Bezencon, Linux Lite Creator",
      link: "https://www.linuxliteos.com/forums/showthread.php?tid=9240&pid=61334#pid61334",
    },
    {
      text: "Huge thank you to Huzaifa for fixing this bug, took us a long time to work through it. Thanks also to stevef for reporting it.",
      reviewer: "Jerry Bezencon, Linux Lite Creator",
      link: "https://www.linuxliteos.com/forums/showthread.php?tid=9240&pid=61395#pid61395",
    },
  ];

  return (
    <section className="py-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="mb-2">
            <MangaText text="「評価」" translation="Hyōka (Reviews &amp; Feedback)" className="text-xl md:text-2xl text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tight">
            What Others Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1E112C] brutalist-border brutalist-shadow p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200"
            >
              <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

              <div className="relative z-10">
                <FaQuoteLeft className="text-red-600 dark:text-yellow-400 text-3xl mb-4" />
                <p className="text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="text-right mt-2">
                  <FaQuoteRight className="text-red-600 dark:text-yellow-400 text-3xl inline-block" />
                </div>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t-2 border-dashed border-black dark:border-white/20">
                <p className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300">
                  — {review.reviewer}
                </p>
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-yellow-400 text-black font-bold font-mono uppercase text-xs px-3 py-1.5 brutalist-border border-black brutalist-shadow-sm hover:bg-yellow-300 transition-colors"
                >
                  Read full review →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
