import React from 'react'
import ReactPlayer from 'react-player'

function ImageSection() {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-12 gap-1'>
                <div className='col-span-7 '>
                    {/* <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                        className='object-cover w-full h-[50vh]' /> */}
                        {/* <iframe src='https://www.youtube.com/watch?v=K4TOrB7at0Y' alt='Burj Khalifa' className='w-full h-[50vh]' /> */}
                        <ReactPlayer width={'100%'} height={'100%'} muted url='https://www.youtube.com/watch?v=DPK3S4ZtJJI' />
                        {/* controls  playing loop */}
                </div>
                <div className='col-span-5 lg:grid lg:grid-cols-2 gap-1'>
                    <div className=''>
                        <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                            className='object-cover w-full h-[25vh] hidden lg:block' />
                    </div>
                    <div className=''>
                        <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                            className='object-cover w-full h-[25vh] hidden lg:block' />
                    </div>
                    <div className=''>
                        <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                            className='object-cover w-full h-[25vh] hidden lg:block' />
                    </div>
                    <div className=''>
                        <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                            className='object-cover w-full h-[25vh] hidden lg:block' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection