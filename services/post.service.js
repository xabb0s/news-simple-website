const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

class PostService {
  async create(title, content) {
    return await prisma.post.create({
      data: {
        title: title,
        content: content
      }
    })
  }

  async getAll() {
    return await prisma.post.findMany()
  }

  async delete(id) {
    return await prisma.post.delete({
      where: {
        id: id
      }
    })
  }

  async update(id, title, content) {
    return await prisma.post.update({
      where: {
        id: id
      },
      data: {
        title: title,
        content: content
      }
    })
  }
}

module.exports = PostService