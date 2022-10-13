import  { UpdateClientUseCase } from './update.client.usecase';
import createClientUsecase from './create.client.usecase';
import { ClientEntity } from "../../entities/clients/client.entity";
import { ClientsRepository } from "../../../adapters/repositories/clients.repository";

jest.mock("../../../adapters/repositories/clients.repository");
const ClientsRepositoryMock = ClientsRepository as jest.Mock<ClientsRepository>;

test("Teste unitário UpdateClientUsecase", async() => {
    const clientRepository = new ClientsRepositoryMock() as jest.Mocked<ClientsRepository>;
    clientRepository.updateById.mockResolvedValue({
        "cpf": 1112,
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
        "cpf": 1112,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    const client3: ClientEntity = {
        "cpf": 1112,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    const updateClientUsecase = new UpdateClientUseCase(
        clientRepository
    );
    expect(await updateClientUsecase.execute(client2)).toMatchObject(client3);
});