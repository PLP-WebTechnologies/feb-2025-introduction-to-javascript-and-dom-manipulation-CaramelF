const exercises = ['Jumping Jacks', 'Push Ups', 'Squats', 'Lunges', 'Plank'];
let currentExerciseIndex = 0;

// Change workout status and update styles
function startWorkout() {
  const status = document.getElementById('status');
  status.textContent = 'Workout in Progress!';
  status.style.color = 'orangered';
  status.style.fontStyle = 'italic';
}

// Add or remove the exercise box
function toggleExercise() {
  const box = document.getElementById('exerciseBox');

  if (box) {
    box.remove();
  } else {
    const newBox = document.createElement('div');
    newBox.id = 'exerciseBox';
    newBox.textContent = exercises[currentExerciseIndex];
    Object.assign(newBox.style, {
      width: '250px',
      height: '120px',
      backgroundColor: '#90ee90',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
      borderRadius: '10px',
      fontWeight: 'bold',
      fontSize: '20px'
    });
    document.body.insertBefore(newBox, document.querySelector('button'));
  }
}

// Cycle to the next exercise
function nextExercise() {
  const box = document.getElementById('exerciseBox');
  if (box) {
    currentExerciseIndex = (currentExerciseIndex + 1) % exercises.length;
    box.textContent = exercises[currentExerciseIndex];
  } else {
    alert('No exercise box found. Click "Toggle Exercise" to add it.');
  }
}

// Reset everything to initial state
function resetWorkout() {
  const status = document.getElementById('status');
  status.textContent = 'Ready to Workout!';
  status.style.color = 'green';
  status.style.fontStyle = 'normal';

  const box = document.getElementById('exerciseBox');
  if (!box) {
    toggleExercise(); // Re-add box if removed
  } else {
    box.textContent = exercises[0];
  }
  currentExerciseIndex = 0;
}
