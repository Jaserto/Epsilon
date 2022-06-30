export default function validateForm({ muscularGroup, exercise, reps, weight, series }:any) {
	if (!muscularGroup.trim()) {
		return 'Muscular group required';
	}
	/* const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; */
	if (!exercise) {
		return 'Exercise required';
	}
	if (!reps) {
		return 'Reps required';
	} else if (reps.length > 300) {
		return 'Dato incorrecto, has introducido mas de 300 reps';
	}
	if (!series) {
		return 'Series required';
	} else if (series.length > 300) {
		return 'Dato incorrecto, has introducido mas de 300 series';
	}
	if (!weight) {
		return 'Weight required';
	} else if (weight.length > 400) {
		return 'Dato incorrecto, has introducido mas de 400 kgs';
	}
	return null;
}