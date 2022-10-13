import { ReadClientUseCase } from './read.client.usecase';
import createClientUsecase from './create.client.usecase';
import { ClientEntity } from "../../entities/clients/client.entity";
import { ClientsRepository } from "../../../adapters/repositories/clients.repository";

jest.mock("../../../adapters/repositories/clients.repository");
const ClientsRepositoryMock = ClientsRepository as jest.Mock<ClientsRepository>;

test("Teste unitário ReadClientUsecase", async() => {
    const clientRepository = new ClientsRepositoryMock() as jest.Mocked<ClientsRepository>;
    clientRepository.readById.mockResolvedValue({
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
});

    const client: ClientEntity = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    await createClientUsecase.execute(client);
    const client2: ClientEntity = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    const readClientUseCase = new ReadClientUseCase(
        clientRepository
    );
    expect(await readClientUseCase.execute({ clientId: 0 })).toMatchObject(client2);
});