import React from 'react'
import ReactPlayer from 'react-player'

function ImageSection() {
    return (
        <div className='bg-soft'>
            <div className='lg:mx-auto lg:max-w-screen-2xl'>
                <div className='lg:grid lg:grid-cols-12 gap-1'>
                    <div className='col-span-3 space-y-3 px-5'>
                        <div className=''>
                            <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                                className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' />
                        </div>
                        <div className=''>
                            <img src='https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Burj Khalifa'
                                className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' />
                        </div>
                        <div className=''>
                            <img src='https://cdn.pixabay.com/photo/2021/12/22/14/55/tourists-6887737_960_720.jpg' alt='Burj Khalifa'
                                className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' />
                        </div>
                        <div className=''>
                            <img src='https://cdn.pixabay.com/photo/2020/03/11/14/32/burj-khalifa-4922317_960_720.jpg' alt='Burj Khalifa'
                                className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' />
                        </div>
                    </div>
                    <div className='col-span-9 '>
                        <div className='w-full md:h-full h-72 md:rounded-3xl overflow-hidden'>
                            {/* <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                        className='object-cover w-full h-[50vh]' /> */}
                            {/* <iframe src='https://www.youtube.com/watch?v=K4TOrB7at0Y' alt='Burj Khalifa' className='w-full h-[50vh]' /> */}
                            <ReactPlayer  width={'100%'} height={'100%'} muted playing loop url='https://www.youtube.com/watch?v=DPK3S4ZtJJI' />
                            {/* controls  playing loop */}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection