import { IUserRepository } from "../../../domain/interfaces/IUserRepository";

export class GetAllUsers {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    return this.userRepository.findAll();
  }
}
