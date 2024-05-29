import Image from 'next/image';

export default function WeaponCard() {
    return (
        <div className="grid grid-cols-5 gap-6 text-center">
            <div className="bg-sky-500 py-4 rounded-md">
                <h3>Acceltra</h3>
                <div className="flex justify-center items-center my-4">
                    <Image 
                        src="https://static.wikia.nocookie.net/warframe/images/1/19/Acceltra.png/revision/latest?cb=20220406233058"
                        width={256}
                        height={256}
                        className="bg-gray-600 rounded-md"
                        alt="Image of Acceltra from Warframe"
                    />
                </div>
                <div className='grid grid-rows-3 grid-flow-col gap-4'>
                    <div>Total Damage: 70</div>
                    <div>Mag Size: 48</div>
                    <div className="col-span-2">
                        <a href="https://warframe.fandom.com/wiki/Acceltra" target="_blank" className="text-red-600 font-bold">
                            Wiki Link
                        </a>
                    </div>
                    <div>Reload Time: 2</div>
                    <div>Fire Rate: 12</div>
                </div>
            </div>
        </div>
    );
}