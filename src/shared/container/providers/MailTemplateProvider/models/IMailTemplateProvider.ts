import IParseMailTemplateDTO from '../dtos/IParseMailTemplaDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
