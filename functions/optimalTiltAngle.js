function calculateSolarPanelAngle(latitude, longitude, date) {
  // Convert latitude and longitude to radians
  const latRad = (latitude * Math.PI) / 180;
  const longRad = (longitude * Math.PI) / 180;

  // Calculate day of year
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.ceil((date - oneJan) / 86400000);

  // Calculate solar declination angle
  const declination = 23.45 * Math.sin((360 * (284 + dayOfYear)) / 365);

  // Calculate solar altitude angle
  const hourAngle =
    ((date.getUTCHours() + date.getUTCMinutes() / 60 - 12) * 15 * Math.PI) /
    180;
  const solarAltitude = Math.asin(
    Math.sin(latRad) * Math.sin(declination) +
      Math.cos(latRad) * Math.cos(declination) * Math.cos(hourAngle)
  );

  // Calculate solar azimuth angle
  const solarAzimuth = Math.atan2(
    Math.sin(hourAngle),
    Math.cos(hourAngle) * Math.sin(latRad) -
      Math.tan(declination) * Math.cos(latRad)
  );

  // Convert angles from radians to degrees
  const tiltAngle = (90 - (solarAltitude * 180) / Math.PI).toFixed(2);
  const direction = ((solarAzimuth * 180) / Math.PI + 180).toFixed(2);

  // Return the results
  return { tiltAngle, direction };
}

module.exports = calculateSolarPanelAngle;
