
import DownLoadApp from '../DownLoadApp/DownLoadApp'
import HeroSection from '../HeroSection.tsx/HeroSection'
import OurSpace from '../OurSpace/OurSpace'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import './DashBoard.scss'
type Props = {}

export default function DashBoard({}: Props) {
  return (
    <body className=''>
      <HeroSection />
      <WhyChooseUs />
      <OurSpace />
      <DownLoadApp />
    </body>
  )
}