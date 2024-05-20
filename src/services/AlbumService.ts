import { prisma } from "../database"
import { TAlbum, TCreateAlbum } from "../interfaces/album.interface";

export class AlbumService {
    public list = async () => {
        return await prisma.album.findMany();
    }

    public create = async (body: TCreateAlbum ): Promise<TAlbum> => {
        const newAlbum = await prisma.album.create({
            data: body
        })

        return newAlbum
    }

    // public update = async (id: number, data: Partial<TCreateAlbum>): Promise<TAlbum> => {
    //     const newAlbum = await prisma.album.update({
    //         where: {id}, data
    //     })

    //     return newAlbum
    // }

    // public delete = async (id: number) => {
    //     return await prisma.album.delete({
    //         where: {id}
    //     })
    // }
}
export const albumService = new AlbumService()