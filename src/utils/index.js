import { addDays, format, parse } from "date-fns";
import { id, se } from "date-fns/locale";

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

export function getDuration(times, selectedTime) {
  if (!times?.length || !selectedTime) {
    return [];
  }
  const remapTimes = times?.sort()?.map((item)=> item?.value);
  const timeInHours = remapTimes?.map((item) => Number(item?.split(":")?.[0]));
  const selectedIndex = remapTimes.indexOf(selectedTime);
  if (selectedIndex === -1) {
    // Handle case where the selectedTime is not in the availableTime list
    return [];
  }

  let durations = [];
  let startIndex = selectedIndex;

  for (let i = startIndex; i < timeInHours.length; i++) {
    if (timeInHours[i + 1] - timeInHours[i] > 1) {
      // If a gap greater than 1 hour is found, break
      break;
    } else {
      durations.push({
        value: i - startIndex + 1,
        label: `${i - startIndex + 1} Jam`,
      });
    }
  }

  // Check if the loop ended without finding a gap
  if (durations.length === 0 && timeInHours.length > 0) {
    durations.push({
      label: timeInHours.length - startIndex,
      value: timeInHours.length - startIndex,
    });
  }

  return durations;
}
