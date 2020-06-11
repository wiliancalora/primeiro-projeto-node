import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderdayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProvider = container.resolve(ListProviderDayAvailabilityService);

    const availability = await listProvider.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
