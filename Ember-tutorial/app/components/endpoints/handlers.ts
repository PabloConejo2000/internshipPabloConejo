import { rest, setupWorker } from "msw";


const handlers = [
    rest.get('/dogName', (req, res, ctx) => {
        debugger
        return res(ctx.json({
            name: 'Pipo',
            breed: 'Boxer',
        }))
    })

];

export const worker = setupWorker(handlers) as any


