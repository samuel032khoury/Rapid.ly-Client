import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  TimeScale,
  Filler,
  Legend
);

const AnalyticsGraph = ({ graphData }) => {
  const [timeRange, setTimeRange] = useState("week");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFilteredData = () => {
    if (!graphData || graphData.length === 0) return [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let startDate;

    switch (timeRange) {
      case "day":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 1);
        break;
      case "week":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 7);
        break;
      case "month":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 30);
        break;
      case "year":
        startDate = new Date(today);
        startDate.setFullYear(today.getFullYear() - 1);
        break;
      default:
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 7);
    }

    return graphData
      .filter((item) => {
        const itemDate = new Date(item.clickDate);
        return itemDate >= startDate && itemDate <= today;
      })
      .sort(
        (a, b) =>
          new Date(a.clickDate).getTime() - new Date(b.clickDate).getTime()
      );
  };

  const aggregateData = (filteredData) => {
    if (filteredData.length === 0) return { labels: [], values: [] };

    const isSmallScreen = windowWidth < 768;
    const isMediumScreen = windowWidth >= 768 && windowWidth < 1024;

    if (
      (isSmallScreen && (timeRange === "month" || timeRange === "year")) ||
      (isMediumScreen && timeRange === "year")
    ) {
      const aggregatedData = {};

      filteredData.forEach((item) => {
        const date = new Date(item.clickDate);
        let key;

        if (timeRange === "year") {
          key = `${date.getFullYear()}-${date.getMonth() + 1}`;
        } else if (timeRange === "month" && isSmallScreen) {
          const weekNumber = Math.ceil(date.getDate() / 7);
          key = `Week ${weekNumber}`;
        }

        if (!aggregatedData[key]) {
          aggregatedData[key] = {
            label:
              timeRange === "year"
                ? new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    1
                  ).toLocaleDateString(undefined, {
                    month: "short",
                    year: "numeric",
                  })
                : key,
            count: 0,
          };
        }

        aggregatedData[key].count += item.count;
      });

      const sortedKeys = Object.keys(aggregatedData).sort((a, b) => {
        if (timeRange === "year") {
          const [yearA, monthA] = a.split("-").map(Number);
          const [yearB, monthB] = b.split("-").map(Number);
          return yearA * 12 + monthA - (yearB * 12 + monthB);
        }
        return a.localeCompare(b);
      });

      return {
        labels: sortedKeys.map((key) => aggregatedData[key].label),
        values: sortedKeys.map((key) => aggregatedData[key].count),
      };
    }

    return {
      labels: filteredData.map((item) => {
        const date = new Date(item.clickDate);
        if (timeRange === "day") {
          return date.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
          });
        }
        return date.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: timeRange === "year" ? "numeric" : undefined,
        });
      }),
      values: filteredData.map((item) => item.count),
    };
  };

  const filteredData = getFilteredData();
  const { labels, values } = aggregateData(filteredData);

  const getBarThickness = () => {
    if (labels.length === 0) return 24;

    const availableWidth = windowWidth - 100;
    const idealBarWidth = Math.min(
      24,
      Math.max(12, availableWidth / labels.length / 2)
    );

    return idealBarWidth;
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Total Clicks",
        data: values,
        backgroundColor: "#3b82f6",
        borderColor: "#1D2327",
        borderWidth: 0,
        borderRadius: 6,
        pointBorderColor: "red",
        fill: true,
        tension: 0.4,
        barThickness: getBarThickness(),
        categoryPercentage: 0.9,
        barPercentage: 0.9,
        hoverBackgroundColor: "#60a5fa",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 15,
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
          color: "#475569",
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#1e293b",
        bodyColor: "#334155",
        padding: 12,
        usePointStyle: true,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        titleFont: {
          family: "'Inter', sans-serif",
          weight: 700,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return Number.isInteger(value) ? value.toString() : "";
          },
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
          color: "#64748b",
          padding: 10,
        },
        grid: {
          color: "rgba(203, 213, 225, 0.4)",
          drawTicks: false,
        },
        border: {
          display: false,
        },
        title: {
          display: true,
          text: "Number Of Clicks",
          font: {
            family: "'Inter', sans-serif",
            size: 14,
            weight: "bold",
          },
          color: "#334155",
          padding: {
            bottom: 10,
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
          color: "#64748b",
          padding: 10,
          autoSkip: true,
          autoSkipPadding: 15,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        title: {
          display: true,
          text: "Date",
          font: {
            family: "'Inter', sans-serif",
            size: 14,
            weight: "bold",
          },
          color: "#334155",
          padding: {
            top: 10,
          },
        },
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500"></div>

      <div className="p-6 relative z-10 h-full flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-3">
              Analytics Overview
            </span>
            <h2 className="text-2xl font-bold text-slate-800">
              Traffic Statistics
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Track your shortened URL performance
            </p>
          </div>

          <div className="ms-auto mt-4 sm:mt-0 flex flex-row gap-2">
            {["day", "week", "month", "year"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-2 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                  timeRange === range
                    ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 min-h-0 relative">
          {filteredData.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-slate-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <p className="mt-2 text-slate-600 font-medium">
                  No data available for the selected time range
                </p>
                <p className="text-slate-500 text-sm">
                  Try selecting a different period
                </p>
              </div>
            </div>
          ) : (
            // @ts-ignore
            <Bar className="w-full h-full" data={data} options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsGraph;
