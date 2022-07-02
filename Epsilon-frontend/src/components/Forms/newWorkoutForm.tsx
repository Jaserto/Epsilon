import { useQuery, useMutation } from '@apollo/react-hooks';
import { error } from 'console';
import { useState } from 'react';
import styled from 'styled-components';
import { CREATE_WORKOUT } from '../../graphql/mutation/index';
import { Container } from '../ToggleTheme/styles';
import { FormButton, FormColumn, FormInput, FormInputRow, FormLabel, FormMessage, FormRow, FormSection, FormTitle, FormWrapper } from './styles';
import validateForm from './validateForm';



export const NewWorkoutForm = () => {
  const [muscularGroup, setMuscularGroup] = useState<string>('')
  const [exercise, setExercise] = useState<string>('')
  const [reps, setReps] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [series, setSeries] = useState<string>('')
  const [author, setAuthor] = useState<string>('62c07e976aaa93b42994228a');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');




  const [createWorkout] = useMutation(CREATE_WORKOUT)


  const handleSubmit = (e:any) => {

		e.preventDefault();
		setError('')
		setSuccess('');
		const resultError = validateForm({ muscularGroup, exercise, reps, weight, series });

		if (resultError !== null) {
			setError(resultError);
			return;
		}else{
			let workout = {
				muscularGroup, exercise, reps, weight, series, author
			  }
			  createWorkout({ variables: { workout } })
		}
    setMuscularGroup('')
    setExercise('')
    setReps('')
    setWeight('')
    setSeries('')
	setError('')
    setAuthor('62c07e976aaa93b42994228a')
	setSuccess('Workout created!');

	
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Muscular group', value: muscularGroup, onChange: (e:any) => setMuscularGroup(e.target.value), type: 'text' },
		{ label: 'Exercise', value: exercise, onChange: (e:any) => setExercise(e.target.value), type: 'text' },
		{
			label: 'Reps',
			value: reps,
			onChange: (e:any) => setReps(e.target.value),
			type: 'text',
		},
		{
			label: 'Weight',
			value: weight,
			onChange: (e:any) => setWeight(e.target.value),
			type: 'text',
		},
    {
			label: 'Series',
			value: series,
			onChange: (e:any) => setSeries(e.target.value),
			type: 'text',
		},
	];

  return (

/*     <form onSubmit={handleSubmit}>
      <input placeholder='Muscular Group' value={muscularGroup} onChange={(e:any) => setMuscularGroup(e.target.value)} />
      <input placeholder='exercise' value={exercise} onChange={(e:any)  => setExercise(e.target.value)} />
      <input placeholder="Reps" value={reps} onChange={(e:any)  => setReps(e.target.value)} />
      <input placeholder='weight' value={weight} onChange={(e:any)  => setWeight(e.target.value)} />
      <input placeholder='series' value={series} onChange={(e:any) => setSeries(e.target.value)} />
      <button>
        Add Workout
      </button>
    </form> */

    <FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>New Workout</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">Crear Workout</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>

  )


}
