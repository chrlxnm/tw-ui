import { addDays, format, parse } from "date-fns";

import { id } from "date-fns/locale";

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function getThisMonth() {
  const today = new Date();
  return format(today, "yyyy-MM");
}

export function getFiveNextDay() {
  const today = new Date();

  // Array to hold the names and dates
  const nextFiveDays = [];

  // Loop to generate the next 5 days
  for (let i = 0; i < 5; i++) {
    const nextDay = addDays(today, i);
    let formattedDate;
    if (i === 0) {
      formattedDate = {
        label: `Hari ini ${format(nextDay, "dd/MM", { locale: id })}`,
        value: format(nextDay, "yyyy-MM-dd"),
      };
    } else {
      formattedDate = {
        label: format(nextDay, "eeee dd/MM", { locale: id }),
        value: format(nextDay, "yyyy-MM-dd"),
      };
    }
    nextFiveDays.push(formattedDate);
  }
  return nextFiveDays;
}

export function formatDateWithDayName(date) {
  try {
    // Parse the date string
    const parsedDate = parse(date, "yyyy-MM-dd", new Date());

    // Check if the parsed date is valid
    if (isNaN(parsedDate)) {
      throw new Error("Invalid date");
    }

    // Format the parsed date
    const formattedDate = format(parsedDate, "eeee, dd MMMM yyyy", {
      locale: id,
    });

    return formattedDate;
  } catch (error) {
    console.error("Error formatting date:", error.message);
    return "";
  }
}

const reverseStatusMapping = {
  all: "Semua",
  approved: "Dibooking",
  rejected: "Ditolak",
  submitted: "Menunggu Konfirmasi",
  ongoing: "Sedang berlangsung",
  finished: "Selesai",
  cancelled: "Cancel",
};

// Function to get the Indonesian status, with default handling
export function getStatusOnGoing(status) {
  return reverseStatusMapping[status] || status; // "Status not found" in Indonesian
}
