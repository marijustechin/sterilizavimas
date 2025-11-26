import { Search } from '../Search';

export const AdminListFilters = () => {
  const handleSarchByPacient = (text: string) => {
    console.log(text);
  };

  return (
    <section className='flex gap-3 items-center border-b border-gray-200 py-1'>
      <Search
        width={40}
        placeholderText='Paieška pagal kažką'
        onSearch={(text) => handleSarchByPacient(text)}
      />
    </section>
  );
};
