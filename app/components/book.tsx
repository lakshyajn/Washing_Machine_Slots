"use client"
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

export default function Book(){
  return(
    <div className="booking-wrapper flex-col">
    <div className="justify-center items-center flex">
        <div className="text-[#111111] font-sans font-semibold relative items-center justify-center text-lg mt-4">Book Your Slots Now</div>
    </div>
    <div className="mt-4 border border-spacing-1">
      <div>Select your slot from this week</div>
      <div className="flex items-center justify-center h-screen">
    <FullCalendar {...calendarOptions} />
  </div>
    </div>
    </div>
  );
}