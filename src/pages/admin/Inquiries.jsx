import { useState } from "react";

const initialInquiries = [
  { id: 1, name: "Sarah Chen", email: "sarah@acme.com", experience: "Corporate Offsite", dates: "Jun 2-6, 2026", groupSize: "8", status: "new", notes: "VP Eng team offsite. Need meeting room setup." },
  { id: 2, name: "Marcus Rivera", email: "marcus@creator.com", experience: "Influencer Filming", dates: "Jun 16-20, 2026", groupSize: "3", status: "contacted", notes: "1.2M followers. Brand partnership shoot." },
  { id: 3, name: "Wellness Collective", email: "info@wellcollective.com", experience: "Fasting Retreat", dates: "Jul 7-11, 2026", groupSize: "6", status: "confirmed", notes: "Repeat group. Guided extended fast." },
  { id: 4, name: "DevSync Labs", email: "ops@devsync.io", experience: "Coding Bootcamp", dates: "Jul 21-25, 2026", groupSize: "5", status: "new", notes: "Pre-seed startup. Product sprint week." },
  { id: 5, name: "Nina Patel", email: "nina@corp.com", experience: "Corporate Offsite", dates: "Aug 4-8, 2026", groupSize: "7", status: "new", notes: "Leadership team planning. Vegan dietary needs." },
  { id: 6, name: "The Slow Collective", email: "hello@slowcollective.com", experience: "Fasting Retreat", dates: "Aug 18-22, 2026", groupSize: "4", status: "contacted", notes: "First-time fasters. Extra wellness support needed." },
  { id: 7, name: "Frame Studio", email: "booking@framestudio.co", experience: "Influencer Filming", dates: "Sep 1-5, 2026", groupSize: "4", status: "declined", notes: "Dates conflict with maintenance window." },
];

const statusColors = {
  new: "bg-blue-50 text-blue-600",
  contacted: "bg-amber-50 text-amber-600",
  confirmed: "bg-green-50 text-green-600",
  declined: "bg-red-50 text-red-500",
};

export default function Inquiries() {
  const [inquiries] = useState(initialInquiries);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? inquiries : inquiries.filter((i) => i.status === filter);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex gap-2">
        {["all", "new", "contacted", "confirmed", "declined"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full capitalize transition-colors ${
              filter === f ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900" : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Experience</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Dates</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Group</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
              {filtered.map((inq) => (
                <tr key={inq.id} className="hover:bg-gray-25 dark:hover:bg-gray-700/50">
                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900 dark:text-white">{inq.name}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{inq.email}</p>
                  </td>
                  <td className="px-5 py-4 text-gray-600 dark:text-gray-300">{inq.experience}</td>
                  <td className="px-5 py-4 text-gray-600 dark:text-gray-300">{inq.dates}</td>
                  <td className="px-5 py-4 text-gray-600 dark:text-gray-300">{inq.groupSize}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${statusColors[inq.status]}`}>
                      {inq.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
