const EditorialPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-primary mb-4">Editorial Board</h1>
      <p className="text-muted-foreground mb-8">
        Meet the editorial board of IJELS.
      </p>

      {/* Editor in Chief Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b">
          Editor in Chief
        </h2>
        <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Dr. Manoj Kumar</h3>
          <p className="text-muted-foreground">
            Ph.D. M.Phil., MA (English), PGDTE
          </p>
          <p className="text-muted-foreground">
            Assistant Professor, English Department, Amity University, Jaipur,
            India
          </p>
          <p className="mt-2">
            <span className="font-medium">Area of Interest:</span> Folklore,
            Indian Writing in English
          </p>
          <p className="mt-2">
            <a
              href="mailto:infogain.ijels@gmail.com"
              className="text-blue-600 hover:underline"
            >
              infogain.ijels@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Associate Editors Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b">
          Associate Editors
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Dr. Osama Mahmoud Abu Baha
            </h3>
            <p className="text-muted-foreground">
              Ph.D. English Language Studies
            </p>
            <p className="text-muted-foreground">
              General English Lecturer, (Area Education Officer. United Nations)
              University College of Educational Sciences -UNRWA, Palestine
            </p>
            <p className="mt-2">
              <span className="font-medium">Area of Interest:</span> Literature,
              Applied Linguistics, e-learning, management and leadership
            </p>
            <p className="mt-2">
              <a
                href="mailto:uabubaha@yahoo.com"
                className="text-blue-600 hover:underline"
              >
                uabubaha@yahoo.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Advisory Board Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b">
          Editorial Advisory Board
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Prince Dawar</h3>
            <p className="text-muted-foreground">
              Associate Professor, English Department, Poornima College of
              Engineering, Jaipur, India
            </p>
            <p className="mt-2">
              <a
                href="mailto:dawarprince83@gmail.com"
                className="text-blue-600 hover:underline"
              >
                dawarprince83@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Dr. H.Saremi</h3>
            <p className="text-muted-foreground">
              Vice- chancellor For Adminstrative & Finance Affairs, Islamic Azad
              university of Iran, Quchan branch, Quchan-Iran
            </p>
            <p className="mt-2">
              <a
                href="mailto:hadi_sarem@yahoo.com"
                className="text-blue-600 hover:underline"
              >
                hadi_sarem@yahoo.com
              </a>
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Dr. D.G. Hanumanthappa</h3>
            <p className="text-muted-foreground">Ph.D, Political Science</p>
            <p className="text-muted-foreground">
              Assistant Professor, Dept. of PG Studies & Research in Political
              Science, Rani Channamma University, Belagavi, Karnataka State,
              India
            </p>
            <p className="mt-2">
              <span className="font-medium">Area of Interest:</span> Political
              science
            </p>
            <p className="mt-2">
              <a
                href="mailto:hanumanthappa.dg@gmail.com"
                className="text-blue-600 hover:underline"
              >
                hanumanthappa.dg@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Dr. Mohammad Shaukat Ansari
            </h3>
            <p className="text-muted-foreground">
              M.A. (English), Ph.D. (English)
            </p>
            <p className="text-muted-foreground">
              Associate Professor of English, MLSM College,(LN Mithila
              University) Darbhanga, Bihar, India
            </p>
            <p className="text-muted-foreground">
              LN Mithila University Senator & Academic Council Member
            </p>
            <p className="mt-2">
              <span className="font-medium">Area of Interest:</span> Literature,
              ELT, ESP
            </p>
            <p className="mt-2">
              <a
                href="mailto:shaukata12@yahoo.com"
                className="text-blue-600 hover:underline"
              >
                shaukata12@yahoo.com
              </a>
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Holmes Rajagukguk</h3>
            <p className="text-muted-foreground">
              Magister Humaniora, State University of Medan, Lecturer in
              Sisingamangaraja University North Tapanuli, Indonesia
            </p>
            <p className="mt-2">
              <a
                href="mailto:holmesrajagukguk540@gmail.com"
                className="text-blue-600 hover:underline"
              >
                holmesrajagukguk540@gmail.com
              </a>
            </p>
          </div>

          {/* Continue with more advisory board members - displaying the first 5 for brevity */}
          {/* Additional members would follow the same pattern */}
        </div>
      </section>

      {/* Editorial Board Members Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b">
          Editorial Board Members
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Dr. Luisa María Arvide Cambra
            </h3>
            <p className="text-muted-foreground">
              Professor with Chair/ Arabic and Islamic Studies// Humanities
            </p>
            <p className="text-muted-foreground">
              Dept. of Philology, University of Almeria. LA Cañada S/N.
              04120-Almeria, Spain
            </p>
            <p className="mt-2">
              <span className="font-medium">Research Area:</span> Medieval
              Arabic Science. Humanities. Arabic Philology
            </p>
            <p className="mt-2">
              <a
                href="mailto:lmarvide@ual.es"
                className="text-blue-600 hover:underline"
              >
                lmarvide@ual.es
              </a>
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Dr. Rabindra Kayastha</h3>
            <p className="text-muted-foreground">
              Associate Professor, Department of Natural Sciences, School of
              Science, Kathmandu University, Nepal
            </p>
            <p className="mt-2">
              <a
                href="mailto:rkayastha8@hotmail.com"
                className="text-blue-600 hover:underline"
              >
                rkayastha8@hotmail.com
              </a>
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Rabia Najaf</h3>
            <p className="text-muted-foreground">
              Supervisor, Department of Finance Government University Pakistan.
            </p>
            <p className="mt-2">
              <a
                href="mailto:rabianaajf@gmail.com"
                className="text-blue-600 hover:underline"
              >
                rabianaajf@gmail.com
              </a>
            </p>
          </div>

          {/* Continue with more board members - displaying the first 3 for brevity */}
          {/* Additional members would follow the same pattern */}
        </div>
      </section>

      <div className="text-sm text-center text-muted-foreground mt-10">
        <p>
          This is a partial listing. Please{" "}
          <a
            href="mailto:infogain.ijels@gmail.com"
            className="text-blue-600 hover:underline"
          >
            contact us
          </a>{" "}
          for a complete editorial board list.
        </p>
      </div>
    </div>
  );
};

export default EditorialPage;
