const SubmitManuscriptPage = () => {
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
          <h1 className="text-4xl text-white mb-6 py-5">
            Submit Manuscript Online
          </h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white max-w-xl mx-auto py-4">
            Shuchitabodh: An International Journal of Humanities
          </p>
        </div>
      </header>
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <section>
          <p className="text-lg text-gray-700 mb-8">
            Instructions for submitting manuscripts online to IJELS.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-xl font-medium text-gray-900 mb-4">
              Submission Guidelines
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-4 h-4 bg-black text-white flex items-center justify-center rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v12M6 12h12"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Manuscripts must be submitted in PDF format.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-4 h-4 bg-black text-white flex items-center justify-center rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v12M6 12h12"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  The manuscript should be double-spaced with 1-inch margins.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-4 h-4 bg-black text-white flex items-center justify-center rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v12M6 12h12"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Include a cover letter with the manuscript submission.
                </span>
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Submit Manuscript
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubmitManuscriptPage;
