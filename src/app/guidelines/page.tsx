const PeerReviewPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-16 px-4 max-w-5xl">
        <header className="mb-16 text-center">
          <h1 className="text-3xl font-light tracking-tight text-black mb-4">Review Guidelines</h1>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guidelines for reviewers of Shuchitabodh: An International Journal of Humanities
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {/* Peer Review Philosophy Section */}
            <section className="mb-10">
              <h2 className="text-xl font-light text-black mb-4">
                Peer Review Philosophy
              </h2>
              <p className="text-gray-700">
                Shuchitabodh: An International Journal of Humanities is committed to a rigorous, constructive, and ethical peer review process. As a reviewer, your expertise and critical assessment help ensure the quality and integrity of scholarly publications in the humanities field.
              </p>
            </section>

            {/* Reviewer Responsibilities Section */}
            <section className="mb-10">
              <h2 className="text-xl font-light text-black mb-4">
                Reviewer Responsibilities
              </h2>
              <p className="text-gray-700 mb-4">
                When accepting to review for Shuchitabodh, reviewers agree to:
              </p>
              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Provide thorough, constructive, and unbiased evaluations</li>
                <li>Complete reviews within the agreed timeframe (typically 3-4 weeks)</li>
                <li>Maintain confidentiality regarding manuscript content</li>
                <li>Declare any potential conflicts of interest</li>
                <li>Provide feedback that helps authors improve their work</li>
                <li>Support the journal's commitment to academic excellence</li>
              </ul>
            </section>
          </div>

          <div className="bg-gray-50 p-6 h-fit">
            <h3 className="text-lg font-normal text-black mb-4 pb-2 border-b border-gray-200">
              Review Process
            </h3>
            <ol className="text-gray-700 space-y-3 list-decimal pl-5">
              <li><span className="font-medium">Invitation:</span> Email invitation to review a manuscript</li>
              <li><span className="font-medium">Response:</span> Accept or decline within 5 days</li>
              <li><span className="font-medium">Access:</span> Receive the anonymized manuscript</li>
              <li><span className="font-medium">Evaluation:</span> Complete your review</li>
              <li><span className="font-medium">Submission:</span> Submit through the online system</li>
            </ol>
          </div>
        </div>

        {/* Review Criteria Section */}
        <section className="mb-16">
          <h2 className="text-xl font-light text-black mb-6 pb-2 border-b border-gray-100">
            Review Criteria
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-100">
              <h3 className="text-lg font-normal text-black mb-3">Originality and Significance</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li>Does the manuscript present original research or novel insights?</li>
                <li>Does it make a meaningful contribution to the field?</li>
                <li>Is the topic significant and relevant to the journal's scope?</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white border border-gray-100">
              <h3 className="text-lg font-normal text-black mb-3">Theoretical Framework</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li>Is the theoretical framework appropriate and clearly articulated?</li>
                <li>Does the author demonstrate knowledge of relevant literature?</li>
                <li>Are key concepts defined and explained adequately?</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white border border-gray-100">
              <h3 className="text-lg font-normal text-black mb-3">Methodology</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li>Is the methodology clearly described and appropriate?</li>
                <li>For empirical studies: Are data collection and analysis methods sound?</li>
                <li>For theoretical works: Is the argumentation logical and well-structured?</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white border border-gray-100">
              <h3 className="text-lg font-normal text-black mb-3">Analysis and Interpretation</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li>Is the analysis thorough and well-reasoned?</li>
                <li>Are interpretations supported by evidence?</li>
                <li>Does the author acknowledge limitations appropriately?</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white border border-gray-100">
              <h3 className="text-lg font-normal text-black mb-3">Structure and Clarity</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li>Is the manuscript well-organized with a clear logical flow?</li>
                <li>Is the writing clear, concise, and accessible?</li>
                <li>Are the abstract, introduction, and conclusion effective?</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white border border-gray-100">
              <h3 className="text-lg font-normal text-black mb-3">References and Citations</h3>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                <li>Does the manuscript engage adequately with relevant literature?</li>
                <li>Are citations accurate and complete?</li>
                <li>Does the reference list follow APA style?</li>
                <li>Does it meet the minimum requirement of 10 references?</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Review Format Section */}
          <section>
            <h2 className="text-xl font-light text-black mb-4 pb-2 border-b border-gray-100">
              Review Format
            </h2>
            <p className="text-gray-700 mb-4">
              Your review should include:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li><span className="font-medium">General Comments:</span> Overall assessment of strengths and weaknesses</li>
              <li><span className="font-medium">Specific Comments:</span> Detailed feedback by section</li>
              <li><span className="font-medium">Recommendation:</span> Accept, minor revisions, major revisions, or reject</li>
            </ul>
          </section>

          {/* Ethical Considerations Section */}
          <section>
            <h2 className="text-xl font-light text-black mb-4 pb-2 border-b border-gray-100">
              Ethical Considerations
            </h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li><span className="font-medium">Confidentiality:</span> Do not share or discuss the manuscript</li>
              <li><span className="font-medium">Conflicts of Interest:</span> Decline if a conflict exists</li>
              <li><span className="font-medium">Objectivity:</span> Evaluate based on scholarly merit</li>
              <li><span className="font-medium">Constructiveness:</span> Phrase criticism respectfully</li>
              <li><span className="font-medium">Integrity:</span> Alert editors to any ethical concerns</li>
            </ul>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Recommendation Options Section */}
          <section>
            <h2 className="text-xl font-light text-black mb-4 pb-2 border-b border-gray-100">
              Recommendation Options
            </h2>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-800">Accept</p>
                <p className="text-gray-700">The manuscript can be published with minimal or no changes</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Minor Revisions</p>
                <p className="text-gray-700">The manuscript requires small changes that can be completed quickly</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Major Revisions</p>
                <p className="text-gray-700">The manuscript has merit but requires substantial changes</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Reject</p>
                <p className="text-gray-700">The manuscript does not meet standards or falls outside scope</p>
              </div>
            </div>
          </section>

          {/* Language Considerations Section */}
          <section>
            <h2 className="text-xl font-light text-black mb-4 pb-2 border-b border-gray-100">
              Language Considerations
            </h2>
            <p className="text-gray-700 mb-4">
              For manuscripts in Hindi or Marathi:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>Evaluate the content, organization, and scholarly merit</li>
              <li>Comment on language clarity and effectiveness</li>
              <li>Verify English components (title, abstract, keywords, references)</li>
            </ul>

            <h2 className="text-xl font-light text-black mb-4 mt-8 pb-2 border-b border-gray-100">
              Reviewer Recognition
            </h2>
            <p className="text-gray-700 mb-4">
              Shuchitabodh acknowledges reviewers through:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>Annual acknowledgment in the journal</li>
              <li>Certificates of recognition upon request</li>
              <li>Consideration for invitation to the editorial board</li>
            </ul>
          </section>
        </div>

        {/* Join as Reviewer Section */}
        <div className="p-8 border border-gray-100 text-center">
          <h2 className="text-xl font-light text-black mb-4">Join us as a Reviewer</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Thank you for your valuable contribution to the peer review process. Your expertise and dedication help maintain the quality and integrity of scholarly publications in the humanities.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default PeerReviewPage;