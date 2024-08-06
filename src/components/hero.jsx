import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <main>
        <section className="w-full h-[80vh] bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e] flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]">
              H4ckHerit4ge v2.0
            </h1>
            <p className="text-lg md:text-xl text-[#a0a0a0]">
              Unleash your coding prowess at the ultimate intercollege
              hackathon!
            </p>
            <Button className="px-8 py-3 text-lg">Hack Now </Button>
          </div>
        </section>
        <section className="w-full py-16 px-4 md:px-8 bg-[#0f0f0f]">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">About the Hackathon</h2>
              <p className="text-[#a0a0a0]">
                H4ckHerit4ge is an exciting intercollege hackathon that
                challenges students to push the boundaries of technology.
                Compete with teams from across the country and showcase your
                innovative solutions to real-world problems.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5 text-[#8b5cf6]" />
                  <span>September 27-28, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocateIcon className="w-5 h-5 text-[#8b5cf6]" />
                  <span>Heritage Institute of Technology</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Prizes and Rewards</h2>
              <p className="text-[#a0a0a0]">
                Compete for amazing prizes and rewards at H4ckHerit4ge. From
                cutting-edge tech gadgets to lucrative cash prizes, there's
                something for everyone.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <TrophyIcon className="w-5 h-5 text-[#8b5cf6]" />
                  <span>1st Place: ₹20,000 + Trophy + Certificate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <TrophyIcon className="w-5 h-5 text-[#8b5cf6]" />
                  <span>2nd Place: ₹12,000 + Trophy + Certificate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <TrophyIcon className="w-5 h-5 text-[#8b5cf6]" />
                  <span>3rd Place: ₹8,000 + Trophy + Certificate</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-16 px-4 md:px-8 bg-[#0f0f0f]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Sponsor Logo"
                  className="aspect-[2/1] object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Sponsor Logo"
                  className="aspect-[2/1] object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Sponsor Logo"
                  className="aspect-[2/1] object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Sponsor Logo"
                  className="aspect-[2/1] object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export default Hero;
