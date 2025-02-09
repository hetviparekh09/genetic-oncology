import React from 'react';
//import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h1>About Genetic Oncology</h1>
          <p>
            Genetic oncology is the study of cancer through the lens of genetics. It focuses on identifying genetic mutations that may lead to cancer, understanding how these mutations contribute to cancer development, and exploring targeted treatments.
          </p>
          <h2>Key Areas of Study</h2>
          <ul>
            <li>
              <strong>Genetic Mutations:</strong> Investigating specific changes in DNA that increase cancer risk.
            </li>
            <li>
              <strong>Hereditary Cancer Syndromes:</strong> Studying inherited genetic mutations passed down through families.
            </li>
            <li>
              <strong>Targeted Therapies:</strong> Developing treatments that specifically target genetic alterations in cancer cells.
            </li>
          </ul>
          <h2>Importance of Genetic Oncology</h2>
          <p>
            Understanding the genetic basis of cancer can lead to:
          </p>
          <ul>
            <li>Improved risk assessment and early detection strategies.</li>
            <li>Personalized treatment plans tailored to individual genetic profiles.</li>
            <li>Development of new therapies targeting specific genetic changes.</li>
          </ul>
          <h2>Genetic Testing</h2>
          <p>
            Genetic testing can identify individuals at increased risk for certain types of cancer. A positive test result indicates the presence of a genetic change associated with an increased cancer risk. Such harmful genetic changes are called pathogenic or likely pathogenic variants. [Source: National Cancer Institute](https://www.cancer.gov/about-cancer/causes-prevention/genetics/genetic-testing-fact-sheet)
          </p>
          <h2>Advancements in Research</h2>
          <p>
            Ongoing research in genetic oncology is leading to the discovery of new genetic mutations linked to cancer and the development of drugs that target these specific changes. For example, pharmacogenomics studies how genetic changes affect drug response, leading to more effective treatments. [Source: Centers for Disease Control and Prevention](https://www.cdc.gov/genomics-and-health/pharmacogenomics/index.html)
          </p>
        </div>
        <div className="about-image">
          <img src="./images/Screenshot 2025-02-09 173653.png" alt="Genetic Oncology" />
        </div>
      </div>
    </div>
  );
};

export default About;
