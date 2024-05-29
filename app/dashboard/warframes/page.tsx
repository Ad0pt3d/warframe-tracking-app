import { useWarframeData } from '@/app/lib/api-setup';
import WarframeCard from '@/app/ui/warframe-card'

export default async function Page() {

    useWarframeData()
    return (
        
        <>
            
            <WarframeCard />
        </>
    );
}