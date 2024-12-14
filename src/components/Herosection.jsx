import React from 'react';

const categories = [
    { name: 'Mobiles', imgSrc: 'https://storage.googleapis.com/a1aa/image/OfpPuATbyWQVEaAVEAfKSMad2692HVkJXEsJTG3kDp4iHw6TA.jpg', alt: 'Image of a mobile phone' },
    { name: 'Wireless Earbuds', imgSrc: 'https://storage.googleapis.com/a1aa/image/xhcdqlyCbJI2M9zxTyRneR47h53efCVH7Zbnpya56TELPg1nA.jpg', alt: 'Image of wireless earbuds' },
    { name: 'Smart Watches', imgSrc: 'https://storage.googleapis.com/a1aa/image/utsQhBOIWO5vGZ1XeojB62JLcG58ALvfxXdcTYCMwLxhHw6TA.jpg', alt: 'Image of a smart watch' },
    { name: 'Trimmers Shaver', imgSrc: 'https://storage.googleapis.com/a1aa/image/OmSvOk3QzyYXGJz8eR9Ot76jGDfA2kugDa24bNzML9ifOg1nA.jpg', alt: 'Image of a trimmer or shaver' },
    { name: 'Power Banks', imgSrc: 'https://storage.googleapis.com/a1aa/image/nOIf516sZfro1kT6h1XTvMfr5zkzLqUcKWOQrSBWcBE3Og1nA.jpg', alt: 'Image of power banks' },
    { name: 'Wall Chargers', imgSrc: 'https://storage.googleapis.com/a1aa/image/Tf57OUaPApTRMCxJV88R5sbtpvEsEBTqgsIxYwePbheGPg1nA.jpg', alt: 'Image of a wall charger' },
    { name: 'Bluetooth Speakers', imgSrc: 'https://storage.googleapis.com/a1aa/image/SwNCezzBKXRBbKl5HlITP2XPdkuXdx6T5kVTIxsho7zuDY9JA.jpg', alt: 'Image of Bluetooth speakers' },
    { name: 'Tablets', imgSrc: 'https://storage.googleapis.com/a1aa/image/sfuYFIAtpt2oCqZNDfdOXlwVUoQmhxe3z489Uf0WgYj5dArPB.jpg', alt: 'Image of a tablet' },
    { name: '', imgSrc: 'https://storage.googleapis.com/a1aa/image/obBu6rwEE95QOd2ezgAPxoXaC5NHarhLAb0plDYIZgTuDY9JA.jpg', alt: 'Arrow icon' }
];

const Herosection = () => (
    <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl text-center font-bold mb-8">Our Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img src={category.imgSrc} alt={category.alt} className="w-16 h-16 mb-4" />
                        {category.name && <span className="text-sm text-gray-700">{category.name}</span>}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Herosection;
