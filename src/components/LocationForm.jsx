const LocationForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="bg-gray-800 text-white rounded-md p-2 mr-2 border border-green-500 w-48"
        min={1}
        id="newLocation"
        max={126}
        placeholder="Type a location id ..."
        type="number"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
        Search
      </button>
    </form>
  );
};

export default LocationForm;
