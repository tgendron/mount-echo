import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
  { id: "f1-r1", name: "Canopy", color: "bg-emerald-400" },
  { id: "f1-r2", name: "Creek", color: "bg-blue-400" },
  { id: "f2-r1", name: "Summit", color: "bg-amber-400" },
  { id: "f2-r2", name: "Ridge", color: "bg-purple-400" },
];

// Mock booking data
const mockBookings = {
  "2026-06-02": ["f1-r1", "f1-r2", "f2-r1", "f2-r2"],
  "2026-06-03": ["f1-r1", "f1-r2", "f2-r1", "f2-r2"],
  "2026-06-04": ["f1-r1", "f1-r2", "f2-r1", "f2-r2"],
  "2026-06-05": ["f1-r1", "f1-r2", "f2-r1", "f2-r2"],
  "2026-06-06": ["f1-r1", "f1-r2", "f2-r1", "f2-r2"],
  "2026-06-16": ["f1-r1", "f2-r1"],
  "2026-06-17": ["f1-r1", "f2-r1"],
  "2026-06-18": ["f1-r1", "f2-r1"],
  "2026-06-19": ["f1-r1", "f2-r1"],
  "2026-06-20": ["f1-r1", "f2-r1"],
};

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function Availability() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5)); // June 2026
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  const prev = () => setCurrentDate(new Date(year, month - 1));
  const next = () => setCurrentDate(new Date(year, month + 1));

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  return (
    <div className="space-y-6">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4">
        {rooms.map((r) => (
          <div key={r.id} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
            <span className={`w-3 h-3 rounded-full ${r.color}`} />
            {r.name}
          </div>
        ))}
        <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
          <span className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-600" />
          Available
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700">
          <button onClick={prev} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"><ChevronLeft size={18} className="text-gray-600 dark:text-gray-300" /></button>
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">{monthName}</h2>
          <button onClick={next} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"><ChevronRight size={18} className="text-gray-600 dark:text-gray-300" /></button>
        </div>

        <div className="grid grid-cols-7">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-center text-xs font-medium text-gray-400 dark:text-gray-500 py-3 border-b border-gray-50 dark:border-gray-700">
              {d}
            </div>
          ))}
          {days.map((day, i) => {
            const dateStr = day ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` : null;
            const booked = dateStr ? (mockBookings[dateStr] || []) : [];

            return (
              <div
                key={i}
                className={`min-h-[80px] p-2 border-b border-r border-gray-50 dark:border-gray-700 ${!day ? "bg-gray-25 dark:bg-gray-900" : ""}`}
              >
                {day && (
                  <>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{day}</span>
                    <div className="flex gap-1 mt-1.5">
                      {rooms.map((r) => (
                        <span
                          key={r.id}
                          className={`w-3 h-3 rounded-full ${booked.includes(r.id) ? r.color : "bg-gray-200 dark:bg-gray-600"}`}
                          title={`${r.name}: ${booked.includes(r.id) ? "Booked" : "Available"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
