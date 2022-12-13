import React from 'react'

function ImageSection() {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-12 gap-1'>
                <div className='col-span-7'>
                    <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                        className='object-cover w-full h-[50vh]' />
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