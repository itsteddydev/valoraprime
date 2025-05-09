import { Trash2 } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useTranslation } from "react-i18next";


const CalculatorForm = () => {
  const { t } = useTranslation(["calculatorForm"]);

  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('hora'); // hora | dia | mes | anual
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerWeek, setDaysPerWeek] = useState(5);

  const [results, setResults] = useState(() => {
    const storedResults = localStorage.getItem('results');
    return storedResults ? JSON.parse(storedResults) : [];
  });

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(results));
  }, [results]);

  const handleCalculate = () => {
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) return;

    const hours = parseFloat(hoursPerDay) || 8;
    const days = parseFloat(daysPerWeek) || 5;

    let hourlyRate = 0;

    switch (unit) {
      case 'hora':
        hourlyRate = value;
        break;
      case 'dia':
        hourlyRate = value / hours;
        break;
      case 'mes':
        hourlyRate = value / (4 * days * hours);
        break;
      case 'anual':
        hourlyRate = value / (12 * 4 * days * hours);
        break;
      default:
        hourlyRate = value;
    }

    const dailyRate = hourlyRate * hours;
    const weeklyRate = dailyRate * days;
    const monthlyRate = weeklyRate * 4;
    const yearlyRate = monthlyRate * 12;

    const newResult = {
      id: Date.now(),
      hourlyRate: hourlyRate.toFixed(2),
      dailyRate: dailyRate.toFixed(2),
      weeklyRate: weeklyRate.toFixed(2),
      monthlyRate: monthlyRate.toFixed(2),
      yearlyRate: yearlyRate.toFixed(2),
      hours,
      days,
    };

    setResults([newResult, ...results]);
    setAmount('');
  };

  const handleRemove = (id) => {
    const updatedResults = results.filter((result) => result.id !== id);
    setResults(updatedResults);
  };

  return (
    <Suspense fallback="loading...">
      <div className="md:flex-row flex md:flex-1 flex-col w-full p-5 gap-2 overflow-hidden ">

        {/* Formulario */}
        <div className="flex-1 border-2 border-[#2f6dac] rounded-s-xl sm:pl-6 px-2 shadow-md md:max-h-[75vh]  max-h-[90vh] sm:overflow-y-auto">
          <div className=" py-6 overflow-y-auto h-full">
            <h2 className=" mb-6 text-center text-2xl font-extrabold leading-tight text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl">  {t("title")}</h2>

            <div className="flex justify-center gap-2 flex-wrap md:flex-nowrap mb-6 text-base text-gray-600">
              {['hora', 'dia', 'mes', 'anual'].map((option) => (
                <button
                  key={option}
                  onClick={() => setUnit(option)}
                  className={`px-4 py-2 rounded-lg ${unit === option ? 'inline-flex items-center justify-center rounded-lg text-base font-semibold   disabled:bg-gray-300 disabled:text-gray-400 disabled:opacity-50 shadow-lg max-w-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white' : 'bg-white border'}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex flex-col  md:gap-3 justify-center items-center">
              {/* Inputs de configuración */}
              <div className="flex flex-col justify-center items-start gap-4 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600"> {t("calculateHours.dailyHours.label")}</label>
                  <input
                    type="number"
                    min={1}
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(e.target.value)}
                    className="border py-[2px] rounded w-28 text-center"
                    placeholder={t("calculateHours.dailyHours.placeholder")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold  text-gray-600">{t("calculateHours.workDaysPerWeek.label")}</label>
                  <input
                    type="number"
                    min={1}
                    value={daysPerWeek}
                    onChange={(e) => setDaysPerWeek(e.target.value)}
                    className="border py-[2px] rounded w-28 text-center"
                    placeholder={t("calculateHours.workDaysPerWeek.placeholder")}
                  />
                </div>
              </div>

              {/* Input de dinero */}
              <div className="flex flex-col gap-2 md:items-center">
                <label className="font-semibold text-sm text-gray-600">{t("calculateHours.titlevalue")}</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border py-[2px] rounded w-40 text-center"
                  placeholder="$365.00"
                />
                <button
                  onClick={handleCalculate}
                  className="inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:pointer-events-none disabled:bg-gray-300 disabled:text-gray-400 disabled:opacity-50 shadow-lg h-12 px-6 w-full max-w-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700"
                >
                  {t("buttons.calculate")}
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* Resultados */}
        <div className="md:w-80 rounded-e-xl overflow-hidden border-2 border-[#2f6dac] shadow-md flex flex-col md:max-h-[75vh] max-h-[72vh]">
          <div className="bg-white p-4 overflow-y-auto h-full">

            {results.length > 0 && (
              <button
                onClick={() => setResults([])}
                className="text-sm text-red-500 hover:text-red-700 mb-4 underline"
              >
                {t("buttons.clearResults")}
              </button>
            )}

            {results.length === 0 && (
              <p className="text-center ">   {t("resultError")}</p>
            )}
            {results.map((res) => (
              <div key={res.id} className="bg-gradient-to-r from-blue-600 to-blue-800
               p-4 rounded-lg mb-4 relative">
                <button
                  onClick={() => handleRemove(res.id)}
                  className="absolute top-2 right-2 text-sm text-white/80 hover:text-white"
                >
                  <Trash2 className='size-5' />
                </button>
                <ul className="text-sm space-y-1 text-white">
                  <small className="block mb-2">
                    {res.hours}  {t("hourxdays.hour")} {res.days}  {t("hourxdays.days")}
                  </small>
                  <li className='flex justify-between'><strong className='text-white/80' > {t("cards.perhour")}:</strong> ${res.hourlyRate}</li>
                  <li className='flex justify-between'><strong className='text-white/80' >{t("cards.perdays")}:</strong> ${res.dailyRate}</li>
                  <li className='flex justify-between'><strong className='text-white/80' >{t("cards.perweek")}:</strong> ${res.weeklyRate}</li>
                  <li className='flex justify-between'><strong className='text-white/80' >{t("cards.permonth")}:</strong> ${res.monthlyRate}</li>
                  <li className='flex justify-between'><strong className='text-white/80' >{t("cards.peryear")}:</strong> ${res.yearlyRate}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Suspense>
  );
};

export default CalculatorForm;
