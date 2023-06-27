const getLocation = (location, setLocation) => {
  navigator.geolocation.getCurrentPosition((loc) =>
    setLocation({
      ...location,
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    }),
  );
};

export default getLocation;
