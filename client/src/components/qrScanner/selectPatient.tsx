export const SelectPatient = () => {
  const handleOnChange = (e: string) => {
    console.log(e);
  };

  return (
    <select
      className='p-2 border border-rose-800/50 rounded-lg focus:outline-none'
      id='select_sterilizer'
      onChange={(e) => handleOnChange(e.target.value)}
      defaultValue={''}
    >
      <option value='' disabled>
        Pasirinkite pacientą
      </option>
      <option value={1}>Jonas Jonaitis</option>
      <option value={2}>Petras Petraitis</option>
    </select>
  );
};
