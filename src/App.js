import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <main>
                <About />
            </main>
            <Footer />
        </div>
    );
}

export default App;
