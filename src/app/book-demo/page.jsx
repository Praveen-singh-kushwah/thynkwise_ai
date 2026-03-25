import './book-demo.css';
import BookDemoPage from './components';
import { getBookDemoPage } from '@/lib/strapi/book-demo-page';

export default async function Page() {
  const bookDemoPageData = await getBookDemoPage();

  return <BookDemoPage data={bookDemoPageData} />;
}
