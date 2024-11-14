import { IBookRepository } from "../domain/interfaces/IBookRepository";

export class GetAllBooks {
  constructor(private bookRepository: IBookRepository) {}

  async execute() {
    return await this.bookRepository.findAll();
  }
}