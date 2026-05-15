import { useState } from "react";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

const initialRequests = [
  { id: 1, guest: "Sarah Chen", booking: "Corporate Offsite, Jun 2-6", request: "Arrange airport shuttle for 8 people arriving at SEA on Monday 1pm", priority: "high", status: "pending" },
  { id: 2, guest: "Sarah Chen", booking: "Corporate Offsite, Jun 2-6", request: "Set up meeting room with projector, whiteboard, and 8 chairs by Tuesday 8am", priority: "medium", status: "in-progress" },
  { id: 3, guest: "Marcus Rivera", booking: "Influencer Filming, Jun 16-20", request: "Source 3 ring lights and 2 tripods for indoor shoots", priority: "medium", status: "pending" },
  { id: 4, guest: "Wellness Collective", booking: "Fasting Retreat, Jul 7-11", request: "Stock kitchen with bone broth ingredients, herbal teas, and electrolyte packets", priority: "high", status: "completed" },
  { id: 5, guest: "Sarah Chen", booking: "Corporate Offsite, Jun 2-6", request: "Book Chef Maria for 5-day catering. 2 vegetarian, 1 gluten-free.", priority: "high", status: "in-progress" },
  { id: 6, guest: "Marcus Rivera", booking: "Influencer Filming, Jun 16-20", request: "Check drone filming permits for Ridgeline Overlook area", priority: "low", status: "pending" },
];

const statusConfig = {
  pending: { icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
  "in-progress": { icon: AlertCircle, color: "text-blue-500", bg: "bg-blue-50" },
  completed: { icon: CheckCircle, color: "text-green-500", bg: "bg-green-50" },
};

const priorityColors = {
  high: "bg-red-50 text-red-600",
  medium: "bg-amber-50 text-amber-600",
  low: "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400",
};

export default function Concierge() {
  const [requests] = useState(initialRequests);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? requests : requests.filter((r) => r.status === filter);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex gap-2">
        {["all", "pending", "in-progress", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full capitalize transition-colors ${
              filter === f ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900" : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {f.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-4">
        {filtered.map((req) => {
          const status = statusConfig[req.status];
          const StatusIcon = status.icon;
          return (
            <div key={req.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityColors[req.priority]}`}>
                      {req.priority}
                    </span>
                    <span className={`flex items-center gap-1 text-xs font-medium ${status.color}`}>
                      <StatusIcon size={14} />
                      {req.status.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">{req.request}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{req.guest} &middot; {req.booking}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
