import React from 'react';

const PolicyFeatures = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <img
                            src="/assets/exchange.png"
                            alt="Exchange Policy Icon"
                            className="w-8 h-8"
                        />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Easy Exchange Policy</h3>
                    <p className="mt-2 text-sm text-gray-500">We offer hassle free exchange policy</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <img
                            src="/assets/return.png"
                            alt="Return Policy Icon"
                            className="w-8 h-8"
                        />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">7 Days Return Policy</h3>
                    <p className="mt-2 text-sm text-gray-500">We provide 7 days free return policy</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <img
                            src="/assets/support.png"
                            alt="Customer Support Icon"
                            className="w-8 h-8"
                        />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Best customer support</h3>
                    <p className="mt-2 text-sm text-gray-500">We provide 24/7 customer support</p>
                </div>
            </div>
        </div>
    );
};

export default PolicyFeatures;