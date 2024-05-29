import React, { useState } from 'react';
import '../styles/PatientInterface.css';

const PatientSupportCommunity = () => {
    // Dummy data for demonstration
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [otherQuestionsVisibility, setOtherQuestionsVisibility] = useState(true);

    const questions = [
        { id: 1, question: 'How to manage stress?' },
        { id: 2, question: 'What are the symptoms of flu?' },
        { id: 3, question: 'Tips for healthy eating?' }
    ];

    const answers = [
        { id: 1, answer: 'Practice deep breathing and meditation techniques.' },
        { id: 1, answer: 'Engage in regular physical activity.' },
        { id: 1, answer: 'Get enough sleep and maintain a healthy diet.' },
        { id: 2, answer: 'Common symptoms include fever, cough, and body aches.' },
        { id: 2, answer: 'Fatigue and sore throat are also common symptoms.' },
        { id: 3, answer: 'Consume a balanced diet with plenty of fruits and vegetables.' },
        { id: 3, answer: 'Limit processed foods and added sugars.' }
    ];

    const handleViewAnswers = (questionId) => {
        const selectedQues = questions.find((ques) => ques.id === questionId);
        setSelectedQuestion(selectedQues);
        setOtherQuestionsVisibility(false);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedQuestion(null);
        setOtherQuestionsVisibility(true);
        setModalOpen(false);
    };

    const handlePostQuestion = () => {
        // Logic for posting a question
        console.log('Question posted');
    };

    const handleAnswerQuestion = (questionId) => {
        // Logic for answering a question
        console.log(`Answering question ${questionId}`);
    };

    const handleModalContentClick = (e) => {
        e.stopPropagation(); // Prevent event propagation
      };
      
    return (
        <div className="patientsp-support-community">
            <h2>Support Community</h2>
            <div className="patientsp-questions-container">
                {questions.map((ques) => (
                    <div key={ques.id} className={`patientsp-question ${!otherQuestionsVisibility ? 'hidden' : ''}`}>
                        <p>{ques.question}</p>
                        <button onClick={() => handleViewAnswers(ques.id)}>View Answers</button>
                    </div>
                ))}
              
            </div>
            <div id='qs'>
                    <div className="patientsp-question">
                        <textarea placeholder="Ask a question..." />
                        <button onClick={handlePostQuestion}>Post Question</button>
                    </div>
                </div>

            {modalOpen && selectedQuestion && (
                <div className="patientsp-modal-overlay" onClick={handleCloseModal}>
                    <div className="patientsp-modal-content"  onClick={handleModalContentClick}>
                        <h3>{selectedQuestion.question}</h3>
                        <ul>
                            {answers
                                .filter((ans) => ans.id === selectedQuestion.id)
                                .map((ans, index) => (
                                    <li key={index}>{ans.answer}</li>
                                ))}
                        </ul>
                        <textarea placeholder="Your answer..." />
                        <div className='md'>
                            <button onClick={() => handleAnswerQuestion(selectedQuestion.id)}>Submit Answer</button>
                            <button onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PatientSupportCommunity;
