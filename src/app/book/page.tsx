const BookPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <header
        className="text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/woman-booking-ticket-online_53876-51226.jpg?ga=GA1.1.1300420666.1732270462&semt=ais_hybrid&w=740')",
        }}
      >
        <div className="bg-black bg-opacity-60 py-20 px-4">
          <h1 className="text-4xl text-white mb-6 py-5">Book Publications</h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white max-w-xl mx-auto py-4">
            Shuchitabodh: An International Journal of Humanities
          </p>
        </div>
      </header>
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0 hover:bg-gray-800 transition duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black hover:text-gray-700 transition duration-300 ease-in-out">
                Publication Series
              </h2>
            </div>
            <div className="pl-14">
              <h3 className="text-xl font-light text-gray-900 mb-5 hover:text-gray-600 transition duration-300 ease-in-out">
                Shuchitabodh Monograph Series in Humanities
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Shuchitabodh: An International Journal of Humanities is pleased
                to announce its monograph series dedicated to publishing
                original research in humanities disciplines...
              </p>
            </div>
          </section>

          {/* About the Series */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0 hover:bg-gray-800 transition duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black hover:text-gray-700 transition duration-300 ease-in-out">
                About the Series
              </h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 mb-6">
                The Shuchitabodh Monograph Series publishes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">
                      Original research monographs
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">
                      Edited volumes on specialized topics
                    </span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">
                      Translated works of significance
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-400 mr-3">—</span>
                    <span className="text-gray-700">
                      Revised dissertations of exceptional quality
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                Our series focuses on humanities research with particular
                emphasis on:
              </p>

              <ul className="space-y-3">
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">
                    Indian languages, literatures, and cultures
                  </span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">
                    Comparative literary and cultural studies
                  </span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">
                    Historical and philosophical research
                  </span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">
                    Interdisciplinary approaches in humanities
                  </span>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-700">
                    Digital humanities innovations
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Current Titles */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0 hover:bg-gray-800 transition duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-black hover:text-gray-700 transition duration-300 ease-in-out">
                Current Titles
              </h2>
            </div>
            <div className="pl-14 space-y-8">
              <div className="p-6 border-l-2 border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
                <div className="flex items-start">
                  <span className="text-2xl font-extralight text-gray-400 mr-4">
                    1
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1 hover:text-gray-800 transition duration-300 ease-in-out">
                      Reimagining Folk Traditions in Contemporary Indian Arts
                    </h3>
                    <p className="text-gray-700 mb-1 italic">
                      Edited by Dr. Meena Sharma and Dr. Rajiv Patil
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      Published: January 2025
                    </p>
                    <p className="text-gray-700">
                      This volume explores how traditional folk forms are being
                      adapted, reimagined, and integrated into contemporary
                      artistic expressions across India. Contributors examine
                      case studies from visual arts, performance, literature,
                      and new media.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-l-2 border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
                <div className="flex items-start">
                  <span className="text-2xl font-extralight text-gray-400 mr-4">
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1 hover:text-gray-800 transition duration-300 ease-in-out">
                      Literary Landscapes: Place and Identity in Modern Indian
                      Writing
                    </h3>
                    <p className="text-gray-700 mb-1 italic">
                      By Dr. Arvind Kumar
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      Published: March 2025
                    </p>
                    <p className="text-gray-700">
                      This book examines the intersection of place and identity
                      in contemporary Indian literature. Through close readings
                      of novels, short stories, and poetry, Dr. Kumar explores
                      how authors depict the evolving concept of identity
                      through the lens of geography, culture, and history.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default BookPage;
