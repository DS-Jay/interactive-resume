import React from 'react';

const TechnicalSkills: React.FC = () => {
  return (
    <div className="w-full p-8 overflow-y-auto scrollbar-hide bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Technical Skills</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Science</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Python (e.g., pandas, numpy, scikit-learn, statsmodels)</li>
            <li>R (RStudio, Shiny)</li>
            <li>SQL</li>
            <li>Statistical analysis</li>
            <li>Exploratory data analysis</li>
            <li>Feature engineering</li>
            <li>Time series analysis and forecasting</li>
            <li>A/B testing and multivariate experiments</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Machine Learning</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Deep Learning Frameworks(e.g., TensorFlow, TensorFlow lite, PyTorch)</li>
            <li>Deep Learning Algorithms (e.g., NLP, CNN, Attention Models, Transformers)</li>
            <li>Ensemble modeling (e.g., Time Seriecs Forecating, Regression)</li>
            <li>Bagging/Booststrap Aggregation (e.g., Decision Trees, Random Forest)</li>
            <li>Boosting algorithms (e.g., XGBoost, CatBoost) </li>
            <li>Clustering (e.g., K-Means, Hierarchical Clustering, DBSCAN)</li>
            <li>Dimensionality reduction (e.g., PCA, t-SNE)</li>
            <li>Hyperparameter tuning (e.g., Grid Search, Random Search, Bayesian Optimization</li>
            <li>Cross Validation (e.g., K-Fold, LOOCV, Time Series Purge CV)</li>
            <li>AutoML (e.g., H2O)</li>
            <li>Full machine learning lifecycle management</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Engineering</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>ETL/ELT processes</li>
            <li>Data pipeline development</li>
            <li>AWS SageMaker</li>
            <li>Database management (Oracle, PostgreSQL)</li>
            <li>Data mart development</li>
            <li>Big data technologies</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Analytics & Visualization</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Tableau</li>
            <li>Power BI</li>
            <li>R Shiny Dashboards</li>
            <li>Customer segmentation</li>
            <li>Data visualization</li>
            <li>Jupyter Lab & Anaconda</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Business Intelligence</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Revenue optimization</li>
            <li>Product analytics</li>
            <li>Marketing analytics</li>
            <li>User behavior analysis</li>
            <li>KPI development and tracking</li>
            <li>Demand forecasting</li>
            <li>Supply chain optimization</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product Management</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Product vision and strategy development</li>
            <li>Roadmap creation</li>
            <li>User story writing</li>
            <li>Product discovery</li>
            <li>Competitor analysis</li>
            <li>Wireframing and prototyping</li>
            <li>Aha</li>
            <li>Jira</li>
            <li>LucidChart</li>
            <li>Confluence</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Project Management</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Agile methodologies</li>
            <li>Scrum</li>
            <li>Cross-functional team leadership</li>
            <li>Stakeholder communication</li>
            <li>Resource allocation</li>
            <li>Risk management</li>
            <li>Lean Six Sigma</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Additional Skills</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Version control</li>
            <li>Git</li>
            <li>MLOps</li>
            <li>Cloud computing (AWS)</li>
            <li>API integration (e.g., FedEx API)</li>
            <li>FastAPI, Flask API Development</li>
            <li>Web scraping</li>
            <li>Automation</li>
            <li>Public speaking and presentation</li>
            <li>Technical writing</li>
            <li>Mentoring and training</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;