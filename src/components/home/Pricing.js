import React from 'react'

function Pricing() {
    return (
        <section className="px-4 md:p-24 bg-white dark:bg-gray-400" id='Pricing'>
            <div className="container px-6 py-8 mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                            Our Plans
                        </h1>

                        <div className="flex mx-auto mt-6">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>

                    <div className="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
                        <div className="sm:-mx-0.5 flex">
                            <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">Monthly</button>
                            <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 bg-transparent rounded-lg hover:bg-gray-200">Yearly</button>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Intro</p>

                        <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$19 <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>

                        <p className="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Choose plan
                        </button>
                    </div>

                    <div className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Base</p>

                        <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$39 <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>

                        <p className="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Choose plan
                        </button>
                    </div>

                    <div className="px-6 py-4 transition-colors duration-300 transform bg-gray-700 rounded-lg dark:bg-gray-800">
                        <p className="text-lg font-medium text-gray-100">Popular</p>

                        <h4 className="mt-2 text-4xl font-semibold text-gray-100">$99 <span className="text-base font-normal text-gray-400">/ Month</span></h4>

                        <p className="mt-4 text-gray-300">For most businesses that want to optimaize web queries.</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">All limited links</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Own analytics platform</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Chat support</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Unlimited users</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Choose plan
                        </button>
                    </div>

                    <div className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Exterprise</p>

                        <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">$199 <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>

                        <p className="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Choose plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing