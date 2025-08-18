import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search';

export const AdminPage = () => {
  const onSearch = (searchText: string) => {
    console.log(searchText);
  };

  return (
    <main className='flex flex-col gap-4'>
      <section>
        <Search
          placeholderText='Paieška pagal kažką'
          onSearch={(text) => onSearch(text)}
        />
      </section>
      <section>
        <table className='w-full text-left mt-5'>
          <thead className='uppercase bg-slate-200 text-center'>
            <tr>
              <th>Instrumentas</th>
              <th>Skyrius</th>
              <th>Sterilizuotas</th>
              <th>Panaudotas</th>
              <th>Medikas</th>
              <th>Pacientas</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </section>
      <Pagination />
    </main>
  );
};
