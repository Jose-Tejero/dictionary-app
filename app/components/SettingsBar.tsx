export default function SettingsBar() {
  return (
    <div className="flex items-center justify-center">
      <button className="rounded-lg shadow-lg p-2 bg-blue-500 text-white">
        Historial
      </button>
      <button className="rounded-lg shadow-lg p-2 bg-blue-500 text-white">
        Selector de fuente
      </button>
      <button className="rounded-lg shadow-lg p-2 bg-blue-500 text-white">
        Light/Dark
      </button>
    </div>
  );
}