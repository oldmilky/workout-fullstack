import { $axios } from "../../api";

class ExerciseService {
  async getAll() {
    return $axios.get(`/exercises`);
  }

  async create(body) {
    return $axios.post(`/exercises`, body);
  }

  async update(id, body) {
    return $axios.put(`/exercises/${id}`, body);
  }

  async delete(id) {
    return $axios.delete(`/exercises/${id}`);
  }
}

export default new ExerciseService();
