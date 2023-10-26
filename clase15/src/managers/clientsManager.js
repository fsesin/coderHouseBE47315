import { clientsModel } from "../db/models/clients.model.js";

class ClientsManager {
  async findAggre() {
    const response = await clientsModel.aggregate([
      {
        $match: {
          $and: [{ calificacion: { $gt: 4, $lt: 10 } }],
        },
      },
      {
        $group: {
          _id: "$gender",
          clients_count: { $count: {} },
          prom_calificacion: { $avg: "$calificacion" },
        },
      },
      {
        $match: {
          clients_count: { $gte: 2 },
        },
      },
      { $sort: { prom_calificacion: 1 } },
    ]);

    return response;
  }
}

export const clientsManager = new ClientsManager();
