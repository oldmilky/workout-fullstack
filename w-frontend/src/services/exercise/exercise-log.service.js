import { $axios } from "../../api";

class ExerciseLogService {
  async getById(id) {
    return $axios.get(`/exercises/log/${id}`);
  }

  async create(exerciseId) {
    return $axios.post(`/exercises/log/${exerciseId}`);
  }

  async updateTime(timeId, body) {
    return $axios.put(`/exercises/log/time/${timeId}`, body);
  }

  async complete(id, body) {
    return $axios.patch(`/exercises/log/complete/${id}`, body);
  }
}

export default new ExerciseLogService();
