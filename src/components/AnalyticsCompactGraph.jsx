import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const AnalyticsCompactGraph = ({ graphData }) => {
  const [, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const processData = () => {
    if (!graphData || graphData.length === 0) return { labels: [], values: [] };

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 7);

    const filteredData = graphData
      .filter((item) => {
        const itemDate = new Date(item.clickDate);
        return itemDate >= startDate && itemDate <= today;
      })
      .sort(
        (a, b) =>
          new Date(a.clickDate).getTime() - new Date(b.clickDate).getTime()
      );

    return {
      labels: filteredData.map((item) => {
        const date = new Date(item.clickDate);
        return date.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
        });
      }),
      values: filteredData.map((item) => item.count),
    };
  };

  const { labels, values } = processData();

  const totalClicks = values.reduce((sum, current) => sum + current, 0);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: "#3b82f6",
        borderRadius: 4,
        barThickness: 18,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#1e293b",
        bodyColor: "#334155",
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 11,
        },
        titleFont: {
          family: "'Inter', sans-serif",
          size: 11,
          weight: 700,
        },
        padding: 8,
        cornerRadius: 4,
        displayColors: false,
        callbacks: {
          title: (tooltipItems) => {
            return tooltipItems[0].label;
          },
          label: (context) => {
            return `Clicks: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 2,
        bottom: 2,
      },
    },
    animation: {
      duration: 500,
    },
  };

  if (values.length === 0) {
    return (
      <div className="h-24 w-full flex items-center justify-center bg-slate-50/80 rounded-md">
        <p className="text-xs text-gray-400">No data available</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-slate-50/80 rounded-md p-1">
      <div className="flex justify-between items-center px-2 mb-1">
        <div className="text-xs font-medium text-slate-500">Last 7 days</div>
        <div className="text-xs font-medium text-blue-600">
          {totalClicks} clicks
        </div>
      </div>
      <div className="h-16">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsCompactGraph;
