"use client";

import Image from "next/image";
import heartCalendar from "@/assets/calen_heart_1.png";
import { wedding } from "@/data/wedding";
import { useCountdown } from "@/hooks/useCountdown";

const countdownLabels = [
  ["days", "Ngày"],
  ["hours", "Giờ"],
  ["minutes", "Phút"],
  ["seconds", "Giây"],
] as const;

const calendarDays = Array.from({ length: 31 }, (_, index) => index + 1);
const leadingDays = Array.from({ length: 2 }, (_, index) => `empty-${index}`);
const weekdays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

export function CountdownSection() {
  const countdown = useCountdown(wedding.date);

  return (
    <section id="countdown" className="date-countdown-section">
      <div className="date-section-inner">
        <article className="wedding-calendar-card" data-reveal>
          <div className="calendar-header">
            <p>Ngày chung đôi</p>
            <h2>Tháng 07</h2>
          </div>

          <div className="calendar-weekdays" aria-hidden="true">
            {weekdays.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>

          <div className="calendar-grid">
            {leadingDays.map((day) => (
              <span className="calendar-day is-empty" key={day} />
            ))}
            {calendarDays.map((day) => (
              <span className={`calendar-day ${day === 2 ? "is-wedding-day" : ""}`} key={day}>
                {day === 2 && (
                  <Image
                    src={heartCalendar}
                    alt=""
                    aria-hidden="true"
                    className="calendar-heart"
                    priority={false}
                  />
                )}
                <span>{day}</span>
              </span>
            ))}
          </div>
        </article>

        <article className="wedding-countdown-card" data-reveal>
          <div className="countdown-heading">
            <p>Khoảnh khắc yêu thương</p>
            <h2>Đếm ngược ngày cưới</h2>
          </div>

          <div className="countdown-card">
            {countdownLabels.map(([key, label]) => (
              <div className="countdown-box" key={key}>
                <strong>{countdown ? String(countdown[key]).padStart(2, "0") : "--"}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
