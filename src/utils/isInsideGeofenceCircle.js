export function isInsideGeofenceCircle(location, circle) {
  const radius = circle.radius;
  const center = circle.center;

  // Convert the latitudes and longitudes from degrees to radians
  const lat1 = center.latitude * (Math.PI / 180);
  const lon1 = center.longitude * (Math.PI / 180);
  const lat2 = location.latitude * (Math.PI / 180);
  const lon2 = location.longitude * (Math.PI / 180);

  // Calculate the distance using the Haversine formula
  const a =
    Math.pow(Math.sin((lat2 - lat1) / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin((lon2 - lon1) / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = 6371 * c * 1000; // 6371 is the radius of the Earth in kilometers

  return distance < radius;
}

//example:
const location = { latitude: 37.7749, longitude: -122.4194 };
const circle = {
  center: { latitude: 37.7847, longitude: -122.4231 },
  radius: 5000,
};

console.log(isInsideGeofenceCircle(location, circle));
