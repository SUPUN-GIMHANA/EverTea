import { useState } from 'react';

export const useAppLogic = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoalArray] = useState([]);

  const inputGoal = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoal = () => {
    if (enteredGoalText.trim() === '') return; // Prevent adding empty goals
    setCourseGoalArray((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText(''); // Clear the input after adding a goal
  };

  return {
    enteredGoalText,
    courseGoals,
    inputGoal,
    addGoal,
  };
};