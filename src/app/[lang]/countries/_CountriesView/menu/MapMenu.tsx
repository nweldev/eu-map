'use client';

import { PropsWithDictionary } from '@/types';
import MapMenuEntry from './MapMenuEntry';
import MapMenuGroup from './MapMenuGroup';



export default function MapMenu({ dictionary }: PropsWithDictionary<{}, any>) {
  return (
    <>
      <MapMenuGroup title={dictionary.governments} toggle group='gov' dictionary={dictionary}>
        <MapMenuEntry text={dictionary.farRightLeader} color="blue-800" darkColor='blue-950' />
        <MapMenuEntry text={dictionary.catchAllLeader} color="yellow-400" />
      </MapMenuGroup>
      <MapMenuGroup title={dictionary.europeanUnion} dictionary={dictionary}>
        <MapMenuEntry text={dictionary.borders} borderColor="red-800" stroke="2" toggle />
      </MapMenuGroup>
    </>
  );
}
