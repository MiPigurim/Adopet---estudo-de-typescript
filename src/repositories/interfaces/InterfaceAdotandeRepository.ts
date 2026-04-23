import AdotanteEntity from "../../entities/AdotanteEntity";
import EnderecoEntity from "../../entities/EnderecoEntity";

export default interface InterfaceAdotanteRepository {
  criaAdotante(pet: AdotanteEntity): void;
  listaAdotante(): Array<AdotanteEntity> | Promise<AdotanteEntity[]>;
  atualizaAdotante(
    id: number,
    pet: AdotanteEntity,
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaAdotante(
    id: number,
  ): Promise<{ success: boolean; message?: string }> | void;

  atualizaEnderecoAdotante(
    idAdotante: number,
    endereco: EnderecoEntity,
  ): Promise<{ success: boolean; message?: string }> | void;
}
