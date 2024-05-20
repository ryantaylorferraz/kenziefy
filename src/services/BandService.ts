import { injectable } from "tsyringe";
import { prisma } from "../database"
import { IBandService, TBand, TCreateBand } from "../interfaces/band.interface";


@injectable()
export class BandService implements IBandService {
    public list = async (): Promise<Array<TBand>> => {
        return await prisma.band.findMany();
    }

    public create = async (body: TCreateBand ): Promise<TBand> => {
        const newBand = await prisma.band.create({
            data: body
        })

        return newBand
    }
}