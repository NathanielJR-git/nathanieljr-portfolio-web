# Nathaniel's Selected Projects and Portfolio

## Custom x86 Operating System Kernel
**Tech Stack:** Memory Paging, Preemptive Scheduling, Ext2 Filesystem, Hardware Interrupts

### Description
Architected a custom 32-bit x86 operating system from the ground up to establish fundamental low-level bare-metal execution. Engineered intricate memory management systems utilizing explicit hardware paging and a Global Descriptor Table for secure memory isolation. Designed a preemptive process scheduler and integrated an ext2-compatible file system to orchestrate concurrent multitasking and resilient data persistence. Conducted direct hardware interfacing to manage programmable interrupts, keyboard I/O, and direct framebuffer rendering within a fully bootable architecture.

## Rush Hour Game Puzzle Solver
**Tech Stack:** A* Search, Fringe Search, Heuristic Search, JavaFX GUI
**Link:** https://github.com/0xNathaniel/Tucil3_13523013_13523040

### Description
Engineered an optimal pathfinding solver for the classic Rush Hour sliding-block puzzle using multiple informed and uninformed search strategies on a 6x6 state space. Implemented Uniform Cost Search, Greedy Best-First, A*, and Fringe Search with custom heuristics including blocking cars count and exit distance, leveraging graph-based state representation with efficient move generation and cycle detection. Built an interactive JavaFX GUI featuring real-time animation of vehicle movements, step-by-step node exploration statistics, and performance benchmarking to visualize algorithmic efficiency and solution optimality.

## Quadtree Image Compressor
**Tech Stack:** Quadtree Algorithm, Recursive Partitioning, SSIM Metric, Adaptive Thresholding
**Link:** https://github.com/0xNathaniel/Tucil2_13523003_13523013

### Description
Designed and implemented an adaptive Quadtree-based image compression engine that recursively partitions images into homogeneous regions using multiple statistical homogeneity criteria. Integrated Variance, MAD, Max Pixel Difference, Entropy, and SSIM metrics for splitting decisions, combined with a binary search mechanism to dynamically tune thresholds and achieve precise target compression ratios. Generated progressive GIF visualizations of the tree construction process alongside compressed JPEG outputs, demonstrating sophisticated divide-and-conquer spatial partitioning and perceptual quality preservation.

## IDX30 PCA Portfolio Analysis
**Tech Stack:** Principal Component Analysis, Eigen Decomposition, Portfolio Optimization, Covariance Analysis
**Link:** https://github.com/0xNathaniel/IDX30-PCA-Analysis

### Description
Conducted comprehensive Principal Component Analysis on IDX30 index constituents to decompose portfolio risk into systematic and idiosyncratic factors using covariance matrix eigen-decomposition. Implemented dimensionality reduction techniques to identify dominant risk drivers, construct PCA-weighted portfolios, and compare risk-return profiles against traditional benchmarks through Monte Carlo simulations and backtesting. Leveraged advanced linear algebra and statistical methods to quantify factor loadings, diversification benefits, and optimization trade-offs in the Indonesian equity market context.

## Feedforward Neural Network from Scratch
**Tech Stack:** Backpropagation Algorithm, Multilayer Perceptron, Stochastic Gradient Descent, Matrix Calculus
**Link:** https://github.com/0xNathaniel/ffnn-from-scratch-tubes1-ml-lastworgxhx

### Description
Engineered a complete feedforward neural network from first principles to demystify core deep learning mechanics in a machine learning coursework context. Architected multilayer perceptron layers with explicit matrix-based forward propagation and backpropagation for gradient-based weight updates, implementing activation functions and loss computation without external frameworks. Leveraged linear algebra fundamentals and calculus-derived partial derivatives within a custom training loop to optimize parameters via stochastic gradient descent, delivering full transparency into convergence behavior across varying architectures and hyperparameters.

## Binomial Option Pricing Model
**Tech Stack:** Binomial Lattice, Risk-Neutral Valuation, Backward Induction, Dynamic Programming
**Link:** https://github.com/0xNathaniel/binomial-option-pricing-model

### Description
Architected a binomial lattice framework to accurately price European-style stock options under discrete-time stochastic processes. Implemented risk-neutral valuation combined with backward induction through dynamic programming to recursively compute option payoffs from terminal nodes back to t=0 across the recombining tree. Integrated live market data retrieval and conducted convergence analysis by varying time-step granularity to validate model stability and alignment with continuous-time limits, creating a production-grade quantitative tool for derivative analysis.

## ATS-Friendly CV Scanner with RSA Encryption
**Tech Stack:** Aho-Corasick Algorithm, Knuth-Morris-Pratt Algorithm, Levenshtein Distance, RSA Cryptography
**Link:** https://github.com/0xNathaniel/Tubes3_CLCC

### Description
Designed a secure, high-performance Applicant Tracking System scanner that ranks CVs by keyword relevance while protecting applicant data through manual RSA encryption. Engineered Knuth-Morris-Pratt, Boyer-Moore, Aho-Corasick, and Levenshtein distance algorithms for exact, heuristic, multi-pattern, and fuzzy string matching on PDF-extracted text, enabling efficient and typo-tolerant ranking at scale. Integrated a MariaDB backend for encrypted profile storage and a polished Flet GUI for real-time algorithm selection and result visualization, solving the dual challenges of ATS compatibility and privacy compliance in automated recruitment workflows.

## TCP Over UDP
**Tech Stack:** Reliable Data Transfer, Socket Programming, Custom Network Protocol, Concurrency Management

### Description
Architected a custom reliable transport layer protocol operating over UDP to establish guaranteed, ordered data delivery within simulated lossy network environments. Engineered a highly concurrent client-server architecture integrating a bespoke three-way handshake, precise sequence tracking, and custom byte-level data framing. Implemented thread-safe connection handling utilizing mutex locks alongside automated heartbeat lifecycle management to ensure robust socket persistence.

## Raft Consensus Engine
**Tech Stack:** Raft Consensus Algorithm, State Machine Replication, Persistent Log Replication, Distributed Fault Tolerance

### Description
Engineered a production-grade Raft consensus implementation that solves distributed state agreement across fault-prone networks, enabling linearizable consistency and automatic leader election in heterogeneous clusters. Architected a sophisticated state machine pattern with role-specific state transitions (Follower, Candidate, Leader) that orchestrate deterministic log replication and quorum-based voting to guarantee safety properties. The system handles network partitions and node failures through term-based timeout mechanisms and persistent state storage, supporting dynamic membership changes without downtime. Implemented HTTP/REST transport middleware for inter-node communication, delivering a resilient distributed consensus substrate for mission-critical applications.

## Real-Time Bidding & Commerce Engine
**Tech Stack:** ACID Transactional Locking, Bidirectional WebSockets, Cursor-based Paging, VAPID Cryptography

### Description
Architected a high-concurrency e-commerce and real-time auction engine leveraging ACID-compliant database locking mechanisms to ensure deterministic bid resolution and prevent race conditions during high-frequency trading. Engineered bidirectional, event-driven WebSocket channels to instantly propagate market state mutations, bid histories, and precise countdown synchronizations across distributed client architectures. Designed a robust cursor-based data ingestion pipeline and an asynchronous push-notification cryptosystem using VAPID authentication, scaling efficiently to resolve concurrent connections while maintaining strict transactional data integrity.

## Sobel Edge Detection with Parallel Programming
**Tech Stack:** CUDA Parallel Processors, Sobel Convolution, Shared-Memory Tiling, Message Passing Interface (MPI)

### Description
Engineered a high-throughput image processing pipeline leveraging heterogeneous parallel computing models to accelerate the complex mathematical computations of Sobel edge operators. The architecture minimizes global GPU memory latency through intricate shared-memory tiling and cooperative halo loading, assigning a dedicated thread to formulate the 3x3 per-pixel convolution matrix and calculate continuous gradient magnitudes. By distributing tensor workloads across CUDA, OpenMP, and OpenMPI paradigms, the computing module efficiently amortizes hardware allocation overheads to achieve exponentially scalable execution limits on massive 8K datasets.

## AI-Powered Cinematic Portfolio & RAG Engine
**Tech Stack:** LangChain, RAG Architecture, GSAP, AWS
**Link:** https://github.com/0xNathaniel/nathanieljr-portfolio-web

### Description
Architected a high-fidelity, cinematic portfolio website featuring an embedded Retrieval-Augmented Generation (RAG) chatbot. Engineered an advanced retrieval strategy utilizing query decomposition and multi-query routing via LangChain to handle complex, contextual user interactions intelligently. Orchestrated the entire deployment pipeline using Docker and GitHub Actions, ensuring a robust, containerized delivery on AWS infrastructure.

## Mealdrop
**Tech Stack:** System Architecture, AWS, PostgreSQL, Flutter

### Description
Engineered scalable backend microservices and responsive mobile interfaces as a Software Engineer for the Mealdrop platform. Designed and optimized complex relational database schemas in PostgreSQL to handle high-volume, concurrent transaction data efficiently. Streamlined the server infrastructure on AWS, ensuring high availability and seamless data synchronization with the Flutter client.

## Pasar Seni ITB 2025 Platform
**Tech Stack:** Next.js, PostgreSQL, State Management, Full-Stack System
**Link:** https://www.pasarseniitb.com/

### Description
Spearheaded the full-stack development of the official web platform for Pasar Seni ITB 2025, accommodating massive concurrent traffic during peak event registrations. Architected a highly reactive client-side experience using Next.js, while designing a robust, normalized PostgreSQL database schema for secure user and transaction management. Implemented advanced state management and caching strategies to ensure sub-second latency across all critical endpoints.

## IDX:INDF Equity Research
**Tech Stack:** Monte Carlo Simulation, Financial Modeling, Quant Analysis

### Description
Conducted comprehensive equity research and valuation for Indofood (IDX:INDF), integrating rigorous industry analysis with advanced financial modeling. Engineered stochastic quantitative models, specifically utilizing Monte Carlo simulations, to project complex revenue streams and assess probabilistic risk scenarios. Synthesized these multi-dimensional financial metrics to formulate a deeply analytical, data-driven investment thesis.

## Pothole Semantic Segmentation with EoMT
**Tech Stack:** Vision Transformer, Mask Transformer, Dice-BCE Loss, Test-Time Augmentation
**Link:** https://github.com/0xNathaniel/ds-portfolio

### Description
Engineered an end-to-end semantic segmentation pipeline leveraging Encoder-only Mask Transformer (EoMT) with a ViT-Large backbone pre-trained via DINOv3 masked image modeling for high-precision pothole detection. Designed comprehensive exploratory analysis using Laplacian variance, image moments, and spatial statistics, combined with geometric augmentations and a custom Dice-BCE hybrid loss function to address severe class imbalance and irregular boundaries. Implemented objectness-weighted query aggregation and flip-based Test-Time Augmentation ensembling to boost inference robustness, achieving competitive Dice scores and securing 2nd place nationally in the ARA 7.0 Data Science Competition.

## Cultural Image Classification with DINOv3 and Explainable AI (XAI)
**Tech Stack:** DINOv3 Vision Transformer, Transfer Learning, Explainable AI, Custom Classification Head
**Link:** https://github.com/0xNathaniel/ds-portfolio

### Description
Architected a state-of-the-art cultural image classifier using the DINOv3-Huge vision transformer with a custom classification head for fine-grained Indonesian cultural heritage recognition. Conducted extensive transfer learning from self-supervised pretraining, integrating feature extraction, hyperparameter optimization, and explainable AI techniques to interpret model decisions on complex visual patterns. Delivered robust performance through meticulous fine-tuning and comprehensive evaluation, securing 5th place nationally in the Logika UI Data Science Competition.

## IBM Employee Churn Data Consulting
**Tech Stack:** CatBoost Ensemble, Predictive Modeling, Feature Interaction Analysis, Business Intelligence
**Link:** https://github.com/0xNathaniel/ds-portfolio

### Description
Conducted in-depth predictive analytics on IBM HR employee attrition dataset using ensemble modeling and advanced feature interactions to uncover key drivers of churn. Applied sophisticated EDA, statistical profiling, and CatBoost gradient boosting to model complex non-linear relationships across 44+ features while maintaining interpretability for business stakeholders. Translated model insights into actionable retention strategies through interactive visualizations and storytelling, completing the Global Consumer Intelligence Course final project.

## Movie Popularity Analytics with ML, DL and Statistical Testing
**Tech Stack:** XGBoost Regression, Sentence Transformers, Statistical Hypothesis Testing, TF-IDF & Embeddings
**Link:** https://github.com/0xNathaniel/ds-portfolio

### Description
Developed a multi-modal movie popularity prediction system integrating XGBoost/CatBoost regression, Sentence Transformers NLP embeddings, and rigorous statistical hypothesis testing to identify significant success factors. Engineered TF-IDF and contextual embeddings alongside Spearman correlation, Mann-Whitney U, and Kruskal-Wallis tests to validate feature importance and distributional differences. Delivered first-place winning solution at the national Informatics Festival Unpad Data Analysis Competition through high-accuracy models and compelling data storytelling.

## Talent Salary Prediction with Gradient Boosted Trees and SHAP
**Tech Stack:** CatBoost & LightGBM, SHAP Interpretability, Ensemble Stacking, K-Fold Cross Validation
**Link:** https://github.com/0xNathaniel/ds-portfolio

### Description
Built a high-precision salary prediction engine for data analytics talent using stacked ensemble methods (CatBoost, XGBoost, LightGBM) with extensive feature engineering and SHAP-based interpretability. Implemented K-Fold cross-validation and hyperparameter optimization to ensure strong generalization across the private leaderboard. Secured 1st place nationally in the Informatics Festival Unpad business case competition by delivering low MAE predictions and actionable salary benchmarking insights.
