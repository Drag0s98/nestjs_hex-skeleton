export class ExampleRepository {
  constructor() {} // Models injections

  async get(): Promise<[]> {
    try {
      return await new Promise(() => []);
    } catch (error) {
      throw new Error(error);
    }
  }
}
