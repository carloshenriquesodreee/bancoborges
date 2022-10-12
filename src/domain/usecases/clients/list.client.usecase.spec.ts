import { ListClientUseCase } from './list.client.usecase';
import { ClientsRepository } from "../../../adapters/repositories/clients.repository";

jest.mock("../../../adapters/repositories/clients.repository");
const ClientsRepositoryMock = ClientsRepository as jest.Mock<ClientsRepository>;

test("Teste unitário ListClientUsecase", async() => {
    const clientRepository = new ClientsRepositoryMock() as jest.Mocked<ClientsRepository>;
    clientRepository.list.mockResolvedValue([]);

    const listClientUsecase = new ListClientUseCase(
        clientRepository,

    );
    expect(await listClientUsecase.execute()).toEqual([]);
})