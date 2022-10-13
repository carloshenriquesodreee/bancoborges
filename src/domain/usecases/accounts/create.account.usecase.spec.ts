import { CreateAccountUseCase } from "./create.account.usecase";
import { AccountEntity } from "../../entities/accounts/account.entity";
import { AccountsRepository } from "../../../adapters/repositories/accounts.repository";
// import { ViaCepFactory } from "../../../infrastructure/apis/cep/viacepfactory.api";
// import { ApiCepFactory } from "../../../infrastructure/apis/cep/apicepfactory.api";

jest.mock("../../../adapters/repositories/clients.repository");
const AccountsRepositoryMock = AccountsRepository as jest.Mock<AccountsRepository>;

test("Teste unitário CreateAccountUseCase", async () => {

    const accountsRepository = new AccountsRepositoryMock() as jest.Mocked<AccountsRepository>;
    accountsRepository.create.mockResolvedValue({
        "balance": 0,
        "clientId": 0,
        "accountNumber": 123456,
        "transferLimit": 100,
    });


    const account: AccountEntity = {
        "balance": 0,
        "clientId": 0,
        "accountNumber": 123456,
        "transferLimit": 100
    }
        ;
    const createAccountUsecase = new CreateAccountUseCase(
        accountsRepository,
    );

    expect(await createAccountUsecase.execute(account)).toBe(account);
});