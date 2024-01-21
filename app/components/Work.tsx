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
    primary: '#488ccb',
    'base-100': '#0b101a'
  }

  const iconStyle = { background: colors['base-100'], color: '#fff' }
  const borderRadius = 15
  return (
    <div className='relative px-2 md:px-10 pt-20' id='work'>
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
          <p className='text-base-200'>I specialized in Mathematics and Programming and this was where my passion for programming was born</p>
          <div className='mt-3 md:mt-5 flex flex-wrap gap-2'>
            <div className='badge badge-primary badge-outline'>PHP</div>
            <div className='badge badge-primary badge-outline'>HTML</div>
            <div className='badge badge-primary badge-outline'>CSS</div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2019 - 2024'
          contentStyle={{ borderRadius: borderRadius }}
          iconStyle={iconStyle}
          icon={<FaUniversity />}>
          <h3 className='text-base-100 text-lg'>Blekinge Institute of Technology</h3>
          <h4 className='text-base-200 italic'>Master of Science in IT Security</h4>
          <p className='text-base-200'>
            I am presently enrolled in the Master of Science program in IT 
            Security at Blekinge Institute of Technology. Through this program, 
            I am acquiring in-depth knowledge in various aspects of 
            cybersecurity, including network security, cryptography, ethical hacking, 
            and risk management. With a solid foundation in these areas, I am well-prepared to 
            make meaningful contributions to the field of cybersecurity and play a 
            crucial role in safeguarding organizations from emerging threats.
          </p>
          <div className='mt-3 md:mt-5 flex flex-wrap gap-2'>
            <div className='badge badge-primary badge-outline'>c++</div>
            <div className='badge badge-primary badge-outline'>C</div>
            <div className='badge badge-primary badge-outline'>Python</div>
            <div className='badge badge-primary badge-outline'>Math</div>
            <div className='badge badge-primary badge-outline'>Cryptography</div>
            <div className='badge badge-primary badge-outline'>Git</div>
            <div className='badge badge-primary badge-outline'>Scrum & Agile planning</div>
            <div className='badge badge-primary badge-outline'>x86 - asm</div>
            <div className='badge badge-primary badge-outline'>Reverse engineering </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work pb-10'
          date='2022 & 2023'
          iconStyle={iconStyle}
          contentStyle={{ borderRadius: borderRadius }}
          icon={<IconDisplay icon={Malvacom} />}>
          <h3 className='text-base-100 text-lg'>Malvacom</h3>
          <h4 className='text-base-200 italic'>Summer internship</h4>
          <p className='text-base-200'>
            During the summer of 2022 and 2023, I worked at Malvacom as a developer. Malvacom is a company that transforms business ideas and needs into
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
            <div className='badge badge-primary badge-outline'>Kubernetes & Docker</div>
            <div className='badge badge-primary badge-outline'>Django</div>
            <div className='badge badge-primary badge-outline'>Wagtail</div>
            <div className='badge badge-primary badge-outline'>Typescript</div>
            <div className='badge badge-primary badge-outline'>Azure</div>
            <div className='badge badge-primary badge-outline'>AWS</div>
            <div className='badge badge-primary badge-outline'>Express</div>
            <div className='badge badge-primary badge-outline'>PostgresQL</div>
            <div className='badge badge-primary badge-outline'>Prisma</div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <div className='absolute -bottom-[50%] -left-[50%] w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent' />
    </div>
  )
}

export default Work
