const AuthorGuidelinesPage = () => {
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
          <h1 className="text-4xl  text-white mb-6 py-5">Author Guidelines</h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white max-w-xl mx-auto py-4">
            Guidelines for submitting manuscripts to Shuchitabodh: an
            International Research Journal of Humanities (SIRJH)
          </p>
        </div>
      </header>
      <div className="container mx-auto py-10">
        <div className="space-y-16">
          {/* General Requirements */}
          <section>
            <div className="flex items-center mb-8 mt-10">
              <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center mr-4 flex-shrink-0">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-extralight text-gray-800">
                General Requirements
              </h2>
            </div>

            {/* Cards for Mission, Vision, and Values */}
            <div className="flex space-x-8 mt-8">
              <div className="w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed">
                  The minimum standard requirements of Shuchitabodh: an
                  International Research Journal of Humanities (SIRJH) must be
                  Written in English, Hindi or Marathi.
                </p>
              </div>

              <div className="w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed">
                  The length of the submitted paper is at least 4 pages and no
                  more than 15 pages. Editors will evaluate if an article needs
                  more than 15 pages.
                </p>
              </div>

              <div className="w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed">
                  Use of a tool such as Zotero, Mendeley, or EndNote for
                  reference management and formatting, and choose APA Style.
                </p>
              </div>
              <div className="w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed">
                  Make sure that your paper is prepared using the Shuchitabodh
                  paper template.
                </p>
                <a
                  href="#"
                  className="px-6 py-3 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Paper Template
                </a>
              </div>
            </div>
          </section>
          <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              {/* Heading */}
              <div className="flex items-center mb-10">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg mr-4 flex-shrink-0 transition-transform hover:scale-110 duration-300">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Structure of the Manuscript
                </h2>
              </div>

              {/* Intro */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 pl-2">
                The manuscript must be qualitative and suggested to follow the
                structure:
              </p>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Title",
                    desc: "The title of the paper should describe research aims, method/model, and objective, without Acronym or abbreviation.",
                  },
                  {
                    title: "Abstract",
                    desc: "The Abstract has a maximum 3000 WORDS; No citation; State in the abstract a primary goal, research design, methodology, main outcomes and results, and the conclusions.",
                  },
                  {
                    title: "Keywords",
                    desc: "A minimum 5 keywords for paper required.",
                  },
                  {
                    title: "References",
                    desc: "Expect a minimum of 10 references. In APA style, adhere to Initiative for Open Citations (I4OC). As Granthaalayah Publications and Printers is Participating in Initiative for Open Citations (I4OC).",
                  },
                  {
                    title: "Innovation",
                    desc: "We encourage innovative approaches to humanities research, including interdisciplinary methods and digital humanities techniques.",
                  },
                  {
                    desc: "For Hindi and Marathi: Submit in Kruti Dev 10 with font size 14 point (Include in English: Title, Abstract, Keywords, References)",
                  },
                ].map((value, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-xl border-l-4 border-blue-600 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                  >
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-10 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              {/* Heading */}
              <div className="flex items-center mb-10">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg mr-4 flex-shrink-0 transition-transform hover:scale-110 duration-300">
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
                <h2 className="text-3xl font-semibold text-gray-800">
                  Publication Information
                </h2>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                License and Copyright Agreement
              </h2>

              <h3 className="text-1xl font-semibold text-gray-400">
                In submitting the manuscript to the journal, the authors certify
                that:
              </h3>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    content:
                      "They are authorized by their co-authors to enter into these arrangements.",
                  },
                  {
                    content:
                      "The submitted papers should not be published formally.",
                  },
                  {
                    content:
                      "The article should not under consideration for publication elsewhere.",
                  },

                  {
                    content:
                      "That its release has been approved by all the author(s) and by the responsible authorities – tacitly or explicitly – of the institutes where the work has been carried out.",
                  },
                  {
                    content:
                      "They secure the right to reproduce any material that has already been published or copyrighted elsewhere.",
                  },

                  {
                    title: "Copyright",
                    content:
                      "Authors who publish with Shuchitabodh: an International Research Journal of Humanities (SIRJH) agree to terms and conditions.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Copyright Notice */}
          <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg mr-4 flex-shrink-0 transition-transform hover:scale-110 duration-300">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Manuscript Processing Charges
                </h2>
              </div>

              {/* Description */}
              <div className="pl-2">
                <p className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all duration-300">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Article Processing Charge
                    </h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center">
                        <span className="bg-gray-200 px-3 py-1 text-sm mr-2">
                          NON-INDIAN AUTHORS
                        </span>
                        <span className="text-xl font-light">$55.00 USD</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-gray-200 px-3 py-1 text-sm mr-2">
                          INDIAN AUTHORS
                        </span>
                        <span className="text-xl font-light">₹1,500 INR</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-6">
                    If this paper is accepted for publication, you will be asked
                    to pay an Article processing Fee to cover publications
                    costs.
                  </p>
                </p>
              </div>
            </div>
          </section>

          {/* Processing Charges */}

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <a
              href="/submit"
              className="px-12 py-4 bg-primary text-white text-sm hover:bg-gray-800 transition-colors inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              Submit Manuscript
            </a>
          </div>
        </div>

        <footer className="mt-20 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            For queries regarding submissions, please contact us at{" "}
            <a
              href="mailto:journal@example.com"
              className="text-gray-800 hover:underline"
            >
              journal@example.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AuthorGuidelinesPage;
