import React from "react";

const Calendar = () => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <p className="text-sm text-gray-500">(Calendar UI placeholder)</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        // onClick={() => onSelect(new Date())}
      >
        Pick Today
      </button>
    </div>
  );
};

export default Calendar;
