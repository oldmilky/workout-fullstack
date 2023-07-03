import { $axios } from "../../api";

class WorkoutLogService {
	async getById(id) {
		return $axios.get(`/workouts/log/${id}`)
	}

	async create(workoutId) {
		return $axios.post(`/workouts/log/${workoutId}`)
	}

	async complete(id) {
		return $axios.patch(`/workouts/log/complete/${id}`)
	}
}

export default new WorkoutLogService()
