import dynamic from 'next/dynamic';
import Holder from './_components/Holder.client';
import GoogleAnalytics from '../../../components/GoogleAnalytics/GoogleAnalytics';


export const metadata = {
  title: "Tjaša & Marsel | Fitness & Lifestyle Coaching",
  description: "We are Tjaša & Marsel, personal trainers offering personalized and online fitness programs for a healthier lifestyle.",
};


export default function Home() {
  return (
    <div>
      <GoogleAnalytics/>
      <Holder/>
    </div>
  );
}
