const getVaccinationDate = async () => {
  const today = new Date();

  const minDays = 5;
  const maxDays = 12;

  const minDate = new Date(today);
  minDate.setDate(today.getDate() + minDays);

  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + maxDays);

  const vaccinationDate = new Date(
    minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime())
  );

  return vaccinationDate;
};

module.exports = {
  getVaccinationDate,
};
