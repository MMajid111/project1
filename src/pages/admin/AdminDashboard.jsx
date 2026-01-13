import React from 'react';
import { FaUserFriends, FaBuilding, FaClipboardList } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from '../../ThemeContext';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const statCards = [
  {
    label: 'admin.dashboard.registeredUsers',
    value: '4,000',
    icon: <FaUserFriends className="text-3xl text-blue-400" />,
    change: 'admin.dashboard.upFromYesterday',
    changeColor: 'text-green-400',
  },
  {
    label: 'admin.dashboard.registeredBusinesses',
    value: '2,800',
    icon: <FaBuilding className="text-3xl text-blue-400" />,
    change: 'admin.dashboard.upFromYesterday',
    changeColor: 'text-green-400',
  },
  {
    label: 'admin.dashboard.businessRequests',
    value: '12',
    icon: <FaClipboardList className="text-3xl text-blue-400" />,
    change: 'admin.dashboard.upFromYesterday',
    changeColor: 'text-green-400',
  },
];

export default function AdminDashboard() {
  const { isDark } = useTheme();
  const { t, i18n } = useTranslation();
  const { isRTL } = useLanguage();

  const chartData = {
    labels: [
      t('months.january'),
      t('months.february'),
      t('months.march'),
      t('months.april'),
      t('months.may'),
      t('months.june'),
      t('months.july'),
      t('months.august'),
      t('months.september'),
      t('months.october'),
      t('months.november'),
      t('months.december')
    ],
    datasets: [
      {
        label: t('admin.dashboard.users'),
        data: [0, 1200, 2000, 2500, 2200, 2000, 1800, 2100, 2500, 3000, 3500, 4000],
        borderColor: '#4169E1',
        backgroundColor: 'rgba(65,105,225,0.1)',
        tension: 0.4,
        fill: false,
      },
      {
        label: t('admin.dashboard.businesses'),
        data: [0, 1000, 1500, 1800, 1700, 1600, 1500, 1700, 2000, 2300, 2500, 2800],
        borderColor: '#22D3EE',
        backgroundColor: 'rgba(34,211,238,0.1)',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#A3A3A3',
          padding: 10,
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 8
        },
        grid: {
          color: '#22304A',
        },
      },
      x: {
        ticks: {
          color: '#A3A3A3',
          padding: 10,
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 12
        },
        grid: {
          color: '#22304A',
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    }
  };

  return (
    <div className={`px-2 md:px-8 lg:px-16 py-4 ${isRTL ? 'text-right' : 'text-left'}`}>
      <h1 className="text-3xl font-bold mb-2">{t('admin.dashboard.title')}</h1>
      <p className="text-gray-400 mb-6">{t('admin.dashboard.welcome')}</p>
      {/* Stat Cards */}
      <div className="flex flex-wrap gap-6 mb-8">
        {statCards.map((card, i) => (
          <div key={i} className="flex-1 min-w-[220px] rounded-2xl bg-[#22304A] p-6 flex flex-col gap-2 shadow-md max-w-xs">
            <div className="flex items-center gap-3">
              {card.icon}
              <span className="text-lg font-semibold">{t(card.label)}</span>
            </div>
            <div className="text-3xl font-bold mt-2">{card.value}</div>
            <div className={`text-xs mt-1 ${card.changeColor}`}>{t(card.change)}</div>
          </div>
        ))}
      </div>
      {/* Registration Analytics Chart */}
      <div className="bg-[#22304A] rounded-2xl p-6 shadow-md w-full">
        <h2 className="text-xl font-bold mb-4">{t('admin.dashboard.registrationAnalytics')}</h2>
        <div className="w-full h-[400px] relative" dir="ltr">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
} 