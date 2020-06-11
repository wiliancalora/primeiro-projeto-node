import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmensController from '../controllers/AppointmentsController';
import ProviderAppointmensController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmensController();
const providerController = new ProviderAppointmensController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

appointmentsRouter.get('/me', providerController.create);

export default appointmentsRouter;
