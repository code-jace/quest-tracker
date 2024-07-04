import { Router } from 'express';
import * as questController from '../controllers/quest.controller';

const questsRouter = Router();

questsRouter.get('/', questController.getQuests);
questsRouter.get('/:id', questController.getQuestById);
questsRouter.post('/', questController.createQuest);
questsRouter.put('/:id', questController.updateQuest);
questsRouter.delete('/:id', questController.deleteQuest);

export default questsRouter;
