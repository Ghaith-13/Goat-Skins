import Slider from './components/slider';
import RestOfSection from './components/rest_of_page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Slider />
      <RestOfSection />
    </main>
  );
}
