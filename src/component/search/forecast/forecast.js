import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  //    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  console.log(data);

  const today = new Date();
  const forecastDays = [];
  const options = { month: "numeric", day: "numeric" };

  for (let i = 1; i < 11; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    const formattedDate = nextDay.toLocaleDateString("en-US", options);
    forecastDays.push(formattedDate);
  }

  return (
    <>
      <div class="display flex-col w-[99%] md:w-[450px] ">
        <div
          style={{ backgroundColor: "#b6aa9a" }}
          class="p-[0] md:p-3 md:w-[430px] w-[99%] rounded-2xl h-[160px] flex flex-wrap justify-between "
        >
          {data.list.splice(0, 10).map((item, idx) => (
            <div key={idx} class="md:w-[80px] w-[58px] h-[70px]">
              <label class="ml-3 text-sm text-white">{forecastDays[idx]}</label>
              <div class="display flex gap-0 items-center h-auto">
                <img
                  alt="weather"
                  class="h-[30px]"
                  src={`icons/${item.weather[0].icon}.png`}
                />
                <label class="text-xs   text-white">
                  {Math.round(item.main.temp)}°C{" "}
                </label>
              </div>
            </div>
          ))}
        </div>

        <div class="mt-3">
          <h5 class="text-white">Random Text</h5>
          <p class="text-white text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            officiis tempora quo quas assumenda ex molestias magnam quidem
            aspernatur labore laborum veniam quaerat cum corporis doloremque.
          </p>
        </div>
      </div>
    </>
  );
};
export default Forecast;
