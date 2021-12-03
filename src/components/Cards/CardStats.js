import PropTypes from "prop-types";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BiConfused } from 'react-icons/bi';

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded my-2 xl:mb-0 shadow">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                {statIconName}
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4 flex items-center">
            <span className={statPercentColor + " mr-2 flex items-center"}>
              {
                statArrow === "up"
                  ? <AiOutlineArrowUp />
                  : statArrow === "down"
                    ? <AiOutlineArrowDown />
                    : ""
              }
              {" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Tarjeta",
  statTitle: "000000000",
  statArrow: "up",
  statPercent: "0000000000000",
  statPercentColor: "text-purple-500",
  statDescripiron: "Pon algo por favor",
  statIconName: <BiConfused />,
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.object,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
