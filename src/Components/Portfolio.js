import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Here are some of my latest works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/praneeth200219/Multi-Camera-Multiple-Object-Tracking-for-CPU.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/061.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Multi-Camera Multiple Object Tracking and ReIdentification</h3>
                      <p>The task of MCMOT involves the tracking of different moving objects and their re-identification across different camera angles. Object Tracking was performed using YOLO v3. Re-Identification was performed by a PyTorch library named "Torchreid" and an accuracy of 94% was achieved on custom test data. </p>
                      <p><b>TechStack: PyTorch, Tensorflow, CV2, Keras and Git</b></p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">  
                        <li><a href="https://github.com/praneeth200219/Multi-Camera-Multiple-Object-Tracking-for-CPU.git" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/praneeth200219/SkinAid.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/081.png" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>SkinAid: An Improved Android Skin Lesion Classifier</h3>
                      <p>SkinAid is an android application which can classify and categorize 7 different classes of skin lesions. Initial data was imported from the HAM10000 dataset. This data was preprocessed using the state-of-the-art preprocessing techniques and was augmented with the synthetic data generated from the W-GAN. The data was then trained on Denset-121 with an accuracy of around 95% and was deployed on android.</p>
                      <p><b>Paper Submitted to review at: </b> IFIP International Internet of Things Conference, Amsterdam - 2021.</p>
                      <p><b>TechStack: PyTorch, Tensorflow, Keras, Streamlit, CV2, git</b></p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/praneeth200219/SkinAid.git" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/praneeth200219/The-Case-Study-of-Titanic-Survival-Prediction.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/071.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>A Case Study of the Titanic: Survival Prediction using Machine Learning</h3>
                      <p>This data analytics project uses machine learning to predict which passengers survived the Titanic shipwreck. Performed EDA on the given dataset and predicted the survival of different people by comparing 5 different in-built ML classifiers using the numerical features. Achieved an accoracy of 89%. Improved the accuracy using NLP to preprocess and train non-numeric data.  </p>
                      <p><b>TechStack: Scikit-Learn, NLTK, git</b></p>
                    </div>
                    
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/praneeth200219/The-Case-Study-of-Titanic-Survival-Prediction.git" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/praneeth200219/wiki-summarization.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/091.png" alt="js-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>News Article Summarization Using LSTM and Attention Mechanism in Keras</h3>
                      <p>Preprocessed a given corpus containing both headlines and text using state-of-the-art techniques. Implemented a Sequence-to-Sequence model with LSTM and Attention Mechanism in Python and achieved a validation accuracy of 94% on custom input data.</p>
                      <p><b>TechStack: Pandas, Numpy, Keras, Tensorflow, NLTK and Git.</b></p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/praneeth200219/wiki-summarization.git" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/praneeth200219/Sentiment-Analysis.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/011.png" alt="ror-capstone-lifestyle" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Fine-grained Sentiment Analysis and Classification using NLP Techniques</h3>
                      <p>Trained a dataset of more than 50,000 IMDB reviews involving Positive, Negative and Neutral classes and implemented a supervised sentiment classifier using both Logistic Regression and Naive Baeyes Methods and achieved an accuracy of 90 Percentage. Fine grain Sentiment analysis was also performed using SVMs in the Scikit-Learn Library and classification of reviews into Weakly/Strongly Positive/Negative classes took place. Custom Review's sentiment was predicted with an accuracy of 92%. </p>
                      <p><b>TechStack: Pandas, Numpy, NLTK, Scikit Learn, Git</b></p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                          <li><a href="https://github.com/praneeth200219/Sentiment-Analysis.git" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/021.jpg" alt="tic-toc-toe" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>sAqua: An IoT based Smart Water Maintenance and Management System</h3>
                      <p>Developed a real time water maintenance system which performs different tasks like Water Level Detection, Leakage Detection and Turbidity Detection using different sensors like ultrasonic sensor and water sensor. Connected the Different sensors to an Android Application through the means of Bluetooth. Realtime data was obtained in the android device.</p>
                      <p><b>TechStack: Microcontroller, Sensors, Actuators and Bluetooth Module</b></p>
                    </div>
                    <ul className="actions">
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/031.jpg" alt="HTML-CSS-capstone-project" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Question Similarity Detection using NLP and Siamese Networks</h3>
                      <p>A classifier that allows a user to identify whether two questions are the same or not. Dataset used is the Quora Similarity Dataset. The data is preprocessed using the state-of-the-art NLP techniques. The model will take in the two question embeddings, run them through an LSTM, and then compare the outputs of the two sub networks using cosine similarity.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>Source Code Coming Soon!</a></li>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              
            </div>
            <h1>Mini projects</h1>
            <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/praneeth200219/Non-Photorealistic-Rendering.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/041.jpg" alt="Using-Bootstrap" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Non-Photorealistic Rendering using OpenCV</h3>
                      <p>A Simple demonstration of Non-photorealistic rendering using OpenCV and Jupyter Notebook. Demonstrated the application of different filters like Edge-preserving Smoothing, Gaussian Filter, Detail Enhancer Filter, Pencil Sketch Filter and Stylization on different images. </p>
                      <p><b>TechStack: Python, OpenCV, git</b></p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/praneeth200219/Non-Photorealistic-Rendering.git" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/praneeth200219/Non-Photorealistic-Rendering.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/112.png" alt="Using-Bootstrap" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Facial Mask Detection using OpenCV</h3>
                      <p>Built a real-time system to detect whether the person on the webcam is wearing a mask or not. Trained a dataset of over 1000 images of people with and without mask. </p>
                      <p><b>TechStack: Python, OpenCV, Tensorflow, Keras, git</b></p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://github.com/praneeth200219/Non-Photorealistic-Rendering.git" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
          </div>
        </div>
   </section>
   
    );
  }
}

export default Portfolio;
