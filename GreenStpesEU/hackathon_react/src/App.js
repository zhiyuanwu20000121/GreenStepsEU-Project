import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const images = [
  { id: 1, name: 'Image 1', url: '/boxplot.png', description: 'Used to reveal the distribution of various geographical and remote sensing features under different cover types. Through these box plots, we can observe the data distribution of each feature as it varies with cover type, including the median, quartiles, and potential outliers. Specific features include elevation, aspect, slope, horizontal distance to hydrology, vertical distance to hydrology, horizontal distance to roadways, and hillshade at 9 am, noon, and 3 pm.' },
  { id: 2, name: 'Image 2', url: '/CorrelationHeatMap.png', description: 'According to established guidelines for correlation interpretation, values between 0 and 0.19 signify a very weak relationship, 0.2 to 0.39 a weak one, 0.4 to 0.59 moderate, 0.6 to 0.79 strong, and 0.8 to 1 very strong. From the matrix, we observe a strong negative correlation between Hillshade_9am and Hillshade_3pm, hinting that places brighter in the morning typically become less so by the afternoon. Conversely, there is a strong positive correlation between Horizontal_Distance_To_Hydrology and Vertical_Distance_To_Hydrology, indicating that as the horizontal distance from water bodies increases, the vertical distance generally increases as well.' },
  { id: 3, name: 'Image 3', url: '/PCA.png', description: 'This PCA analysis chart likely displays the distribution of different cover types within the Forest Cover Type dataset after dimensionality reduction. The points on the graph may represent forest cover types at different geographical locations, with the colors of the bubbles possibly corresponding to specific cover types, such as coniferous, deciduous, or mixed forests, etc.' },
  { id: 4, name: 'Image 4', url: '/mplot.png', description: 'This chart is a three-dimensional PCA scatter plot, typically used to show the distribution of data across three principal components. Each axis represents a principal component, which are the three most significant orthogonal dimensions of the data, capturing the greatest variance. We know the percentage of variance explained by each principal component, as well as the specific forest types represented by each color. Such information can help us gain a deeper understanding of the distribution patterns of different tree species in the forest.' },
  { id: 5, name: 'Image 5', url: '/Comparison1.png', description:'Created some new features by combining different features such as hydrological distances and fire distances. These new features may better reflect real-world scenarios and capture relationships between data. Next, we will apply the data before and after feature engineering to the Random Forest algorithm separately, and compare the results of the two to evaluate the effectiveness of feature engineering.'},
  { id: 6, name: 'Image 6', url: '/FeatureImportances.png', description: 'This image displays a ranking of feature importance within a model. It includes elevation, aspect, slope, horizontal distance to hydrology, vertical distance to hydrology, horizontal distance to roadways, hillshade at 9am, hillshade at noon, hillshade at 3pm, horizontal distance to fire points, and wilderness area. The length of the bars in the chart represents the importance of these features in the predictive model, with longer bars indicating greater influence, suggesting that these features significantly impact the prediction outcomes.' },
  { id: 7, name: 'Image 7', url: '/Comparison2.png', description:'After FE Random Forest" and "RF with tuned hyperparam" exhibit the best performance in terms of both accuracy and cross-validation mean accuracy, indicating they are likely the most effective among the evaluated models'},
  { id: 8, name: 'Image 8', url: '/SVG1.png', description:'Kernel function parameter gamma in SVM model is tuned, different gamma values are tried, and the accuracy on training set and test set is calculated.'},
  { id: 9, name: 'Image 9', url: '/SVG2.png', description:'Kernel function parameter gamma in SVM model is tuned, different gamma values are tried, and the accuracy on training set and test set is calculated. The most appropriate gamma value has been reached.'},
  { id: 10, name: 'Image 10', url: '/Comparison3.png', description:"The graph illustrates a substantial improvement in the model's performance after adjustments were made. The initial Random Forest (RF) model shows a lower accuracy and cross-validation mean accuracy compared to the Voting Classifier, which presumably incorporates the initial RF as one of its components. The accuracy jumps from 0.782 for the initial RF to 0.845 for the Voting Classifier, and similarly, the cross-validation mean accuracy increases from 0.84 to 0.906. This indicates that the modifications and optimizations implemented in the Voting Classifier have led to a more accurate and generalizable model. Such enhancements could be the result of combining multiple models, tuning hyperparameters, or incorporating feature engineering, demonstrating the effectiveness of these techniques in improving predictive performance."},
  { id: 11, name: 'Image 11', url: '/END.jpg', description: "Thank you!"}
];

const ImageView = () => {
  const { id } = useParams();
  const image = images.find(img => img.id.toString() === id);
  return (
    <div>
      {image ? (
        <>
          <img src={image.url} alt={image.name} style={{ maxWidth: '100%', maxHeight: '300px' }} />
          <p>{image.description}</p>
        </>
      ) : (
        <p>Image not found</p>
      )}
      <Link to="/">Back to Gallery</Link>
    </div>
  );
};

const Gallery = ({ images, currentIndex }) => (
  <div className="gallery-container">
    <div className="image-container">
      <img src={images[currentIndex].url} alt={images[currentIndex].name} style={{ maxWidth: '500px', maxHeight: '500px' }} />
    </div>
    <textarea
      className="textarea-styled"
      value={images[currentIndex].description}
      rows="16" 
      cols="50" 
      readOnly 
    />
  </div>
);

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (step) => {
    setCurrentIndex((prevIndex) => (prevIndex + step + images.length) % images.length);
  };

  return (
    <Router>
      <div className="App">
        <h1 className="title">GreenstepsEU-Hackathon--Team 5</h1>
        <button onClick={() => changeImage(-1)}>Show Previous Image</button>
        <button onClick={() => changeImage(1)}>Show Next Image</button>
        <Routes>
          <Route path="/" element={<Gallery images={images} currentIndex={currentIndex} />} />
          <Route path="/image/:id" element={<ImageView />} />
        </Routes>
        <h2 className="title">Forrest is the lung of the earth!</h2>
      </div>
    </Router>
  );
}

export default App;

