import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      text: "Brand new to the Linux Lite family of Applications is Lite Theme Manager. Lite Theme Manager takes the guesswork out of adding themes to your desktop, icons, and mouse cursors with an easy point-and-click solution. Thank you and credit goes to Huzaifa Qureshi for writing this application.",
      reviewer: "Jerry Bezencon, Linux Lite Creator",
      link: "https://www.linuxliteos.com/forums/showthread.php?tid=9240&pid=61334#pid61334",
    },
    {
      text: "Linux Lite is leading the way in which A.I. is complementing the Support portion of our operating system. We're extremely happy with the way that it's turned out and a huge thank you again to Huzaifa Qureshi for his efforts on this.",
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
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl my-11 font-bold text-center">What Others Say</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 flex flex-col justify-between"
            >
                <div>
                    <FaQuoteLeft className="text-indigo-600 text-2xl inline-block" />
                    <div className="flex items-start mb-4">
                        <p className="text-gray-700">{review.text}</p>
                    </div>
                    <div className="text-right">
                        <FaQuoteRight className="text-indigo-600 text-2xl inline-block" />
                    </div>
                </div>

                <div>
                    <p className="text-sm text-gray-500 italic mt-4">
                        - {review.reviewer}
                    </p>
                    <a
                        href={review.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-indigo-600 hover:underline block text-sm"
                    >
                        Read full review
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
