const ConferencePage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-primary mb-4">Conferences</h1>
      <p className="text-muted-foreground mb-8">
        Information about conferences associated with IJELS.
      </p>

      <div className="prose prose-slate max-w-none text-muted-foreground">
        <div className="mb-8">
          <p className="mb-4">
            We invite you for the publication of the national and international
            conference papers as a special issue or regular issue on the
            journal. We hope, it will be an appreciable step in promoting the
            research activities and scientific information interchange between
            researchers, developers, engineers, students, academicians and
            practitioners working in and around the world.
          </p>
          <p>
            The journal has been an integral part of the publication of
            conference proceedings/articles. The motivation of this is to work
            together for publication and share the work at the international
            platform.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Conference Publication Criteria
          </h2>
          <p className="mb-4">
            Conference papers will be published online as a special issue /
            regular issue based on the following criteria:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              On prior permission, you can share the details of the journal in
              the conference brochure and also conference link on the journal
              online page.
            </li>
            <li>
              All published papers will get unique CrossRef DOI (including DOI
              of special issue).
            </li>
            <li>
              Before online publication authors need to submit the copyright
              form, which will be provided by the Journal committee.
            </li>
            <li>
              You can provide details of editorial board members or reviewers of
              the conference in case of the special issue.
            </li>
            <li>
              We will provide the softcopy as well hard copy of complete
              proceeding and also certificates of publication to all the
              authors.
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 mt-10">
          <h2 className="text-xl font-bold text-primary mb-3">Contact Us</h2>
          <p>
            For further discussion and for any query write to us on{" "}
            <a
              href="mailto:infogain.ijels@gmail.com"
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              infogain.ijels@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConferencePage;
