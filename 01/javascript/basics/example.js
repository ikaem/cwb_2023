function main() {
  // names
  const name = 'karlo';
  const lastName = 'marinović';

  // age
  const yearOfBirth = 1985;

  // calculations
  const nowDate = new Date();
  const nowYear = nowDate.getFullYear();

  const karloAge = nowYear - yearOfBirth;

  const fullName = `${name} ${lastName}`;

  console.log(`my name is ${fullName}, and I am ${karloAge}`);

  if (karloAge > 40) {
    console.log('...');
  }
}

main();
