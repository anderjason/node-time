import { Test } from "@anderjason/tests";
import { LocalDateTime } from "..";
import { AbstractDate } from "../AbstractDate";
import { AbstractDateTime } from "../AbstractDateTime";
import { AbstractTime } from "../AbstractTime";
import { TimeZone } from "../TimeZone";
import "./_internal/index.test";

Test.define("LocalDateTime can convert to a different time zone", () => {
  const local = new TimeZone("America/Los_Angeles");
  const utc = TimeZone.ofUTC();

  const localDateTime = new LocalDateTime({
    timeZone: local,
    abstractDateTime: new AbstractDateTime({
      abstractDate: new AbstractDate({
        calendarYear: 2020,
        calendarMonth: 4,
        calendarDay: 15,
      }),
      abstractTime: new AbstractTime({
        hours24: 15,
        minutes: 15,
        seconds: 30,
      }),
    }),
  });

  const actual = localDateTime.withTimeZone(utc, "convert");

  const expected = new LocalDateTime({
    timeZone: utc,
    abstractDateTime: new AbstractDateTime({
      abstractDate: new AbstractDate({
        calendarYear: 2020,
        calendarMonth: 4,
        calendarDay: 15,
      }),
      abstractTime: new AbstractTime({
        hours24: 22,
        minutes: 15,
        seconds: 30,
      }),
    }),
  });

  Test.assert(actual.isEqual(expected));
});

Test.define(
  "LocalDateTime can replace the time zone without converting",
  () => {
    const local = new TimeZone("America/Los_Angeles");
    const utc = TimeZone.ofUTC();

    const localDateTime = new LocalDateTime({
      timeZone: local,
      abstractDateTime: new AbstractDateTime({
        abstractDate: new AbstractDate({
          calendarYear: 2020,
          calendarMonth: 4,
          calendarDay: 15,
        }),
        abstractTime: new AbstractTime({
          hours24: 15,
          minutes: 15,
          seconds: 30,
        }),
      }),
    });

    const actual = localDateTime.withTimeZone(utc, "replace");

    const expected = new LocalDateTime({
      timeZone: utc,
      abstractDateTime: localDateTime.abstractDateTime,
    });

    Test.assert(actual.isEqual(expected));
  }
);

Test.define("LocalDateTime can convert to an ISO 8601 string", () => {
  const local = new TimeZone("America/Los_Angeles");

  const localDateTime = new LocalDateTime({
    timeZone: local,
    abstractDateTime: new AbstractDateTime({
      abstractDate: new AbstractDate({
        calendarYear: 2020,
        calendarMonth: 4,
        calendarDay: 15,
      }),
      abstractTime: new AbstractTime({
        hours24: 15,
        minutes: 15,
        seconds: 30,
      }),
    }),
  });

  const actual = localDateTime.toISOString();

  Test.assert(actual === "2020-04-15T22:15:30.000Z");
});

Test.define("LocalDateTime can be created from an ISO 8601 string", () => {
  const actual = LocalDateTime.givenISOString("2020-04-15T22:15:30.000Z");

  const expected = new LocalDateTime({
    timeZone: TimeZone.ofUTC(),
    abstractDateTime: new AbstractDateTime({
      abstractDate: new AbstractDate({
        calendarYear: 2020,
        calendarMonth: 4,
        calendarDay: 15,
      }),
      abstractTime: new AbstractTime({
        hours24: 22,
        minutes: 15,
        seconds: 30,
      }),
    }),
  });

  Test.assert(actual.isEqual(expected));
});

Test.define(
  "LocalDateTime can be created from an ISO 8601 string with offset",
  () => {
    const actual = LocalDateTime.givenISOString(
      "2020-04-15T22:15:30.000+02:00"
    );

    const expected = new LocalDateTime({
      timeZone: TimeZone.ofUTC(),
      abstractDateTime: new AbstractDateTime({
        abstractDate: new AbstractDate({
          calendarYear: 2020,
          calendarMonth: 4,
          calendarDay: 15,
        }),
        abstractTime: new AbstractTime({
          hours24: 20,
          minutes: 15,
          seconds: 30,
        }),
      }),
    });

    Test.assert(actual.isEqual(expected));
  }
);

Test.define("LocalDateTime throws on an invalid ISO 8601 string", () => {
  Test.assertThrows(() => {
    LocalDateTime.givenISOString("January 1");
  });
});
