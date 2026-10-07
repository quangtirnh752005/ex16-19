import React, { useState } from 'react';
import EventHandlingDemo from './Component/EventHandlingDemo';
import RenderAndCommitDemo from './Component/RenderAndCommitDemo';
import SnapshotDemo from './Component/SnapshotDemo';
import AnimalList from './Component/AnimalList';

function App() {
  const [exercise, setExercise] = useState(16);

  return (
    <React.StrictMode>
      <button onClick={() => setExercise(16)}>Bài 16</button>
      <button onClick={() => setExercise(17)}>Bài 17</button>
      <button onClick={() => setExercise(18)}>Bài 18</button>
      <button onClick={() => setExercise(19)}>Bài 19</button>

      {exercise === 16 && <EventHandlingDemo />}
      {exercise === 17 && <RenderAndCommitDemo />}
      {exercise === 18 && <SnapshotDemo />}
      {exercise === 19 && <AnimalList />}
    </React.StrictMode>
  );
}

export default App;
