'use client';

import { PropsWithDictionary } from '@/types';
import MapMenuEntry from './MapMenuEntry';
import MapMenuGroup from './MapMenuGroup';



export default function MapMenu({ dictionary }: PropsWithDictionary<{}, any>) {
  return (
    <>
      <MapMenuGroup title={dictionary.governements} toggle group='gov' dictionary={dictionary}>
        <MapMenuEntry text={dictionary.farRightLeader} color="slate-900" />
      </MapMenuGroup>
      <MapMenuGroup title={dictionary.europeanUnion} dictionary={dictionary}>
        <MapMenuEntry text={dictionary.borders} borderColor="red-800" stroke="2" toggle />
      </MapMenuGroup>
    </>
  );
}
