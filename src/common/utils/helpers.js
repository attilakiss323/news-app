export function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getCountryFullName(country) {
  switch (country) {
    case 'us':
      return 'United States';
    case 'gb':
      return 'Great Brittain';
    default:
      return 'United States';
  }
}
