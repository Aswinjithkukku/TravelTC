import React from 'react'
import banner from '../../static/images/banner.jpg'

function BlogSection() {
    return (
        <div className='my-10 lg:max-w-screen-xl lg:mx-auto'>
            <div className='space-y-5'>

                {/* <div className='text-4xl font-semibold  flex justify-start lg:mx-0 mx-5'>
                    <div className='text-darktext'>Blog</div>
                </div> */}
                <div className='space-y-3 p-5 bg-trans shadow-sm lg:rounded-2xl py-14'>
                    <div className='flex justify-between items-center'>
                        <div className='text-darktext text-3xl font-medium cursor-default'>
                            Blog
                        </div>
                        <div className='px-7 mr-2 hover:bg-soft hover:text-blue hover:border-blue hover:border bg-blue text-light shadow-sm py-2 rounded-md cursor-pointer'>View</div>
                    </div>
                    <div className=' gap-5 lg:grid grid-cols-3'>
                        <div className=' mt-2 bg-light p-3 rounded-3xl cursor-pointer'>
                            <div className=' relative'>
                                <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                                    <img className='hover:scale-110 object-cover  h-[14em] lg:[14em] w-full transition-all duration-500 cursor-pointer' src={banner} alt='Loreum' />
                                </div>
                                <div className='px-3 space-y-3 pb-5 pt-3 text-darktext'>
                                    <div className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo </div>
                                    <i className='text-bluetrans font-light text-sm '>15th April 2022</i>
                                    <div className='text-sm text-text leading-relaxed'>
                                        Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                                        Eget dolor morbi non arcu risus. Suspendisse interdum consectetur libero id faucibus.
                                        Sem et tortor consequat id porta nibh venenatis.
                                        Egestas purus viverra accumsan in nisl nisi scelerisque eu. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.
                                    </div>
                                    <div className='flex justify-end'>
                                        <button className='py-1 px-2 bg-lightblue hover:bg-blue rounded-md text-light text-sm '>Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' mt-2 bg-light p-3 rounded-3xl cursor-pointer'>
                            <div className=' relative'>
                                <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                                    <img className='hover:scale-110 object-cover  h-[14em] w-full transition-all duration-500 cursor-pointer' src={banner} alt='Loreum' />
                                </div>
                                <div className='px-3 space-y-3 pb-5 pt-3 text-darktext'>
                                    <div className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo </div>
                                    <i className='text-bluetrans font-light text-sm '>15th April 2022</i>
                                    <div className='text-sm text-text leading-relaxed'>
                                        Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                                        Eget dolor morbi non arcu risus. Suspendisse interdum consectetur libero id faucibus.
                                        Sem et tortor consequat id porta nibh venenatis.
                                        Egestas purus viverra accumsan in nisl nisi scelerisque eu. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.
                                    </div>
                                    <div className='flex justify-end'>
                                        <button className='py-1 px-2 bg-lightblue hover:bg-blue rounded-md text-light text-sm '>Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' mt-2 bg-light p-3 rounded-3xl cursor-pointer'>
                            <div className=' relative '>
                                <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                                    <img className='hover:scale-110 object-cover  h-[14em] w-full transition-all duration-500 cursor-pointer' src={banner} alt='Loreum' />
                                </div>
                                <div className='px-3 space-y-3 pb-5 pt-3 text-darktext'>
                                    <div className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo </div>
                                    <i className='text-bluetrans font-light text-sm '>15th April 2022</i>
                                    <div className='text-sm text-text leading-relaxed'>
                                        Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                                        Eget dolor morbi non arcu risus. Suspendisse interdum consectetur libero id faucibus.
                                        Sem et tortor consequat id porta nibh venenatis.
                                        Egestas purus viverra accumsan in nisl nisi scelerisque eu. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.
                                    </div>
                                    <div className='flex justify-end'>
                                        <button className='py-1 px-2 bg-lightblue hover:bg-blue rounded-md text-light text-sm '>Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection