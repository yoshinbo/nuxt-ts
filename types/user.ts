export default interface User {
  id: number;
  name: string;
  status: UserStatus;
}

export enum UserStatus {
  PROVISIONAL = "provisional",
  PROVISIONAL_REGISTERED_INFO = "provisional_registered_info",
  ACTIVE = "active",
  INACTIVE = "inactive"
}
