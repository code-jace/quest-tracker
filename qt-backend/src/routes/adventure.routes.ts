import { Router } from 'express';
import * as adventureController from '../controllers/adventure.controller';

const adventuresRouter = Router();

adventuresRouter.get('/', adventureController.getAdventures);
adventuresRouter.get('/:id', adventureController.getAdventureById);
adventuresRouter.post('/', adventureController.createAdventure);
adventuresRouter.put('/:id', adventureController.updateAdventure);
adventuresRouter.delete('/:id', adventureController.deleteAdventure);

export default adventuresRouter;