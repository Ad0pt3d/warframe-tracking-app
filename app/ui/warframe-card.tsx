import Image from 'next/image';
import { Button } from '@/app/ui/button'

export default function WarframeCard() {
    return (
        <div className="grid grid-cols-5 gap-6 text-center">
            <div className="bg-sky-500 py-4 rounded-md">
                <h3 className="text-xl font-bold underline my-2">Ash</h3>
                <div className="flex justify-center items-center">
                    <Image 
                        src="https://static.wikia.nocookie.net/warframe/images/b/b1/Ash.png/revision/latest?cb=20221110220051"
                        width={256}
                        height={256}
                        className="bg-gray-600 rounded-md"
                        alt="Image of Ash from Warframe"
                    />
                </div>
                <div>
                    <Button />
                </div>
                <div className='grid grid-rows-3 grid-flow-col gap-4'>
                    <div>Health: 455</div>
                    <div>Shield: 270</div>
                    <div className="col-span-2">
                        <a href="https://warframe.fandom.com/wiki/Ash" target="_blank" className="text-red-600 font-bold">
                            Wiki Link
                        </a>
                    </div>
                    <div>Energy: 100</div>
                    <div>Armor: 105</div>
                </div>
            </div>
        </div>
    );
}