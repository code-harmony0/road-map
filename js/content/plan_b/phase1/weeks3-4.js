export const WEEKS = [
  {
    "id": "b3",
    "num": "WEEK B03",
    "title": "NumPy + Pandas",
    "theme": "Data Science Foundations",
    "color": "#f59e0b",
    "boss": {
      "id": "boss-b3",
      "name": "The Data Wrangler",
      "challenge": "Master NumPy and Pandas. Clean, transform, analyze a real dataset. Build a data pipeline.",
      "rewardXP": 500,
      "resumeLine": "Built data processing pipelines with NumPy and Pandas handling 100K+ row datasets",
      "successCriteria": [
        "NumPy: arrays, broadcasting, vectorization, linear algebra operations",
        "Pandas: DataFrame, Series, groupby, merge, pivot, time series",
        "Cleaned and transformed real dataset (Kaggle or your own)",
        "Built ETL pipeline: extract, transform, load",
        "Data visualization with Matplotlib/Seaborn",
        "25 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Install NumPy, Pandas, Matplotlib, Seaborn",
        "Learn NumPy: ndarray, shape, dtype, slicing, broadcasting, universal functions",
        "Learn Pandas: read_csv, DataFrame, Series, indexing, filtering, groupby, merge, concat",
        "Download Kaggle dataset (e.g., Titanic, housing prices, or your app's analytics)",
        "Clean data: handle missing values, outliers, duplicates",
        "Transform: feature engineering, normalization, encoding",
        "Analyze: descriptive statistics, correlations, groupby aggregations",
        "Visualize: histograms, scatter plots, heatmaps, time series",
        "Build pipeline script: load → clean → transform → save",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Jupyter notebook with analysis",
        "ETL pipeline script",
        "Cleaned dataset",
        "Visualization images",
        "25 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "Dataset cleaned, pipeline works, visualizations meaningful, 25 medium",
        "fail": "Only reading CSV without transformation, or <25 medium"
      }
    },
    "tasks": [
      {
        "id": "b3-d1",
        "day": "Day 1",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 75,
        "text": "Install NumPy, Pandas, Jupyter. Learn NumPy: create arrays, reshape, slice, broadcast, vectorized operations. Compare Python list vs NumPy array performance.",
        "reason": "NumPy is the foundation of all Python data science. Vectorization replaces loops. 100x speedup."
      },
      {
        "id": "b3-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b3-d2",
        "day": "Day 2",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 100,
        "text": "Learn Pandas: read_csv, DataFrame, Series, head, tail, info, describe. Indexing: loc, iloc, boolean indexing. Filtering and sorting.",
        "reason": "Pandas is Excel for programmers. If you can't manipulate DataFrames, you can't do data science."
      },
      {
        "id": "b3-d3",
        "day": "Day 3",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 100,
        "text": "Learn Pandas advanced: groupby, merge, concat, pivot tables, time series (resample, rolling).",
        "reason": "groupby is the Swiss Army knife of data analysis. merge is SQL JOIN in Python."
      },
      {
        "id": "b3-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b3-d4",
        "day": "Day 4",
        "time": "6.25h",
        "depth": "Medium",
        "xp": 75,
        "text": "Download Kaggle dataset. Explore: shape, columns, missing values, duplicates, outliers. Document findings.",
        "reason": "Real data is messy. Cleaning is 80% of data science work. Embrace the mess."
      },
      {
        "id": "b3-d5",
        "day": "Day 5",
        "time": "6.25h",
        "depth": "Medium",
        "xp": 75,
        "text": "Clean and transform: fill missing values, remove outliers, encode categoricals, normalize numerics. Feature engineering: create new columns.",
        "reason": "Garbage in, garbage out. Clean data is the prerequisite for good models."
      },
      {
        "id": "b3-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b3-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Visualize: histograms, box plots, scatter plots, correlation heatmap, time series. Save as images.",
        "reason": "Visualization reveals patterns numbers hide. Matplotlib and Seaborn are the standards."
      },
      {
        "id": "b3-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Build ETL pipeline script: load → clean → transform → save. LeetCode: 2 medium in Python. Blog: 'Data Cleaning with Pandas: A Mobile Dev's Journey'.",
        "reason": "ETL pipelines are production data engineering. Script it, don't notebook it."
      },
      {
        "id": "b3-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      }
    ]
  },
  {
    "id": "b4",
    "num": "WEEK B04",
    "title": "scikit-learn + ML Basics",
    "theme": "Machine Learning Foundations",
    "color": "#8b5cf6",
    "boss": {
      "id": "boss-b4",
      "name": "The ML Engineer",
      "challenge": "Build and evaluate 3 ML models: classification, regression, clustering. Understand the full pipeline.",
      "rewardXP": 500,
      "resumeLine": "Built and evaluated classification, regression, and clustering models with scikit-learn achieving 85%+ accuracy",
      "successCriteria": [
        "Classification model: logistic regression or random forest, 80%+ accuracy",
        "Regression model: linear regression or gradient boosting, RMSE documented",
        "Clustering model: K-means, silhouette score documented",
        "Train/test split, cross-validation, hyperparameter tuning",
        "Feature importance analysis",
        "Model saved with joblib, loaded and tested",
        "30 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Install scikit-learn",
        "Classification: load Iris or Titanic, preprocess, train logistic regression and random forest, evaluate accuracy, precision, recall, F1",
        "Regression: load housing dataset, train linear regression and gradient boosting, evaluate RMSE, R²",
        "Clustering: load customer data, K-means with elbow method, evaluate silhouette score",
        "Hyperparameter tuning: GridSearchCV or RandomizedSearchCV",
        "Feature importance: plot top 10 features",
        "Save best model: joblib.dump(), load and predict",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "3 Jupyter notebooks (classification, regression, clustering)",
        "Model files (.joblib)",
        "Evaluation metrics table",
        "Feature importance plots",
        "30 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "3 models trained, evaluated, saved, 30 medium LeetCode",
        "fail": "Only following tutorials without understanding, or <30 medium"
      }
    },
    "tasks": [
      {
        "id": "b4-d1",
        "day": "Day 1",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 75,
        "text": "Learn ML pipeline: data → preprocess → split → train → evaluate → deploy. Install scikit-learn. Load Iris dataset. Train logistic regression. Evaluate accuracy.",
        "reason": "Understanding the pipeline is more important than any single algorithm. The pipeline is the job."
      },
      {
        "id": "b4-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b4-d2",
        "day": "Day 2",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 100,
        "text": "Classification deep dive: random forest, SVM, gradient boosting. Compare accuracy, precision, recall, F1. Plot confusion matrix. ROC curve.",
        "reason": "Accuracy is misleading for imbalanced data. Precision, recall, F1 tell the real story."
      },
      {
        "id": "b4-d3",
        "day": "Day 3",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 100,
        "text": "Regression: load housing dataset. Train linear regression, ridge, lasso, gradient boosting. Evaluate RMSE, MAE, R². Plot predictions vs actual.",
        "reason": "Regression is everywhere: pricing, forecasting, estimation. Master the metrics."
      },
      {
        "id": "b4-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b4-d4",
        "day": "Day 4",
        "time": "6.25h",
        "depth": "Medium",
        "xp": 75,
        "text": "Clustering: K-means with elbow method. Silhouette score. DBSCAN for comparison. Visualize clusters with PCA or t-SNE.",
        "reason": "Clustering is unsupervised learning. No labels. Harder but powerful for segmentation."
      },
      {
        "id": "b4-d5",
        "day": "Day 5",
        "time": "6.25h",
        "depth": "Medium",
        "xp": 75,
        "text": "Hyperparameter tuning: GridSearchCV, RandomizedSearchCV. Cross-validation: k-fold. Understand overfitting vs underfitting.",
        "reason": "Default hyperparameters are rarely optimal. Tuning improves models 10–20%."
      },
      {
        "id": "b4-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b4-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Feature importance: plot top 10 features for random forest and gradient boosting. Save best model with joblib. Load and test prediction.",
        "reason": "Feature importance explains the model. joblib is the standard for model persistence."
      },
      {
        "id": "b4-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "LeetCode: 2 medium in Python. Blog: 'I Built My First ML Models: Classification, Regression, Clustering'. Share metrics and lessons.",
        "reason": "ML content with metrics is rare. Shows you understand evaluation, not just training."
      },
      {
        "id": "b4-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      }
    ]
  }
];

export const DETAILS = {
  "b3-d1": {
    "objective": "Master the foundation of Python vectorization with NumPy",
    "why": "Python `for` loops are too slow for millions of data points. NumPy delegates operations to optimized C/C++ backends, yielding 100x speedups. You must think in 'arrays', not 'loops'.",
    "steps": [
      "Install `numpy` and `jupyter`.",
      "Create 1D, 2D, and 3D `ndarrays`.",
      "Practice slicing arrays and extracting sub-matrices.",
      "Write a `for` loop to multiply two lists, then do the same using NumPy vectorization. Compare the execution times using `%timeit`."
    ],
    "tools": ["NumPy", "Jupyter Notebook"],
    "deliverable": "Jupyter notebook with vectorization benchmarks",
    "definitionOfDone": "You can perform matrix multiplication and element-wise operations without writing a single `for` loop",
    "commonMistakes": ["Iterating through a NumPy array using a Python `for` loop (defeats the purpose)"],
    "resumeLine": null,
    "connectsTo": "b3-d2"
  },
  "b3-d2": {
    "objective": "Achieve fluency in tabular data manipulation using Pandas",
    "why": "Pandas is the industry standard for data wrangling. If you cannot slice, filter, and manipulate DataFrames, you cannot prepare data for Machine Learning models.",
    "steps": [
      "Load a sample CSV file using `pd.read_csv()`.",
      "Practice indexing using `.loc` (label-based) and `.iloc` (integer-based).",
      "Apply boolean masking to filter rows (e.g., `df[df['age'] > 30]`).",
      "Generate descriptive statistics using `.describe()` and `.info()`."
    ],
    "tools": ["Pandas"],
    "deliverable": "A structured notebook with basic data exploration",
    "definitionOfDone": "You can load a CSV, filter it based on complex conditions, and extract specific columns/rows",
    "commonMistakes": ["Chained indexing `df['A'][0]` instead of `df.loc[0, 'A']` (leads to SettingWithCopyWarning)"],
    "resumeLine": null,
    "connectsTo": "b3-d3"
  },
  "b3-d3": {
    "objective": "Master advanced aggregations and relational operations in Pandas",
    "why": "Real-world data is scattered across multiple tables and requires aggregation to uncover insights. `groupby` and `merge` are the SQL equivalents in Python.",
    "steps": [
      "Use `groupby` to aggregate data (e.g., average salary by department).",
      "Perform a `merge` (Left, Right, Inner, Outer joins) between two DataFrames.",
      "Use `pd.concat` to append datasets vertically.",
      "Create a pivot table using `pd.pivot_table()`."
    ],
    "tools": ["Pandas Groupby", "Pandas Merge"],
    "deliverable": "A notebook containing joined datasets and aggregated summary tables",
    "definitionOfDone": "You can join two separate CSV files on a common key and aggregate the resulting data",
    "commonMistakes": ["Confusing `concat` (stacking) with `merge` (joining)"],
    "resumeLine": "Engineered robust data pipelines utilizing advanced Pandas aggregations, handling 100K+ row datasets efficiently",
    "connectsTo": "b3-d4"
  },
  "b3-d4": {
    "objective": "Perform Exploratory Data Analysis (EDA) on a messy, real-world dataset",
    "why": "Kaggle datasets are clean; production data is dirty. You must learn to identify anomalies before feeding data into models.",
    "steps": [
      "Download the 'Titanic' or 'Housing Prices' dataset from Kaggle.",
      "Identify the percentage of missing values per column.",
      "Detect outliers using Z-scores or IQR (Interquartile Range).",
      "Document the anomalies in markdown cells."
    ],
    "tools": ["Kaggle", "Pandas `isnull()`"],
    "deliverable": "An EDA report highlighting data quality issues",
    "definitionOfDone": "You have a documented list of columns that require imputation or dropping",
    "commonMistakes": ["Blindly dropping all rows with missing values (loses valuable data)"],
    "resumeLine": null,
    "connectsTo": "b3-d5"
  },
  "b3-d5": {
    "objective": "Execute data cleaning and feature engineering transformations",
    "why": "Garbage in, garbage out. The quality of your data transformation dictates the ceiling of your model's accuracy.",
    "steps": [
      "Impute missing numeric values using the median or mean.",
      "Impute categorical values using the mode or a placeholder.",
      "Apply One-Hot Encoding (`pd.get_dummies()`) to categorical features.",
      "Create a new 'engineered' feature (e.g., combining 'SibSp' and 'Parch' into 'FamilySize' for Titanic)."
    ],
    "tools": ["Pandas Imputation", "Feature Engineering"],
    "deliverable": "A cleaned, numeric-only DataFrame ready for ML",
    "definitionOfDone": "The DataFrame contains zero NaN values and all strings are converted to numeric encodings",
    "commonMistakes": ["Leaking data by calculating imputation means *after* the train/test split"],
    "resumeLine": "Developed automated data cleansing and feature engineering workflows, improving dataset readiness for ML models",
    "connectsTo": "b3-d6"
  },
  "b3-d6": {
    "objective": "Communicate data insights through programmatic visualizations",
    "why": "Stakeholders don't read raw data; they read charts. Visualizing correlation and distributions is key to explaining your engineering decisions.",
    "steps": [
      "Install `matplotlib` and `seaborn`.",
      "Create a distribution histogram for a numeric variable.",
      "Generate a scatter plot to identify the relationship between two variables.",
      "Plot a correlation heatmap (`sns.heatmap`) to find highly correlated features."
    ],
    "tools": ["Matplotlib", "Seaborn"],
    "deliverable": "A visual report containing 3+ distinct chart types",
    "definitionOfDone": "You have saved clear, labeled visual plots that illustrate the data's core trends",
    "commonMistakes": ["Creating charts without titles, legends, or axis labels (useless to stakeholders)"],
    "resumeLine": null,
    "connectsTo": "b3-d7"
  },
  "b3-d7": {
    "objective": "Consolidate analysis into a reproducible ETL pipeline script",
    "why": "Jupyter notebooks are for exploration; scripts are for production. You must translate your interactive code into a repeatable pipeline.",
    "steps": [
      "Extract the cleaning and transformation logic from your notebook.",
      "Wrap the logic in a modular Python class or function (`def run_pipeline():`).",
      "Save the final output to a new `cleaned_dataset.csv`.",
      "Write a LinkedIn post detailing one specific data mess you cleaned."
    ],
    "tools": ["Python Scripts", "ETL Patterns"],
    "deliverable": "A standalone `pipeline.py` script that transforms raw data into clean data",
    "definitionOfDone": "Running `python pipeline.py` successfully ingests, cleans, and exports the data without manual intervention",
    "commonMistakes": ["Leaving hardcoded file paths in the script instead of passing them as arguments"],
    "resumeLine": "Architected end-to-end ETL pipelines in Python, automating the extraction and transformation of raw analytical data",
    "connectsTo": "Week 4"
  },
  "b4-d1": {
    "objective": "Understand the Machine Learning lifecycle and build a baseline classifier",
    "why": "scikit-learn provides a unified API for hundreds of algorithms. Mastering its `fit`, `predict`, and `transform` pattern unlocks the entire ML ecosystem.",
    "steps": [
      "Load the standard Iris dataset.",
      "Use `train_test_split` to divide data (80% train, 20% test).",
      "Initialize a `LogisticRegression` model and call `.fit()`.",
      "Generate predictions on the test set and calculate the baseline `accuracy_score`."
    ],
    "tools": ["scikit-learn", "LogisticRegression"],
    "deliverable": "A working classification pipeline",
    "definitionOfDone": "You have trained a model that achieves >80% accuracy on the test set",
    "commonMistakes": ["Testing the model on the training data (leads to 100% false accuracy)"],
    "resumeLine": null,
    "connectsTo": "b4-d2"
  },
  "b4-d2": {
    "objective": "Master advanced classification algorithms and rigorous evaluation metrics",
    "why": "Accuracy is misleading for imbalanced datasets. You must understand Precision (false positives), Recall (false negatives), and the F1 Score to evaluate models truthfully.",
    "steps": [
      "Train a `RandomForestClassifier` and a `SVC` (Support Vector Machine).",
      "Generate a `classification_report` to view Precision, Recall, and F1.",
      "Plot a Confusion Matrix to visualize where the model is failing.",
      "Plot the ROC curve and calculate the AUC (Area Under Curve)."
    ],
    "tools": ["RandomForest", "ConfusionMatrixDisplay", "ROC/AUC"],
    "deliverable": "A comprehensive classification evaluation report",
    "definitionOfDone": "You can explain the difference between Precision and Recall using a real-world example (e.g., cancer detection vs spam filtering)",
    "commonMistakes": ["Optimizing for accuracy on a 99/1 imbalanced dataset"],
    "resumeLine": "Trained and evaluated advanced classification models, optimizing for Precision/Recall tradeoffs using scikit-learn",
    "connectsTo": "b4-d3"
  },
  "b4-d3": {
    "objective": "Implement regression models to predict continuous numerical values",
    "why": "While classification predicts categories, regression predicts quantities (prices, temperatures). This requires a completely different set of evaluation metrics.",
    "steps": [
      "Load a regression dataset (e.g., California Housing).",
      "Train a `LinearRegression` and a `GradientBoostingRegressor`.",
      "Evaluate using RMSE (Root Mean Squared Error) and MAE (Mean Absolute Error).",
      "Calculate the R-squared value to determine explained variance."
    ],
    "tools": ["LinearRegression", "GradientBoosting", "RMSE/MAE"],
    "deliverable": "A working regression pipeline with error analysis",
    "definitionOfDone": "You have trained a regressor and can explain the average error margin in the target variable's units",
    "commonMistakes": ["Using classification metrics (accuracy) on a regression problem"],
    "resumeLine": "Developed predictive regression models utilizing Gradient Boosting to forecast continuous variables with low MAE",
    "connectsTo": "b4-d4"
  },
  "b4-d4": {
    "objective": "Apply unsupervised learning techniques to discover hidden patterns",
    "why": "In the real world, data often lacks labels. Clustering allows you to segment users, detect anomalies, or group similar items without prior knowledge.",
    "steps": [
      "Load an unlabelled dataset (e.g., Customer Segmentation data).",
      "Apply the `KMeans` algorithm to group the data into clusters.",
      "Use the 'Elbow Method' to determine the optimal value of K.",
      "Evaluate the cluster density using the Silhouette Score."
    ],
    "tools": ["KMeans", "Elbow Method", "Silhouette Score"],
    "deliverable": "A clustering analysis notebook with visual segmentation",
    "definitionOfDone": "You have successfully clustered the data and visualized the groupings using a scatter plot",
    "commonMistakes": ["Forgetting to scale/standardize data before applying distance-based algorithms like K-Means"],
    "resumeLine": "Applied unsupervised K-Means clustering algorithms to uncover latent segments in unlabelled datasets",
    "connectsTo": "b4-d5"
  },
  "b4-d5": {
    "objective": "Optimize model performance through automated hyperparameter tuning",
    "why": "Default model settings leave performance on the table. Grid search systematically tests combinations to find the absolute mathematical optimum.",
    "steps": [
      "Define a dictionary of hyperparameters for your Random Forest (e.g., `n_estimators`, `max_depth`).",
      "Use `GridSearchCV` to run k-fold cross-validation on all parameter combinations.",
      "Identify the `best_params_` and `best_score_`.",
      "Compare the tuned model's performance against the default baseline."
    ],
    "tools": ["GridSearchCV", "Cross Validation"],
    "deliverable": "An optimized model achieved through exhaustive grid search",
    "definitionOfDone": "You have successfully increased a model's baseline accuracy by at least 2% through tuning",
    "commonMistakes": ["Searching too large of a grid, leading to massive compute times (use RandomizedSearchCV for large spaces)"],
    "resumeLine": "Optimized machine learning architectures via rigorous hyperparameter tuning and k-fold cross-validation pipelines",
    "connectsTo": "b4-d6"
  },
  "b4-d6": {
    "objective": "Extract model interpretability and deploy the finalized artifact",
    "why": "Black-box models are dangerous. You must be able to explain *why* the model makes a decision. Then, you must persist it for production use.",
    "steps": [
      "Extract the `feature_importances_` array from your optimized Random Forest.",
      "Plot a bar chart showing the top 10 most influential features.",
      "Use `joblib.dump()` to save the trained model to disk.",
      "Write a separate script to `joblib.load()` the model and predict on new mock data."
    ],
    "tools": ["Feature Importance", "Joblib"],
    "deliverable": "An interpretable feature analysis and a serialized `.joblib` model file",
    "definitionOfDone": "The saved model can be loaded into a fresh Python process and successfully execute a `.predict()` call",
    "commonMistakes": ["Saving the model but forgetting to save the Scaler/Encoder used during preprocessing"],
    "resumeLine": "Serialized and deployed machine learning artifacts for production inference using joblib",
    "connectsTo": "b4-d7"
  },
  "b4-d7": {
    "objective": "Synthesize ML learnings into a public-facing technical asset",
    "why": "Proving that a former mobile/full-stack developer can now articulate the differences between classification and clustering is a massive signal of your successful pivot.",
    "steps": [
      "Draft a blog post summarizing your Week 4 experience.",
      "Include the visual plot of your Feature Importance or Confusion Matrix.",
      "Explain the trade-off you found between a simple Logistic Regression and a complex Random Forest.",
      "Post to LinkedIn tagging #MachineLearning and #DataScience."
    ],
    "tools": ["LinkedIn", "Medium"],
    "deliverable": "A published, data-backed case study",
    "definitionOfDone": "The post is live and clearly communicates an understanding of ML evaluation metrics",
    "commonMistakes": ["Posting only code; the value is in explaining the *business implications* of the metrics"],
    "resumeLine": null,
    "connectsTo": "Week 5"
  }
};
