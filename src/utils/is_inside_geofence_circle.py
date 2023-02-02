import math

def is_inside_geofence_circle(location, circle):
    radius = circle["radius"]
    center = circle["center"]

    # Convert the latitudes and longitudes from degrees to radians
    lat1 = center["latitude"] * (math.pi / 180)
    lon1 = center["longitude"] * (math.pi / 180)
    lat2 = location["latitude"] * (math.pi / 180)
    lon2 = location["longitude"] * (math.pi / 180)

    # Calculate the distance using the Haversine formula
    a = (math.sin((lat2 - lat1) / 2)**2) + (math.cos(lat1) * math.cos(lat2) * (math.sin((lon2 - lon1) / 2)**2))
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    distance = 6371 * c * 1000 # 6371 is the radius of the Earth in kilometers

    return distance < radius

#example:
location = { "latitude": 37.7749, "longitude": -122.4194 }
circle = {
  "center": { "latitude": 37.7847, "longitude": -122.4231 },
  "radius": 5000,
}

print(is_inside_geofence_circle(location, circle))
