/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRace = /* GraphQL */ `
  mutation CreateRace(
    $input: CreateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    createRace(input: $input, condition: $condition) {
      id
      raceName
      raceDate
      firstName
      middleName
      lastName
      gender
      dateOfBirth
      email
      finishTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRace = /* GraphQL */ `
  mutation UpdateRace(
    $input: UpdateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    updateRace(input: $input, condition: $condition) {
      id
      raceName
      raceDate
      firstName
      middleName
      lastName
      gender
      dateOfBirth
      email
      finishTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRace = /* GraphQL */ `
  mutation DeleteRace(
    $input: DeleteRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    deleteRace(input: $input, condition: $condition) {
      id
      raceName
      raceDate
      firstName
      middleName
      lastName
      gender
      dateOfBirth
      email
      finishTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
