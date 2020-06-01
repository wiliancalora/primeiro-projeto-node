import handlebars from 'handlebars';
import IParseMailTemplateDTO from '../dtos/IParseMailTemplaDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class HandlebarsTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);
    return parseTemplate(variables);
  }
}

export default HandlebarsTemplateProvider;
