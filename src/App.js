import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Modal from './components/Modal';

function App() {
  const [openModal, setOpenModal] = React.useState(true)
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default App;