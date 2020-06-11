import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProvidersMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProvidersDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providerRouter = Router();
const providersController = new ProvidersController();
const providersMonthAvailabilityController = new ProvidersMonthAvailabilityController();
const providersDayAvailabilityController = new ProvidersDayAvailabilityController();

providerRouter.use(ensureAuthenticated);

providerRouter.get('/', providersController.index);
providerRouter.get(
  '/:provider_id/month-availability',
  providersMonthAvailabilityController.index,
);
providerRouter.get(
  '/:provider_id/day-availability',
  providersDayAvailabilityController.index,
);

export default providerRouter;
