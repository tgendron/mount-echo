import { Calendar, MessageSquare, CheckCircle, Clock } from "lucide-react";

const stats = [
  { label: "Upcoming Bookings", value: "3", icon: Calendar, color: "bg-blue-50 text-blue-600" },
  { label: "Pending Inquiries", value: "7", icon: MessageSquare, color: "bg-amber-50 text-amber-600" },
  { label: "Open Concierge Requests", value: "4", icon: Clock, color: "bg-purple-50 text-purple-600" },
  { label: "Completed This Month", value: "2", icon: CheckCircle, color: "bg-green-50 text-green-600" },
];

const recentInquiries = [
  { name: "Sarah Chen", experience: "Corporate Offsite", date: "Jun 2-6", status: "New" },
  { name: "Marcus Rivera", experience: "Influencer Filming", date: "Jun 16-20", status: "Contacted" },
  { name: "Wellness Collective", experience: "Fasting Retreat", date: "Jul 7-11", status: "Confirmed" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}>
                <Icon size={18} />
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>

      {/* Recent Inquiries */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
        <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Recent Inquiries</h2>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-700">
          {recentInquiries.map((inq) => (
            <div key={inq.name} className="px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{inq.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{inq.experience} &middot; {inq.date}</p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                inq.status === "New" ? "bg-blue-50 text-blue-600" :
                inq.status === "Contacted" ? "bg-amber-50 text-amber-600" :
                "bg-green-50 text-green-600"
              }`}>
                {inq.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
