import {CardUsageExample} from '@/components/CardStat';
import { AreaChartUsageExample } from '@/components/areaChart';
import { ListUsageExample } from '@/components/listStat';
import { TableHero } from '@/components/tabla';
import { Card } from '@tremor/react';
function Page(){
  return (
    <div className='container mx-auto pt-10'>
    <div className='grid grid-cols-3 gap-4'>
      <CardUsageExample />
      <CardUsageExample />
      <CardUsageExample />

      <CardUsageExample />
      <CardUsageExample />
      <CardUsageExample />
    </div>
    <div className='grid grid-cols-4 mt-10'>
      <div className='col-span-2' >
      <ListUsageExample/>
      <div className='mx-auto pt-10'>
       <Card> <TableHero/></Card>
      </div>
      </div>
      <div className='col-span-2 px-7'>
        <Card>
          <AreaChartUsageExample/>
        </Card>
      
      </div>
    </div>
    </div>
  )
}

export default Page