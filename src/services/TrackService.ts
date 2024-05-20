import { prisma } from "../database"
import { TTrack, TCreateTrack, TcreateAlbumTrack } from "../interfaces/track.interface";
import { createAlbumTrack, trackSchema } from "../schemas/track.schema";

export class trackService {
    public list = async () => {
        return await prisma.track.findMany();
    }

    public create = async (body: TCreateTrack ): Promise<TTrack> => {
        const newTrack = await prisma.track.create({ data: body })

        return trackSchema.parse(newTrack);
    }

    public listByAlbumId = async (albumId: number): Promise<Array<TTrack>>  => {
        const listTrack = await prisma.track.findMany({
            where: { albumId: albumId }
        })

        return trackSchema.array().parse(listTrack)
    }

    public retrieve = async (trackId: number): Promise<TcreateAlbumTrack> => {
        const track = await prisma.track.findUnique({
            where: {id: trackId}, include: {album: true}
        })

        return createAlbumTrack.parse(track)
    }
}