"use client";

import Link from "next/link";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DateSelectArg } from '@fullcalendar/common';

const today = new Date();
const week = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000);

const calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  validRange: {
    start: today,
    end: week,
    select: (info: DateSelectArg) => {
      console.log('Selected date:', info.start);
    },
  },
  selectable: true,
};

export default function Book() {
  return (
    <div className="booking-wrapper flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="text-center text-2xl font-bold text-gray-800 mt-8">
        Book Your Slots Now
      </div>
      <div className="mt-4 bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <div className="text-center text-lg font-medium text-gray-600 mb-4">
          Select your slot from this week
        </div>
        <div className="flex items-center justify-center">
          <FullCalendar {...calendarOptions} />
        </div>
      </div>
    </div>
  );
}
