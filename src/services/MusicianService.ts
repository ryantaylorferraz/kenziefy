import { prisma } from "../database"
import { TMusician, TMusicianPayload } from "../interfaces/musician.interface"
import { MusicianSchema } from "../schemas/musician.schema"

export class MusicianService {
    public list = async (): Promise<Array<TMusician>> => {
        return await prisma.musician.findMany()
    }

    public create = async (payload: TMusicianPayload): Promise<TMusician> => {
        const newMusician = await prisma.musician.create({
            data: {
                firstName: payload.firstName,
                lastName: payload.lastName,
                groupMembers: {
                    create: {
                        joined: payload.joined,
                        band: {
                            connect: {
                                id: payload.bandId
                            }
                        }
                    }
                }
            }
        })

        return MusicianSchema.parse(newMusician)
    }
}