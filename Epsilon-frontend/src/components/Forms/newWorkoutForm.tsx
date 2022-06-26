import { useQuery, useMutation } from '@apollo/react-hooks';
import { useState } from 'react';
import { CREATE_WORKOUT } from '../../graphql/mutation/index';



export const NewWorkoutForm = () =>{
    const [muscularGroup, setMuscularGroup] = useState('')
    const [exercise , setExercise] = useState('')
    const [reps , setReps] = useState('')
    const [weight , setWeight] = useState('')
    const [series , setSeries] = useState('')
    const [ author , setAuthor] = useState('62b231e44f020b1c9f2be342');
    
    const handleSubmit = (e:any) => {
      e.preventDefault()
      let workout = {
        muscularGroup, exercise, reps, weight, series, author
      }
      createWorkout({ variables: {workout} })
      
      setMuscularGroup('')
      setExercise('')
      setReps('')
      setWeight('')
      setSeries('')
      setAuthor('62b231e44f020b1c9f2be342')
    }
    
    const [ createWorkout ] = useMutation(CREATE_WORKOUT)
     
    return (
        <form onSubmit={handleSubmit}>

                    <input placeholder='Muscular Group' value={muscularGroup} onChange={e => setMuscularGroup(e.target.value)}/>
   
                    <input placeholder='exercise' value={exercise} onChange={e => setExercise(e.target.value)}/>
       
                    <input placeholder="Reps" value={reps} onChange={e => setReps(e.target.value)}/>
         
                    <input placeholder='weight' value={weight} onChange={e => setWeight(e.target.value)}/>

                    <input placeholder='series' value={series} onChange={e => setSeries(e.target.value)}/>
                    <button>
                      Add Workout
                    </button>
                </form> 
    )


}
