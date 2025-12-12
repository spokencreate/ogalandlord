import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#e8d79c] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full border border-black flex items-center justify-center">
              <span className="text-2xl">🏠</span>
            </div>
          </div>

          <p className="text-gray-800 max-w-sm leading-relaxed text-sm">
            From verified listings to trusted agents, secure payments,
            and easy dashboards. Our service takes the stress out of
            renting. Whether you're searching or listing, everything is
            smoother here.
          </p>
        </div>

        {/* MIDDLE SECTION */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-800 text-sm">
            <li>Home</li>
            <li>Properties</li>
            <li>How It Works</li>
            <li>Dashboard</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>

          <div className="flex items-center gap-3 mb-3">
            <FiMail className="text-xl" />
            <span className="text-sm">opondoexod@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FiPhone className="text-xl" />
            <span className="text-sm"></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
