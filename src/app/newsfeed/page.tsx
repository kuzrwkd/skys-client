import DataTable from '@/app/newsfeed/dataTable';
import Card from '@/components/features/card';

export default function Page() {
  return (
    <Card title="ニュース一覧">
      <DataTable />
    </Card>
  );
}
