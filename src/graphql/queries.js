/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRace = /* GraphQL */ `
  query GetRace($id: ID!) {
    getRace(id: $id) {
      id
      finishHour
      finishMinute
      finishSecond
      raceName
      raceDate
      firstName
      middleName
      lastName
      gender
      dateOfBirth
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRaces = /* GraphQL */ `
  query ListRaces(
    $filter: ModelRaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        finishHour
        finishMinute
        finishSecond
        raceName
        raceDate
        firstName
        middleName
        lastName
        gender
        dateOfBirth
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRaces = /* GraphQL */ `
  query SyncRaces(
    $filter: ModelRaceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        finishHour
        finishMinute
        finishSecond
        raceName
        raceDate
        firstName
        middleName
        lastName
        gender
        dateOfBirth
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
