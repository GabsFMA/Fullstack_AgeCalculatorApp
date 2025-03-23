import { useState } from 'react';
import Dmy from './components/dmy';
import Yo from './components/yo';

function App() {
  const [inputs, setInputs] = useState({ day: '', month: '', year: '' });
  const [errors, setErrors] = useState({ day: '', month: '', year: '', generic: '' });
  const [age, setAge] = useState({ day: '--', month: '--', year: '--' });

  const DMY = [
    { name: "DAY", placeholder: "DD", key: "day", min: 1, max: 31 },
    { name: "MONTH", placeholder: "MM", key: "month", min: 1, max: 12 },
    { name: "YEAR", placeholder: "YYYY", key: "year", min: 1900, max: new Date().getFullYear() }
  ];

  const validateInputs = () => {
    const newErrors = { day: '', month: '', year: '', generic: '' };
    const today = new Date();
    const currentYear = today.getFullYear();

    if (!inputs.day) newErrors.day = 'Campo obrigatório';
    else if (inputs.day < 1 || inputs.day > 31) newErrors.day = 'Insira um dia válido';

    if (!inputs.month) newErrors.month = 'Campo obrigatório';
    else if (inputs.month < 1 || inputs.month > 12) newErrors.month = 'Insira um mês válido';

    if (!inputs.year) newErrors.year = 'Campo obrigatório';
    else if (inputs.year > currentYear) newErrors.year = 'Ano futuro é inválido';

    // Validação de data real
    if (!Object.values(newErrors).some(error => error !== '')) {
      const day = parseInt(inputs.day);
      const month = parseInt(inputs.month);
      const year = parseInt(inputs.year);
      
      const daysInMonth = new Date(year, month, 0).getDate();
      if (day > daysInMonth) {
        newErrors.day = `Mês ${month} só tem ${daysInMonth} dias`;
      }

      const inputDate = new Date(year, month - 1, day);
      if (inputDate > today) {
        newErrors.generic = 'Data não pode ser futura';
      }
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(
      parseInt(inputs.year),
      parseInt(inputs.month) - 1,
      parseInt(inputs.day)
    );

    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - birthDate.getMonth();
    let ageDay = today.getDate() - birthDate.getDate();

    if (ageDay < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageMonth--;
      ageDay += lastMonth.getDate();
    }

    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }

    setAge({ day: ageDay, month: ageMonth, year: ageYear });
  };

  const handleInputChange = (key, value) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      calculateAge();
    }
  };

  return (
    <div className="bg-[#fff] w-[900px] h-[600px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[192px]">
      <div className="m-16 flex flex-col gap-6">
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-row gap-8 w-full">
            {DMY.map((item) => (
              <Dmy
                key={item.key}
                name={item.name}
                placeholder={item.placeholder}
                value={inputs[item.key]}
                error={errors[item.key]}
                min={item.min}
                max={item.max}
                onChange={(value) => handleInputChange(item.key, value)}
              />
            ))}
          </div>
            <div className="relative mt-8">
            <hr className="border-[#6F6E6E]" />
            <button
              type="submit"
              className="absolute top-1/2 right-0 flex items-center justify-center transform -translate-y-1/2 cursor-pointer"
            >
              <img
                src="images/icon-arrow.svg"
                alt="icon-arrow"
                className="bg-[#C64CFF] rounded-full p-2 hover:bg-black ease-out duration-300"
              />
            </button>
          </div>
        </form>
        <div className="flex flex-col">
          <Yo quantity={age.year} dmy="anos" />
          <Yo quantity={age.month} dmy="meses" />
          <Yo quantity={age.day} dmy="dias" />
        </div>
      </div>
    </div>
  );
}

export default App;