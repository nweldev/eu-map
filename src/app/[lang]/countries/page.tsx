import EuropeMap from './_map/EuropeMap';
import MapMenu from './_menu/MapMenu';

export default function Countries() {
  return (
    <div className="min-h-screen w-full flex flex-row">
      <div className="grow shrink min-w-[350px] bg-zinc-900 mr-4 p-4">
        <MapMenu />
      </div>
      <div className="flex item-center relative basis-full">
        <EuropeMap />
      </div>
    </div>
  );
}
