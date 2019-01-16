import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, user) => {
	return res.send(req.context.models[req.params.userId]);
});

export default router;