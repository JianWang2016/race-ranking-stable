function convertToSeconds(timeString) {
  if (!timeString) return 0;

  const parts = timeString.split(":").map((part) => parseInt(part) || 0);
  let [hours = 0, minutes = 0, seconds = 0] = parts;

  return hours * 3600 + minutes * 60 + seconds;
}

function getFullName(firstName, lastName, middleName) {
  let fullName = firstName + " " + lastName;

  if (middleName) {
    fullName = firstName + " " + middleName + " " + lastName;
  }
  return fullName;
}

function getAge(birthDate, referenceDate) {
  let ageInMilliseconds = referenceDate - birthDate;
  let ageInSeconds = ageInMilliseconds / 1000;
  let ageInMinutes = ageInSeconds / 60;
  let ageInHours = ageInMinutes / 60;
  let ageInDays = ageInHours / 24;
  let ageInYears = ageInDays / 365.25;

  return Math.floor(ageInYears);
}

function getAgeGroup(age) {
  let ageGroup = "";

  if (age < 18) {
    ageGroup = "<18";
  } else if ((age >= 18) & (age <= 29)) {
    ageGroup = "18-29";
  } else if ((age >= 30) & (age <= 39)) {
    ageGroup = "30-39";
  } else if ((age >= 40) & (age <= 49)) {
    ageGroup = "40-49";
  } else if ((age >= 50) & (age <= 59)) {
    ageGroup = "50-59";
  } else if ((age >= 60) & (age <= 69)) {
    ageGroup = "60-69";
  } else if ((age >= 70) & (age <= 79)) {
    ageGroup = "70-79";
  } else if ((age >= 80) & (age <= 89)) {
    ageGroup = "80-89";
  } else ageGroup = "90-100";

  return ageGroup;
}

function getAgeGroup2(age) {
  if (age < 18) return "<18";
  if (age < 30) return "18-29";
  if (age < 40) return "30-39";
  if (age < 50) return "40-49";
  if (age < 60) return "50-59";
  if (age < 70) return "60-69";
  if (age < 80) return "70-79";
  if (age < 90) return "80-89";
  return "90-100";
}

function getAgeGroup3(age) {
  let ageGroup = "";

  switch (true) {
    case age < 18:
      ageGroup = "<18";
      break;
    case age >= 18 && age <= 29:
      ageGroup = "18-29";
      break;
    case age >= 30 && age <= 39:
      ageGroup = "30-39";
      break;
    case age >= 40 && age <= 49:
      ageGroup = "40-49";
      break;
    case age >= 50 && age <= 59:
      ageGroup = "50-59";
      break;
    case age >= 60 && age <= 69:
      ageGroup = "60-69";
      break;
    case age >= 70 && age <= 79:
      ageGroup = "70-79";
      break;
    case age >= 80 && age <= 89:
      ageGroup = "80-89";
      break;
    default:
      ageGroup = "90-100";
  }

  return ageGroup;
}

function ProcessData(data) {
  data.map((item) => {
    item["finishTimeInSecond"] = convertToSeconds(item.finishTime);

    item["runnerName"] = getFullName(
      item.firstName,
      item.lastName,
      item.middleName
    );

    //let userDob = moment(item.dateOfBirth.toString());
    //item["age"] = moment().diff(userDob, "years");
    item["age"] = getAge(
      Date.parse(item.dateOfBirth),
      Date.parse(item.raceDate)
    );
    item["ageGroup"] = getAgeGroup(item.age);
  });

  return data;
}

export default ProcessData;
