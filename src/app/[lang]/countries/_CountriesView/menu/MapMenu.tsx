'use client';

import { PropsWithDictionary } from '@/types';
import MapMenuEntry from './MapMenuEntry';
import MapMenuGroup from './MapMenuGroup';



export default function MapMenu({ dictionary }: PropsWithDictionary<{}, any>) {
  return (
    <aside>
      <MapMenuGroup title={dictionary.governements} toggle group='gov'>
        <MapMenuEntry text={dictionary.farRightLeader} color="slate-900" />
      </MapMenuGroup>
      <MapMenuGroup title={dictionary.europeanUnion}>
        <MapMenuEntry text={dictionary.borders} borderColor="red-800" stroke="2" toggle />
      </MapMenuGroup>
    </aside>
  );
}
