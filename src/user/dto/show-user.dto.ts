export class ShowUserFullDto {
  id: number;
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  dateCreated: Date;
  dateUpdated: Date;

  // virtual
  quotes?: any[];
}

export class ShowUserDefaultDto {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  dateCreated: Date;

  // virtual
  quotes?: any[];
}

export function makeUserDefaultFromUserFull(
  usr: ShowUserFullDto,
): ShowUserDefaultDto {
  return {
    id: usr.id,
    email: usr.email,
    username: usr.username,
    firstName: usr.firstName,
    lastName: usr.lastName,
    dateCreated: usr.dateCreated,
  };
}
