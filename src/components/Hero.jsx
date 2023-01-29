import { setGlobalState, useGlobalState } from '../store'
import i1 from '../images/i1.jpeg'

const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className='flex flex-row justify-center py-20'>
      <div className='w-1/2'>
        <img src={i1} alt="" srcset="" />
      </div>
      <div className='w-1/2'>
        <div className='flex flex-col pr-48 pl-6 pt-12 '>
          <div className='py-6'>
            <span className='text-gray-700 font-bold text-3xl'>It’s easier to take than to give. It’s nobler to give than to take.</span>
          </div>
          <div className='flex flex-row justify-between py-6 '>
            <div className='flex flex-col'>
              <span className='text-cyan-400 text-5xl '> {stats?.totalProjects || 0}</span>
              <span className='text-gray-500 text-xl font-semibold'>Fundraisers</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-cyan-400 text-5xl '>{stats?.totalDonations || 0} ETH</span>
              <span className='text-gray-500 text-xl font-semibold'>Raised</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-cyan-400 text-5xl '>{stats?.totalBacking || 0}</span>
              <span className='text-gray-500 text-xl font-semibold'>Donors</span>
            </div>
          </div>
          <div className='pt-6'>
            <span className='text-xl text-gray-500 font-bold '>Help takes 0% platform fees</span>
          </div>
          <div className='py-6'>
            <button type="button" class="text-white bg-cyan-400 hover:bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" onClick={() => setGlobalState('createModal', 'scale-100')}>Start a Fundraiser</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
