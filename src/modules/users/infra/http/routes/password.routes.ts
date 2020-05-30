import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPassowordController = new ResetPasswordController();

passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPassowordController.create);

export default passwordRouter;
