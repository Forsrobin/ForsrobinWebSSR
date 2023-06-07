import { FaUniversity } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import Malvacom from '@app/assets/malvacom.webp'
import Aviliax from '@app/assets/avilaix.png'

const IconDisplay = ({ icon, mb = 'mb-0' }: { icon: string; mb?: string }) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <img src={icon} alt='Aviliax' className={`w-2/4 ${mb}`} />
    </div>
  )
}

function Work() {
  const colors = {
    primary: '#213257',
    'base-100': '#0b101a'
  }

  const iconStyle = { background: colors['base-100'], color: '#fff' }
  const borderRadius = 15
  return (
    <div className='px-2 md:px-10 pt-20' id='work'>
      <div className='flex items-center mb-5 justify-center w-full'>
        <h2 className='text-white text-6xl my-4 font-bold uppercase'>Timeline</h2>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: colors.primary, color: '#fff', borderRadius: borderRadius }}
          contentArrowStyle={{ borderRight: `7px solid ${colors.primary}` }}
          date='2018 - present'
          iconStyle={iconStyle}
          icon={<IconDisplay icon={Aviliax} mb='mb-2' />}>
          <h3 className='vertical-timeline-element-title'>CEO</h3>
          <h4 className='italic'>Aviliax</h4>
          <p>
            At the age of 18, fueled by ambition and a shared entrepreneurial spirit, my school friend and I embarked on an exciting journey to create
            our own company called Aviliax. With dreams in our eyes and determination in our hearts, we combined our complementary skills and youthful
            energy to bring our vision to life
          </p>
          <div className='mt-3 md:mt-5 flex flex-wrap gap-2'>
            <div className='badge bg-transparent badge-outline outline-white'>Backend</div>
            <div className='badge bg-transparent badge-outline outline-white'>Frontend</div>
            <div className='badge bg-transparent badge-outline outline-white'>DevOps</div>
            <div className='badge bg-transparent badge-outline outline-white'>Networking</div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2016 - 2019'
          contentStyle={{ borderRadius: borderRadius }}
          iconStyle={iconStyle}
          icon={<IoMdSchool />}>
          <h3 className='text-base-100 text-lg'>Graduated Highschool</h3>
          <h4 className='text-base-200 italic'>Thoren Innovation School</h4>
          <p>
            I am proud to have graduated from Thoren Innovation School, specializing in Mathematics and Programming. During my time at Thoren, I
            delved into a rigorous academic curriculum that honed my analytical and problem-solving skills
          </p>
          <div className='mt-3 md:mt-5 flex flex-wrap gap-2'>
            <div className='badge badge-primary badge-outline'>PHP</div>
            <div className='badge badge-primary badge-outline'>HTML</div>
            <div className='badge badge-primary badge-outline'>CSS</div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2019 - present'
          contentStyle={{ borderRadius: borderRadius }}
          iconStyle={iconStyle}
          icon={<FaUniversity />}>
          <h3 className='text-base-100 text-lg'>Blekinge Institute of Technology</h3>
          <h4 className='text-base-200 italic'>Master of Science in IT Security</h4>
          <p>
            I am currently studying the Master of Science in IT Security at Blekinge Institute of Technology, gaining expertise in network security,
            cryptography, ethical hacking, and risk management. Equipped with a strong foundation, I am ready to contribute to cybersecurity and
            protect organizations from emerging threats
          </p>
          <div className='mt-3 md:mt-5 flex flex-wrap gap-2'>
            <div className='badge badge-primary badge-outline'>c++</div>
            <div className='badge badge-primary badge-outline'>C</div>
            <div className='badge badge-primary badge-outline'>Python</div>
            <div className='badge badge-primary badge-outline'>Math</div>
            <div className='badge badge-primary badge-outline'>Cryptography</div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work pb-10'
          date='2022'
          iconStyle={iconStyle}
          contentStyle={{ borderRadius: borderRadius }}
          icon={<IconDisplay icon={Malvacom} />}>
          <h3 className='text-base-100 text-lg'>Malvacom</h3>
          <h4 className='text-base-200 italic'>Summer internship</h4>
          <p>
            During the summer of 2022, I worked at Malvacom as a developer. Malvacom is a company that transforms business ideas and needs into
            functional and efficient solutions. <br />
            <br />
            <span className='italic'>
              "Robin has performed his assignment with us in a highly committed manner. He has independently driven the work forward and admirably
              conveyed his experiences from the summer assignment to other colleagues through a presentation at an internal seminar with us in the
              autumn of 2022."
            </span>{' '}
            - Kristina Fridensköld COO, Malvacom AB
          </p>
          <div className='mt-3 md:mt-5 flex flex-wrap gap-2'>
            <div className='badge badge-primary badge-outline'>React</div>
            <div className='badge badge-primary badge-outline'>Kubernetes</div>
            <div className='badge badge-primary badge-outline'>Django</div>
            <div className='badge badge-primary badge-outline'>Wagtail</div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Work
