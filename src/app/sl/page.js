import dynamic from 'next/dynamic';
import Holder from './_components/Holder.client';
import GoogleAnalytics from '../../../components/GoogleAnalytics/GoogleAnalytics';

export const metadata = {
  title: "Tjaša & Marsel | Fitness & Lifestyle Coaching",
  description: "Sva Tjaša in Marsel, osebna trenerja, ki nudiva individualne in spletne treninge.",
};

export default function Home() {
  return (
    <div>
      <GoogleAnalytics/>
      <Holder/>
    </div>
  );
}
