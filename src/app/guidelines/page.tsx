const PeerReviewPage = () => {
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
          <h1 className="text-4xl text-white mb-6 py-5">Review Guidelines</h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white max-w-xl mx-auto py-4">
            Guidelines for reviewers of Shuchitabodh: An International Journal
            of Humanities
          </p>
        </div>
      </header>
      <div className="container mx-auto py-16 px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {/* Peer Review Philosophy Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 transition-all hover:text-blue-500">
                Peer Review Philosophy
              </h2>
              <p className="text-gray-700">
                Shuchitabodh: An International Journal of Humanities is
                committed to a rigorous, constructive, and ethical peer review
                process. As a reviewer, your expertise and critical assessment
                help ensure the quality and integrity of scholarly publications
                in the humanities field.
              </p>
            </section>

            {/* Reviewer Responsibilities Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 transition-all hover:text-blue-500">
                Reviewer Responsibilities
              </h2>
              <p className="text-gray-700 mb-4">
                When accepting to review for Shuchitabodh, reviewers agree to:
              </p>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>
                  Provide thorough, constructive, and unbiased evaluations
                </li>
                <li>
                  Complete reviews within the agreed timeframe (typically 3-4
                  weeks)
                </li>
                <li>Maintain confidentiality regarding manuscript content</li>
                <li>Declare any potential conflicts of interest</li>
                <li>Provide feedback that helps authors improve their work</li>
                <li>Support the journal's commitment to academic excellence</li>
              </ul>
            </section>
          </div>

          <div className="bg-gray-50 p-6 h-fit shadow-lg rounded-lg transition-all hover:shadow-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Review Process
            </h3>
            <ol className="text-gray-700 space-y-3 list-decimal pl-5">
              <li>
                <span className="font-medium text-blue-500">Invitation:</span>{" "}
                Email invitation to review a manuscript
              </li>
              <li>
                <span className="font-medium text-blue-500">Response:</span>{" "}
                Accept or decline within 5 days
              </li>
              <li>
                <span className="font-medium text-blue-500">Access:</span>{" "}
                Receive the anonymized manuscript
              </li>
              <li>
                <span className="font-medium text-blue-500">Evaluation:</span>{" "}
                Complete your review
              </li>
              <li>
                <span className="font-medium text-blue-500">Submission:</span>{" "}
                Submit through the online system
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Review Criteria Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-16 py-8 px-4 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-white text-center">
          Review Criteria
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Originality and Significance
            </h3>
            <ul className="text-gray-700 space-y-1 list-disc pl-5">
              <li>
                Does the manuscript present original research or novel insights?
              </li>
              <li>Does it make a meaningful contribution to the field?</li>
              <li>
                Is the topic significant and relevant to the journal's scope?
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Theoretical Framework
            </h3>
            <ul className="text-gray-700 space-y-1 list-disc pl-5">
              <li>
                Is the theoretical framework appropriate and clearly
                articulated?
              </li>
              <li>
                Does the author demonstrate knowledge of relevant literature?
              </li>
              <li>Are key concepts defined and explained adequately?</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Methodology
            </h3>
            <ul className="text-gray-700 space-y-1 list-disc pl-5">
              <li>Is the methodology clearly described and appropriate?</li>
              <li>
                For empirical studies: Are data collection and analysis methods
                sound?
              </li>
              <li>
                For theoretical works: Is the argumentation logical and
                well-structured?
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Analysis and Interpretation
            </h3>
            <ul className="text-gray-700 space-y-1 list-disc pl-5">
              <li>Is the analysis thorough and well-reasoned?</li>
              <li>Are interpretations supported by evidence?</li>
              <li>Does the author acknowledge limitations appropriately?</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Structure and Clarity
            </h3>
            <ul className="text-gray-700 space-y-1 list-disc pl-5">
              <li>
                Is the manuscript well-organized with a clear logical flow?
              </li>
              <li>Is the writing clear, concise, and accessible?</li>
              <li>Are the abstract, introduction, and conclusion effective?</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              References and Citations
            </h3>
            <ul className="text-gray-700 space-y-1 list-disc pl-5">
              <li>
                Does the manuscript engage adequately with relevant literature?
              </li>
              <li>Are citations accurate and complete?</li>
              <li>Does the reference list follow APA style?</li>
              <li>Does it meet the minimum requirement of 10 references?</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-16 px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Review Format Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Review Format
            </h2>
            <p className="text-gray-700 mb-4">Your review should include:</p>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>
                <span className="font-medium">General Comments:</span> Overall
                assessment of strengths and weaknesses
              </li>
              <li>
                <span className="font-medium">Specific Comments:</span> Detailed
                feedback by section
              </li>
              <li>
                <span className="font-medium">Recommendation:</span> Accept,
                minor revisions, major revisions, or reject
              </li>
            </ul>
          </section>
          {/* Ethical Considerations Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Ethical Considerations
            </h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>
                {" "}
                Ensure that reviews are fair and unbiased, based on the quality
                of the manuscript.{" "}
              </li>{" "}
              <li>
                {" "}
                Respect confidentiality, refraining from sharing or discussing
                the manuscript with others.{" "}
              </li>{" "}
              <li>
                {" "}
                Disclose any conflicts of interest before agreeing to review.{" "}
              </li>{" "}
            </ul>{" "}
          </section>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default PeerReviewPage;
