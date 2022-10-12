import { DeleteClientUseCase } from './delete.client.usecase';
import { ClientsRepository } from "../../../adapters/repositories/clients.repository";


jest.mock("../../../adapters/repositories/clients.repository");
const ClientsRepositoryMock = ClientsRepository as jest.Mock<ClientsRepository>;

test("Teste unitário DeleteClientUsecase", async() => {
    const clientRepository = new ClientsRepositoryMock() as jest.Mocked<ClientsRepository>;
    clientRepository.deleteById.mockResolvedValue(undefined);
    const client = {
        clientId: 0
    };
 
    const deleteClientUsecase = new DeleteClientUseCase(
        clientRepository,

    );

    expect(await deleteClientUsecase.execute(client)).toBeUndefined();
});