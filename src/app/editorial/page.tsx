import { TeamSection } from "@/components/TeamSection";

const EditorialPage = () => {
  
  const editorInChiefMembers = [
    {
      id: "amol-bute",
      name: "Dr. Amol R. Bute",
      title: "Assistant Professor, Dept. of Basic Sciences & Humanities, GMR Institute of Technology, Rajam. Andhra Pradesh",
      bio: "Email: buteamolr@gmail.com",
      imageUrl: "/assets/images/team/amol-bute.png" 
    },
    {
      id: "devanand-puri",
      name: "Dr. Devanand Sadanand Puri",
      title: "Assistant Professor, Department of English, NSSR'S Arts and Commerce College, Parli Vaijnath. Maharashtra",
      bio: "Email: deva.puri006@gmail.com",
      imageUrl: "/assets/images/team/devanand-puri.png" 
    }
  ];

  
  const advisoryBoardMembers = [
    {
      id: "sushil-dhuldhar",
      name: "Dr. Sushil Dhuldhar",
      title: "Assistant Professor, Dept. of Humanities and Applied Sciences, VESIT, Chembur, Mumbai",
      bio: "Email: sushil.dhuldhar@ves.ac.in",
      imageUrl: "/assets/images/team/sushil-dhuldhar.png" 
    },
    {
      id: "pandurang-pawar",
      name: "Dr. Pandurang Tukaram Pawar",
      title: "Associate Professor, Department of Commerce, Shivaji Mahavidyalaya, Renapur, Latur-413527",
      bio: "Email: pandurang.pawar2012@gmail.com",
      imageUrl: "/assets/images/team/pandurang-pawar.png" 
    }
  ];

  
  const editorialBoardMembers = [
    {
      id: "beena-rathi",
      name: "Dr. Beena Vinod Rathi",
      title: "Retired Professor, Dept. of English, Smt. Radhabai Sarda Mahavidyalaya, Anjangaon Surji, Maharashtra",
      bio: "Email: beena_rathi@rediffmail.com",
      imageUrl: "/assets/images/team/beena-rathi.png" 
    },
    {
      id: "arpana-jha",
      name: "Dr. Arpana Jha",
      title: "Assistant Professor, Dept. of English and Foreign Languages, Central University of South Bihar, Gaya, Bihar",
      bio: "Email: arpanajha@cusb.ac.in",
      imageUrl: "/assets/images/team/arpana-jha.png" 
    },
    {
      id: "mangesh-adgokar",
      name: "Dr. Mangesh Adgokar",
      title: "Professor, Dept. of English, G. S. Tompe Arts, Com & Sci College, Chandur Bazar, Maharashtra",
      bio: "Email: mangeshadgokar@gmail.com",
      imageUrl: "/assets/images/team/mangesh-adgokar.png" 
    },
    {
      id: "atmaram-gangane",
      name: "Dr. Atmaram Shamrao Gangane",
      title: "Professor, Dnyanopasak Shikshan Mandal's College of Arts, Commerce and Science, Parbhani, Maharashtra, India",
      bio: "Email: asgangane@gmail.com",
      imageUrl: "/assets/images/team/atmaram-gangane.png" 
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-16 px-4">
        {/* Editor in Chief Section */}
        <TeamSection 
          title="Editor in Chief" 
          members={editorInChiefMembers}
          className="py-10"
        />
        
        {/* Advisory Board Section */}
        <TeamSection 
          title="Advisory Board" 
          members={advisoryBoardMembers}
          className="py-10"
        />
        
        {/* Editorial Board Section */}
        <TeamSection 
          title="Editorial Board" 
          members={editorialBoardMembers}
          className="py-10"
        />
        
        <footer className="text-center pt-8 mt-16 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Contact us at{" "}
            <a href="mailto:journal@example.com" className="text-gray-700 hover:underline">
              journal@example.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default EditorialPage;