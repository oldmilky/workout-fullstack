import { $axios } from "../../api";

class WorkoutService {
  async getAll() {
    return $axios.get(`/workouts`);
  }

  async getById(id) {
    return $axios.get(`/workouts/${id}`);
  }

  async create(body) {
    return $axios.post(`/workouts`, body);
  }

  async update(id, body) {
    return $axios.put(`/workouts/${id}`, body);
  }

  async delete(id) {
    return $axios.delete(`/workouts/${id}`);
  }
}

export default new WorkoutService();
